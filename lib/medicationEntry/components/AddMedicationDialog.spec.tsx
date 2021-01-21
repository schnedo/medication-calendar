import { render, waitFor } from "@testing-library/react";
import AddMedicationDialog from "./AddMedicationDialog";
import userEvent from "@testing-library/user-event";
import { Medication } from "../model";
import { mock } from "@userlike/joke";

const { v4 } = mock(import("uuid"));

describe("AddMedicationDialog", () => {
  beforeEach(() => {
    v4.mockReturnValue("uuid");
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(<AddMedicationDialog open={true} />);

    expect(container).toMatchSnapshot();
  });

  it("should call onAbort when pressing abort", async () => {
    expect.hasAssertions();

    const onAbort = jest.fn();
    const { getByText } = render(
      <AddMedicationDialog open={true} onAbort={onAbort} />,
    );

    userEvent.click(getByText("Abbrechen"));
    expect(onAbort).toHaveBeenCalledTimes(1);
  });

  it("should call onSubmit when submitting", async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <AddMedicationDialog open={true} onSubmit={onSubmit} />,
    );

    await userEvent.type(getByLabelText("Dosis"), "200");
    await userEvent.type(getByLabelText("Name"), "name");
    await userEvent.type(getByLabelText("Chargenbezeichnung"), "12345");
    userEvent.click(getByText("Speichern"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
    const expected: Medication = {
      dose: {
        amount: 200,
      },
      id: "uuid",
      medicament: {
        name: "name",
        batchNumber: {
          number: 12345,
        },
      },
    };
    expect(onSubmit).toHaveBeenLastCalledWith(expected);
  });

  it("should reset fields when dialog gets closed", async () => {
    expect.hasAssertions();

    const { getByLabelText, rerender } = render(
      <AddMedicationDialog open={true} />,
    );

    await userEvent.type(getByLabelText("Dosis"), "123");
    await userEvent.type(getByLabelText("Name"), "name");
    await userEvent.type(getByLabelText("Chargenbezeichnung"), "12345");

    rerender(<AddMedicationDialog open={false} />);
    rerender(<AddMedicationDialog open={true} />);

    expect(getByLabelText("Dosis")).toHaveDisplayValue("");
    expect(getByLabelText("Name")).toHaveDisplayValue("");
    expect(getByLabelText("Chargenbezeichnung")).toHaveDisplayValue("");
  });
});
