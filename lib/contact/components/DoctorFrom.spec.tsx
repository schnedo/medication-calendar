/* eslint-disable sonarjs/no-duplicate-string */
import { render } from "@testing-library/react";
import DoctorForm from "./DoctorForm";
import { Doctor } from "../model";
import userEvent from "@testing-library/user-event";

const emptyDoctor: Doctor = {
  address: "",
  phoneNumber: "",
  fullName: "",
};

describe("DoctorForm", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(<DoctorForm doctor={emptyDoctor} />);

    expect(container).toMatchSnapshot();
  });

  it("should get values from doctor prop if provided", async () => {
    expect.hasAssertions();

    const doctor1: Doctor = {
      address: "address",
      fullName: "fullName",
      phoneNumber: "phoneNumber",
    };
    const doctor2: Doctor = {
      address: "address2",
      fullName: "fullName2",
      phoneNumber: "phoneNumber2",
    };

    const { getByLabelText, rerender } = render(
      <DoctorForm doctor={doctor1} />,
    );

    const expectDisplayValueEquals = (doctor: Doctor) => {
      expect(getByLabelText("Name")).toHaveDisplayValue(doctor.fullName);
      expect(getByLabelText("Adresse")).toHaveDisplayValue(doctor.address);
      expect(getByLabelText("Telefonnummer")).toHaveDisplayValue(
        doctor.phoneNumber,
      );
    };

    expectDisplayValueEquals(doctor1);

    rerender(<DoctorForm doctor={doctor2} />);

    expectDisplayValueEquals(doctor2);
  });

  it("should be read only when readOnly prop is set", async () => {
    expect.hasAssertions();

    const { getByLabelText, rerender } = render(
      <DoctorForm readOnly doctor={emptyDoctor} />,
    );

    let nameField = getByLabelText("Name");
    expect(nameField).toHaveAttribute("readonly");
    expect(nameField).toHaveAttribute("disabled");
    let addressField = getByLabelText("Adresse");
    expect(addressField).toHaveAttribute("readonly");
    expect(addressField).toHaveAttribute("disabled");
    let phoneNumberField = getByLabelText("Telefonnummer");
    expect(phoneNumberField).toHaveAttribute("readonly");
    expect(phoneNumberField).toHaveAttribute("disabled");

    rerender(<DoctorForm doctor={emptyDoctor} />);

    nameField = getByLabelText("Name");
    expect(nameField).not.toHaveAttribute("readonly");
    expect(nameField).not.toHaveAttribute("disabled");
    addressField = getByLabelText("Adresse");
    expect(addressField).not.toHaveAttribute("readonly");
    expect(addressField).not.toHaveAttribute("disabled");
    phoneNumberField = getByLabelText("Telefonnummer");
    expect(phoneNumberField).not.toHaveAttribute("readonly");
    expect(phoneNumberField).not.toHaveAttribute("disabled");
  });

  it("should call onSubmit when submitting", async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <DoctorForm onSubmit={onSubmit} doctor={emptyDoctor} />,
    );

    await userEvent.type(getByLabelText("Name"), "name");
    await userEvent.type(getByLabelText("Adresse"), "address");
    await userEvent.type(getByLabelText("Telefonnummer"), "12345");
    userEvent.click(getByText("Speichern"));

    const doctor: Doctor = {
      address: "address",
      fullName: "name",
      phoneNumber: "12345",
    };
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith(doctor);
  });

  it("should call onAbort and reset state when aborting", async () => {
    expect.hasAssertions();

    const onAbort = jest.fn();

    const { getByLabelText, getByText } = render(
      <DoctorForm onAbort={onAbort} doctor={emptyDoctor} />,
    );

    await userEvent.type(getByLabelText("Name"), "name");
    await userEvent.type(getByLabelText("Adresse"), "address");
    await userEvent.type(getByLabelText("Telefonnummer"), "12345");
    userEvent.click(getByText("Abbrechen"));

    expect(onAbort).toHaveBeenCalledTimes(1);
    expect(getByLabelText("Name")).toHaveDisplayValue("");
    expect(getByLabelText("Adresse")).toHaveDisplayValue("");
    expect(getByLabelText("Telefonnummer")).toHaveDisplayValue("");
  });
});
