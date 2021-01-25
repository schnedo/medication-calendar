import { render, waitFor } from "@testing-library/react";
import MedicationDialog from "./MedicationDialog";
import userEvent from "@testing-library/user-event";
import { Medication } from "../model";
import { mock } from "@userlike/joke";

const { v4 } = mock(import("uuid"));

describe("MedicationDialog", () => {
  beforeEach(() => {
    v4.mockReturnValue("uuid");
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(<MedicationDialog open={true} />);

    expect(container).toMatchSnapshot();
  });

  it("should call onAbort when pressing abort", async () => {
    expect.hasAssertions();

    const onAbort = jest.fn();
    const { getByText } = render(
      <MedicationDialog open={true} onAbort={onAbort} />,
    );

    userEvent.click(getByText("Abbrechen"));
    expect(onAbort).toHaveBeenCalledTimes(1);
  });

  it("should call onSubmit when submitting", async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <MedicationDialog open={true} onSubmit={onSubmit} />,
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
      <MedicationDialog open={true} />,
    );

    await userEvent.type(getByLabelText("Dosis"), "123");
    await userEvent.type(getByLabelText("Name"), "name");
    await userEvent.type(getByLabelText("Chargenbezeichnung"), "12345");

    rerender(<MedicationDialog open={false} />);
    rerender(<MedicationDialog open={true} />);

    expect(getByLabelText("Dosis")).toHaveDisplayValue("");
    expect(getByLabelText("Name")).toHaveDisplayValue("");
    expect(getByLabelText("Chargenbezeichnung")).toHaveDisplayValue("");
  });

  it("should set fields from provided medication", async () => {
    expect.hasAssertions();

    const medication1: Medication = {
      dose: {
        amount: 200,
      },
      id: "1",
      medicament: {
        name: "name1",
        batchNumber: {
          number: 12345,
        },
      },
    };
    const medication2: Medication = {
      dose: {
        amount: 20,
      },
      id: "2",
      medicament: {
        name: "name2",
        batchNumber: {
          number: 54321,
        },
      },
    };

    const { rerender, getByLabelText } = render(
      <MedicationDialog open={true} medication={medication1} />,
    );

    expect(getByLabelText("Dosis")).toHaveDisplayValue(
      medication1.dose.amount.toString(),
    );
    expect(getByLabelText("Name")).toHaveDisplayValue(
      medication1.medicament.name,
    );
    expect(getByLabelText("Chargenbezeichnung")).toHaveDisplayValue(
      medication1.medicament.batchNumber.number.toString(),
    );

    rerender(<MedicationDialog open={false} />);
    rerender(<MedicationDialog open={true} medication={medication2} />);

    expect(getByLabelText("Dosis")).toHaveDisplayValue(
      medication2.dose.amount.toString(),
    );
    expect(getByLabelText("Name")).toHaveDisplayValue(
      medication2.medicament.name,
    );
    expect(getByLabelText("Chargenbezeichnung")).toHaveDisplayValue(
      medication2.medicament.batchNumber.number.toString(),
    );
  });
});
