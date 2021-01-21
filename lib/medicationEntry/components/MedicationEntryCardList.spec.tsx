import { render } from "@testing-library/react";
import MedicationEntryCardList from "./MedicationEntryCardList";
import { mock } from "@userlike/joke";
import { MedicationEntry } from "../model";
import { MedicationEntriesContext } from "./MedicationEntriesProvider";

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

describe.skip("MedicationEntryCardList", () => {
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
