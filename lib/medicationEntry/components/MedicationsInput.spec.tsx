/* eslint-disable sonarjs/no-identical-functions */
import { mock } from "@userlike/joke";
import { render } from "@testing-library/react";
import MedicationsInput from "./MedicationsInput";
import { Medication } from "../model";
import userEvent from "@testing-library/user-event";
import { MedicationDialogProps } from "./MedicationDialog";
import { MedicationCardProps } from "./MedicationCard";

const { default: MedicationCard } = mock(import("./MedicationCard"));
const { default: MedicationDialog } = mock(import("./MedicationDialog"));

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
    MedicationDialog.mockReturnValue(<div>mocked AddMedicationDialog</div>);
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(<MedicationsInput value={value} />);

    expect(container).toMatchSnapshot();
  });

  it("should call open MedicationDialog when add is clicked", async () => {
    expect.hasAssertions();

    const { getByRole } = render(<MedicationsInput value={value} />);

    const addButton = getByRole("button");

    userEvent.click(addButton);

    expect(MedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: true, medication: undefined }),
      {},
    );
  });

  it("should call onChange handler when MedicationDialog submits", async () => {
    expect.hasAssertions();
    const handleChange = jest.fn();
    const mockDialog = ({ onSubmit }: MedicationDialogProps) => (
      <div
        data-testid={"testid"}
        onClick={() => onSubmit && onSubmit(medication)}
      >
        mocked Dialog
      </div>
    );
    MedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} onChange={handleChange} />,
    );

    userEvent.click(getByRole("button"));
    expect(handleChange).not.toHaveBeenCalled();
    userEvent.click(getByTestId("testid"));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenLastCalledWith([...value, medication]);
  });

  it("should close MedicationDialog when it submits", async () => {
    expect.hasAssertions();

    const mockDialog = ({ onSubmit }: MedicationDialogProps) => (
      <div
        data-testid={"testid"}
        onClick={() => onSubmit && onSubmit(medication)}
      >
        mocked Dialog
      </div>
    );
    MedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} />,
    );

    userEvent.click(getByRole("button"));
    userEvent.click(getByTestId("testid"));
    expect(MedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });

  it("should close MedicationDialog when it aborts", async () => {
    expect.hasAssertions();

    const mockDialog = ({ onAbort }: MedicationDialogProps) => (
      <div data-testid={"testid"} onClick={() => onAbort && onAbort()}>
        mocked Dialog
      </div>
    );
    MedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} />,
    );

    userEvent.click(getByRole("button"));
    userEvent.click(getByTestId("testid"));
    expect(MedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });

  it("should set a close dialog when AddMedicationsInput onClose gets called", async () => {
    expect.hasAssertions();

    const mockDialog = ({ onClose }: MedicationDialogProps) => (
      <div
        data-testid={"testid"}
        onClick={() => onClose && onClose({}, "backdropClick")}
      >
        mocked Dialog
      </div>
    );
    MedicationDialog.mockImplementation(mockDialog);

    const { getByRole, getByTestId } = render(
      <MedicationsInput value={value} />,
    );

    userEvent.click(getByRole("button"));
    userEvent.click(getByTestId("testid"));
    expect(MedicationDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });

  it("should edit current entries when editing", async () => {
    expect.hasAssertions();

    const mockedDialog = ({ medication, onSubmit }: MedicationDialogProps) => (
      <div
        data-testid={"testDialog"}
        onClick={() => onSubmit && medication && onSubmit(medication)}
      >
        mocked Dialog
      </div>
    );
    MedicationDialog.mockImplementation(mockedDialog);
    const mockedCard = ({ onClick }: MedicationCardProps) => (
      <button data-testid={"testCard"} onClick={onClick}>
        mocked Card
      </button>
    );
    MedicationCard.mockImplementation(mockedCard);
    const onChange = jest.fn();

    const { getByTestId, getByRole } = render(
      <MedicationsInput value={value} onChange={onChange} />,
    );

    userEvent.click(getByTestId("testCard"));
    userEvent.click(getByRole("menuitem", { name: "Bearbeiten" }));
    userEvent.click(getByTestId("testDialog"));

    expect(onChange).toHaveBeenLastCalledWith(value);
  });
});
