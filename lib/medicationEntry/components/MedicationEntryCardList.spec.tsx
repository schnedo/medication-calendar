import { render } from "@testing-library/react";
import MedicationEntryCardList, {
  MedicationEntryCardListSelection,
} from "./MedicationEntryCardList";
import { mock } from "@userlike/joke";
import { MedicationEntry } from "../model";
import userEvent from "@testing-library/user-event";

const { default: MedicationEntryCard } = mock(import("./MedicationEntryCard"));

describe("MedicationEntryCardList", () => {
  beforeAll(() => {
    MedicationEntryCard.mockReturnValue(<div>mocked MedicationEntryCard</div>);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render medication card list", async () => {
    expect.hasAssertions();

    const entries: MedicationEntry[] = [
      {
        id: "1",
        date: new Date(2020, 1, 10),
        medications: [],
        duration: { minutes: 15, hours: 1 },
        comments: "",
        bodyMass: {
          amount: 70,
        },
      },
    ];
    const onSelect = jest.fn();

    const { container } = render(
      <MedicationEntryCardList
        medicationEntries={entries}
        onSelect={onSelect}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render loading animation when entries are null", async () => {
    expect.hasAssertions();

    const onSelect = jest.fn();
    const { container } = render(
      <MedicationEntryCardList medicationEntries={null} onSelect={onSelect} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should call onSelect with clicked MedicationEntryCard", async () => {
    expect.hasAssertions();

    const entries: MedicationEntry[] = [
      {
        id: "1",
        date: new Date(2020, 1, 10),
        medications: [],
        duration: { minutes: 15, hours: 1 },
        comments: "",
        bodyMass: {
          amount: 70,
        },
      },
    ];
    const onSelect = jest.fn();
    MedicationEntryCard.mockImplementation(({ onClick }) => (
      <button data-testid={"testid"} onClick={onClick}>
        mocked MedicationEntryCard
      </button>
    ));

    const { getByTestId } = render(
      <MedicationEntryCardList
        medicationEntries={entries}
        onSelect={onSelect}
      />,
    );

    expect(onSelect).not.toHaveBeenCalled();
    userEvent.click(getByTestId("testid"));
    expect(onSelect).toHaveBeenCalledTimes(1);
    const expected: MedicationEntryCardListSelection = {
      medicationEntry: entries[0],
      pointerPosition: { clientX: 0, clientY: 0 },
    };
    expect(onSelect).toHaveBeenLastCalledWith(expected);
  });
});
