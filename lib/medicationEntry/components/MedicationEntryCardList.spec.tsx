import { render } from "@testing-library/react";
import MedicationEntryCardList from "./MedicationEntryCardList";
import { mock } from "@userlike/joke";
import { Duration, MedicationEntry } from "../model";
import { MedicationEntriesContext } from "./MedicationEntriesProvider";
import { BodyMass } from "../../contact";

const { useMedicationEntries } = mock(import("./MedicationEntriesProvider"));
const { default: MedicationEntryCard } = mock(import("./MedicationEntryCard"));

function getMockContext(
  entries: MedicationEntry[] | null,
): MedicationEntriesContext {
  return {
    entries,
    saveEntry: jest.fn(),
    deleteEntry: jest.fn(),
  };
}

describe("MedicationEntryCardList", () => {
  beforeAll(() => {
    MedicationEntryCard.mockReturnValue(<div>mocked MedicationEntryCard</div>);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render medication card list", async () => {
    expect.hasAssertions();

    const entries = [
      new MedicationEntry(
        new Date(2020, 1, 10),
        [],
        new Duration({ minutes: 15, hours: 1 }),
        "comments",
        new BodyMass(70),
      ),
    ];
    useMedicationEntries.mockReturnValue(getMockContext(entries));

    const { container } = render(<MedicationEntryCardList />);

    expect(container).toMatchSnapshot();
  });

  it("should render loading animation when entries are null", async () => {
    expect.hasAssertions();

    useMedicationEntries.mockReturnValue(getMockContext(null));

    const { container } = render(<MedicationEntryCardList />);

    expect(container).toMatchSnapshot();
  });
});
