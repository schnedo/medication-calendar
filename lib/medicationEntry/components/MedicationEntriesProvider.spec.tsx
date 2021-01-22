import { mock } from "@userlike/joke";
import { render, waitFor } from "@testing-library/react";
import MedicationEntriesProvider, {
  useMedicationEntries,
} from "./MedicationEntriesProvider";
import { ReactElement } from "react";
import { MedicationEntry } from "../model";
import userEvent from "@testing-library/user-event";

const medicationEntry = {
  id: "1",
  bodyMass: {
    amount: 60,
  },
  duration: {
    minutes: 15,
    hours: 1,
  },
  date: new Date(2020, 1, 12),
  comments: "comments",
  medications: [],
};
const entries: MedicationEntry[] = [medicationEntry];
const { Repository } = mock(import("../../storage"));
const mockRepository = Repository.mock.instances[0];
// @ts-expect-error this actually is a mock
mockRepository.getAll.mockResolvedValue(entries);
// @ts-expect-error this actually is a mock
mockRepository.save.mockImplementation(async (entry) => entry);

describe("MedicationEntriesProvider", () => {
  it("should load entries from repository when mounted", async () => {
    expect.hasAssertions();

    const eventReceiver = jest.fn();
    const MockComponent = jest.fn().mockImplementation(
      (): ReactElement => {
        const { entries } = useMedicationEntries();
        const handleClick = () => eventReceiver(entries);
        return (
          <div data-testid={"testid"} onClick={handleClick}>
            mockComponent
          </div>
        );
      },
    );

    const { getByTestId } = render(
      <MedicationEntriesProvider>
        <MockComponent />
      </MedicationEntriesProvider>,
    );

    await waitFor(() => expect(mockRepository.getAll).toHaveBeenCalledTimes(1));
    userEvent.click(getByTestId("testid"));
    expect(eventReceiver).toHaveBeenCalledTimes(1);
    expect(eventReceiver).toHaveBeenLastCalledWith(entries);
  });
});
