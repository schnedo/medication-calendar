/* eslint-disable sonarjs/no-duplicate-string */
import { render } from "@testing-library/react";
import TreatmentCenterForm from "./TreatmentCenterForm";
import { TreatmentCenter } from "../model";
import userEvent from "@testing-library/user-event";

const emptyTreatmentCenter: TreatmentCenter = {
  address: "",
  phoneNumber: "",
  fullName: "",
};

describe("TreatmentCenterForm", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(
      <TreatmentCenterForm treatmentCenter={emptyTreatmentCenter} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should get values from treatmentCenter prop if provided", async () => {
    expect.hasAssertions();

    const treatmentCenter1: TreatmentCenter = {
      address: "address",
      fullName: "fullName",
      phoneNumber: "phoneNumber",
    };
    const treatmentCenter2: TreatmentCenter = {
      address: "address2",
      fullName: "fullName2",
      phoneNumber: "phoneNumber2",
    };

    const { getByLabelText, rerender } = render(
      <TreatmentCenterForm treatmentCenter={treatmentCenter1} />,
    );

    const expectDisplayValueEquals = (treatmentCenter: TreatmentCenter) => {
      expect(getByLabelText("Name")).toHaveDisplayValue(
        treatmentCenter.fullName,
      );
      expect(getByLabelText("Adresse")).toHaveDisplayValue(
        treatmentCenter.address,
      );
      expect(getByLabelText("Telefonnummer")).toHaveDisplayValue(
        treatmentCenter.phoneNumber,
      );
    };

    expectDisplayValueEquals(treatmentCenter1);

    rerender(<TreatmentCenterForm treatmentCenter={treatmentCenter2} />);

    expectDisplayValueEquals(treatmentCenter2);
  });

  it("should be read only when readOnly prop is set", async () => {
    expect.hasAssertions();

    const { getByLabelText, rerender } = render(
      <TreatmentCenterForm readOnly treatmentCenter={emptyTreatmentCenter} />,
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

    rerender(<TreatmentCenterForm treatmentCenter={emptyTreatmentCenter} />);

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
      <TreatmentCenterForm
        onSubmit={onSubmit}
        treatmentCenter={emptyTreatmentCenter}
      />,
    );

    await userEvent.type(getByLabelText("Name"), "name");
    await userEvent.type(getByLabelText("Adresse"), "address");
    await userEvent.type(getByLabelText("Telefonnummer"), "12345");
    userEvent.click(getByText("Speichern"));

    const treatmentCenter: TreatmentCenter = {
      address: "address",
      fullName: "name",
      phoneNumber: "12345",
    };
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenLastCalledWith(treatmentCenter);
  });

  it("should call onAbort and reset state when aborting", async () => {
    expect.hasAssertions();

    const onAbort = jest.fn();

    const { getByLabelText, getByText } = render(
      <TreatmentCenterForm
        onAbort={onAbort}
        treatmentCenter={emptyTreatmentCenter}
      />,
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
