/* eslint-disable sonarjs/no-identical-functions */
import { mock } from "@userlike/joke";
import { render } from "@testing-library/react";
import MedicationsInput from "./MedicationsInput";
import { Medication } from "../model";
import userEvent from "@testing-library/user-event";
import { AddMedicationDialogProps } from "./AddMedicationDialog";

const { default: MedicationCard } = mock(import("./MedicationCard"));
const { default: AddMedicationDialog } = mock(import("./AddMedicationDialog"));

const medication: Medication = {
  id: "2",
  medicament: {
    name: "name",
    batchNumber: {
      number: 1234,
    },
  },
  dose: {
    amount: 2,
  },
};

const value: Medication[] = [
  {
    id: "1",
    medicament: {
      name: "name",
      batchNumber: { number: 1 },
    },
    dose: {
      amount: 1,
    },
  },
];

describe("MedicationsInput", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    MedicationCard.mockReturnValue(<div>mocked MedicationCard</div>);
    AddMedicationDialog.mockReturnValue(<div>mocked AddMedicationDialog</div>);
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(<MedicationsInput value={value} />);

    expect(container).toMatchSnapshot();
  });

  it("should call open AddMedicationDialog when clicked", async () => {
    expect.hasAssertions();

    const { getByRole } = render(<MedicationsInput value={value} />);

    const addButton = getByRole("button");

    userEvent.click(addButton);

    expect(AddMedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: true }),
      {},
    );
  });

  it("should call onChange handler when AddMedicationDialog submits", async () => {
    expect.hasAssertions();
    const handleChange = jest.fn();
    const mockDialog = ({ onSubmit }: AddMedicationDialogProps) => (
      <div
        data-testid={"testid"}
        onClick={() => onSubmit && onSubmit(medication)}
      >
        mocked
      </div>
    );
    AddMedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} onChange={handleChange} />,
    );

    userEvent.click(getByRole("button"));
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.click(getByTestId("testid"));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenLastCalledWith([...value, medication]);
  });

  it("should close AddMedicationDialog when it submits", async () => {
    expect.hasAssertions();

    const mockDialog = ({ onSubmit }: AddMedicationDialogProps) => (
      <div
        data-testid={"testid"}
        onClick={() => onSubmit && onSubmit(medication)}
      >
        mocked
      </div>
    );
    AddMedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} />,
    );

    userEvent.click(getByRole("button"));
    userEvent.click(getByTestId("testid"));
    expect(AddMedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });

  it("should close AddMedicationDialog when it aborts", async () => {
    expect.hasAssertions();

    const mockDialog = ({ onAbort }: AddMedicationDialogProps) => (
      <div data-testid={"testid"} onClick={() => onAbort && onAbort()}>
        mocked
      </div>
    );
    AddMedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} />,
    );

    userEvent.click(getByRole("button"));
    userEvent.click(getByTestId("testid"));
    expect(AddMedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });

  it("should set a close dialog when AddMedicationsInput onClose gets called", async () => {
    expect.hasAssertions();

    const mockDialog = ({ onClose }: AddMedicationDialogProps) => (
      <div
        data-testid={"testid"}
        onClick={() => onClose && onClose({}, "backdropClick")}
      >
        mocked
      </div>
    );
    AddMedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} />,
    );

    userEvent.click(getByRole("button"));
    userEvent.click(getByTestId("testid"));
    expect(AddMedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });
});
