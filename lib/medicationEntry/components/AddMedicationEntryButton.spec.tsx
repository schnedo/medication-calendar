import { mock } from "@userlike/joke";
import { render, waitFor } from "@testing-library/react";
import AddMedicationEntryButton from "./AddMedicationEntryButton";
import userEvent from "@testing-library/user-event";
import { MedicationEntry } from "../model";

const { default: AddMedicationEntryDialog } = mock(
  import("./AddMedicationEntryDialog"),
);
const { useMedicationEntries } = mock(import("./MedicationEntriesProvider"));

describe("AddMedicationEntryButton", () => {
  beforeEach(() => {
    AddMedicationEntryDialog.mockReturnValue(
      <div>mocked AddMedicationEntryDialog</div>,
    );
    useMedicationEntries.mockReturnValue({
      entries: [],
      saveEntry: jest.fn().mockResolvedValue(undefined),
      deleteEntry: jest.fn().mockResolvedValue(undefined),
    });
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(<AddMedicationEntryButton />);

    expect(container).toMatchSnapshot();
  });

  it("should open AddMedicationEntryDialog on press", async () => {
    expect.hasAssertions();

    const { getByLabelText } = render(<AddMedicationEntryButton />);

    expect(AddMedicationEntryDialog).toHaveBeenCalledTimes(1);
    expect(AddMedicationEntryDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
    userEvent.click(getByLabelText("add"));
    await waitFor(() => {
      expect(AddMedicationEntryDialog).toHaveBeenCalledTimes(2);
    });
    expect(AddMedicationEntryDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: true }),
      {},
    );
  });

  it("should save entry returned by dialog submit and close dialog", async () => {
    expect.hasAssertions();

    const entry: MedicationEntry = {
      bodyMass: {
        amount: 60,
      },
      comments: "comments",
      date: new Date(2021, 1, 10),
      duration: { minutes: 15, hours: 2 },
      id: "",
      medications: [],
    };
    AddMedicationEntryDialog.mockImplementation(({ onSubmit }) => (
      <div data-testid={"dialog"} onClick={() => onSubmit && onSubmit(entry)} />
    ));
    const saveEntry = jest.fn();
    useMedicationEntries.mockReturnValue({
      entries: [],
      saveEntry,
      deleteEntry: jest.fn(),
    });

    const { getByLabelText, getByTestId } = render(
      <AddMedicationEntryButton />,
    );

    userEvent.click(getByLabelText("add"));
    await waitFor(() => {
      expect(AddMedicationEntryDialog).toHaveBeenCalledTimes(2);
    });
    userEvent.click(getByTestId("dialog"));
    await waitFor(() => {
      expect(AddMedicationEntryDialog).toHaveBeenCalledTimes(3);
    });
    expect(saveEntry).toHaveBeenCalledTimes(1);
    expect(saveEntry).toHaveBeenLastCalledWith(entry);
    expect(AddMedicationEntryDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });

  it("should close Dialog when AddMedicationEntryDialog calls onClose", async () => {
    expect.hasAssertions();

    AddMedicationEntryDialog.mockImplementation(({ onClose }) => (
      <div
        data-testid={"dialog"}
        onClick={() => onClose && onClose({}, "backdropClick")}
      />
    ));

    const { getByLabelText, getByTestId } = render(
      <AddMedicationEntryButton />,
    );

    userEvent.click(getByLabelText("add"));
    userEvent.click(getByTestId("dialog"));
    expect(AddMedicationEntryDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });

  it("should close dialog when AddMedicationEntryDialog calls onAbort", async () => {
    expect.hasAssertions();

    AddMedicationEntryDialog.mockImplementation(({ onAbort }) => (
      <div data-testid={"dialog"} onClick={() => onAbort && onAbort()} />
    ));

    const { getByLabelText, getByTestId } = render(
      <AddMedicationEntryButton />,
    );

    userEvent.click(getByLabelText("add"));
    userEvent.click(getByTestId("dialog"));
    expect(AddMedicationEntryDialog).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );
  });
});
