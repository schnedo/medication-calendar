/* eslint-disable sonarjs/no-duplicate-string */
import { render } from "@testing-library/react";
import UserForm from "./UserForm";
import { User } from "../model";
import { format } from "date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import userEvent from "@testing-library/user-event";

describe("UserForm", () => {
  beforeAll(() => {
    jest.setSystemTime(new Date(2011, 1, 12));
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserForm />
      </MuiPickersUtilsProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should get values from user prop if provided", async () => {
    expect.hasAssertions();

    const user1: User = {
      address: "address",
      birthdate: new Date(2021, 1, 10),
      bodyMass: { amount: 56 },
      diagnosis: "diagnosis",
      fullName: "fullName",
      phoneNumber: "phoneNumber",
    };
    const user2: User = {
      address: "address2",
      birthdate: new Date(2021, 2, 20),
      bodyMass: { amount: 57 },
      diagnosis: "diagnosis2",
      fullName: "fullName2",
      phoneNumber: "phoneNumber2",
    };

    const { getByLabelText, rerender } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserForm user={user1} />
      </MuiPickersUtilsProvider>,
    );

    const expectDisplayValueEquals = (user: User) => {
      expect(getByLabelText("Name")).toHaveDisplayValue(user.fullName);
      expect(getByLabelText("Geburtstag")).toHaveDisplayValue(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        format(user.birthdate!, "MMMM do"),
      );
      expect(getByLabelText("Adresse")).toHaveDisplayValue(user.address);
      expect(getByLabelText("Telefonnummer")).toHaveDisplayValue(
        user.phoneNumber,
      );
      expect(getByLabelText("Diagnose")).toHaveDisplayValue(user.diagnosis);
      expect(getByLabelText("Körpergewicht")).toHaveDisplayValue(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        user.bodyMass!.amount.toString(),
      );
    };

    expectDisplayValueEquals(user1);

    rerender(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserForm user={user2} />
      </MuiPickersUtilsProvider>,
    );

    expectDisplayValueEquals(user2);
  });

  it("should be read only when readOnly prop is set", async () => {
    expect.hasAssertions();

    const { getByLabelText, rerender } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserForm readOnly />
      </MuiPickersUtilsProvider>,
    );

    let nameField = getByLabelText("Name");
    expect(nameField).toHaveAttribute("readonly");
    expect(nameField).toHaveAttribute("disabled");
    let birthdateField = getByLabelText("Geburtstag");
    expect(birthdateField).toHaveAttribute("readonly");
    expect(birthdateField).toHaveAttribute("disabled");
    let addressField = getByLabelText("Adresse");
    expect(addressField).toHaveAttribute("readonly");
    expect(addressField).toHaveAttribute("disabled");
    let phoneNumberField = getByLabelText("Telefonnummer");
    expect(phoneNumberField).toHaveAttribute("readonly");
    expect(phoneNumberField).toHaveAttribute("disabled");
    let diagnosisField = getByLabelText("Diagnose");
    expect(diagnosisField).toHaveAttribute("readonly");
    expect(diagnosisField).toHaveAttribute("disabled");
    let bodyMassField = getByLabelText("Körpergewicht");
    expect(bodyMassField).toHaveAttribute("readonly");
    expect(bodyMassField).toHaveAttribute("disabled");

    rerender(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserForm />
      </MuiPickersUtilsProvider>,
    );

    nameField = getByLabelText("Name");
    expect(nameField).not.toHaveAttribute("readonly");
    expect(nameField).not.toHaveAttribute("disabled");
    birthdateField = getByLabelText("Geburtstag");
    expect(birthdateField).not.toHaveAttribute("disabled");
    addressField = getByLabelText("Adresse");
    expect(addressField).not.toHaveAttribute("readonly");
    expect(addressField).not.toHaveAttribute("disabled");
    phoneNumberField = getByLabelText("Telefonnummer");
    expect(phoneNumberField).not.toHaveAttribute("readonly");
    expect(phoneNumberField).not.toHaveAttribute("disabled");
    diagnosisField = getByLabelText("Diagnose");
    expect(diagnosisField).not.toHaveAttribute("readonly");
    expect(diagnosisField).not.toHaveAttribute("disabled");
    bodyMassField = getByLabelText("Körpergewicht");
    expect(bodyMassField).not.toHaveAttribute("readonly");
    expect(bodyMassField).not.toHaveAttribute("disabled");
  });

  it("should call onSubmit when submitting", async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();

    const { getByLabelText, getByRole, getByText } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserForm onSubmit={onSubmit} />
      </MuiPickersUtilsProvider>,
    );

    await userEvent.type(getByLabelText("Name"), "name");
    userEvent.click(getByLabelText("Geburtstag"));
    userEvent.click(getByRole("button", { name: "10" }));
    userEvent.click(getByRole("button", { name: "OK" }));
    await userEvent.type(getByLabelText("Adresse"), "address");
    await userEvent.type(getByLabelText("Telefonnummer"), "12345");
    await userEvent.type(getByLabelText("Diagnose"), "diagnosis");
    await userEvent.type(getByLabelText("Körpergewicht"), "49");
    userEvent.click(getByText("Speichern"));

    const user: User = {
      address: "address",
      birthdate: new Date(2011, 1, 10),
      bodyMass: { amount: 49 },
      diagnosis: "diagnosis",
      fullName: "name",
      phoneNumber: "12345",
    };
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith(user);
  });

  it("should call onAbort and reset state when aborting", async () => {
    expect.hasAssertions();

    const onAbort = jest.fn();

    const { getByLabelText, getByRole, getByText } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <UserForm onAbort={onAbort} />
      </MuiPickersUtilsProvider>,
    );

    await userEvent.type(getByLabelText("Name"), "name");
    userEvent.click(getByLabelText("Geburtstag"));
    userEvent.click(getByRole("button", { name: "10" }));
    userEvent.click(getByRole("button", { name: "OK" }));
    await userEvent.type(getByLabelText("Adresse"), "address");
    await userEvent.type(getByLabelText("Telefonnummer"), "12345");
    await userEvent.type(getByLabelText("Diagnose"), "diagnosis");
    await userEvent.type(getByLabelText("Körpergewicht"), "49");
    userEvent.click(getByText("Abbrechen"));

    expect(onAbort).toHaveBeenCalledTimes(1);
    expect(getByLabelText("Name")).toHaveDisplayValue("");
    expect(getByLabelText("Geburtstag")).toHaveDisplayValue("");
    expect(getByLabelText("Adresse")).toHaveDisplayValue("");
    expect(getByLabelText("Telefonnummer")).toHaveDisplayValue("");
    expect(getByLabelText("Diagnose")).toHaveDisplayValue("");
    expect(getByLabelText("Körpergewicht")).toHaveDisplayValue("");
  });
});
