import {
  Matcher,
  render,
  SelectorMatcherOptions,
  waitFor,
} from "@testing-library/react";
import MedicationEntryDialog from "./MedicationEntryDialog";
import { mock } from "@userlike/joke";
import userEvent from "@testing-library/user-event";
import { Duration, Medication, MedicationEntry } from "../model";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";

const { default: DurationInput } = mock(import("./DurationInput"));
const { default: MedicationsInput } = mock(import("./MedicationsInput"));

function expectFieldsEqualEntry(
  medicationEntry: MedicationEntry,
  query: (
    text: Matcher,
    options?: SelectorMatcherOptions | undefined,
    waitForElementOptions?: unknown,
  ) => HTMLElement,
) {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  expect(query("Körpergewicht")).toHaveDisplayValue(
    medicationEntry.bodyMass.amount.toString(),
  );
  expect(query("Datum")).toHaveDisplayValue(
    format(medicationEntry.date, "MMMM do"),
  );
  expect(DurationInput).toHaveBeenLastCalledWith(
    expect.objectContaining({ value: medicationEntry.duration }),
    {},
  );
  expect(query("Kommentare")).toHaveDisplayValue(medicationEntry.comments);
  expect(MedicationsInput).toHaveBeenLastCalledWith(
    expect.objectContaining({ value: medicationEntry.medications }),
    {},
  );
}

describe("MedicationEntryDialog", () => {
  beforeEach(() => {
    DurationInput.mockReturnValue(<div>mocked Duration Input</div>);
    MedicationsInput.mockReturnValue(<div>mocked MedicationsInput</div>);
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    jest.setSystemTime(new Date(2021, 1, 13));

    const { container } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={true} />
      </MuiPickersUtilsProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  // waitFor does throw "TypeError: Cannot read property 'createEvent' of null" in CI Pipeline
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("should call onSubmit when submitting", async () => {
    expect.hasAssertions();

    const onSubmit = jest.fn();

    jest.setSystemTime(new Date(2021, 1, 1));

    const duration: Duration = { minutes: 15, hours: 2 };
    DurationInput.mockImplementation(({ onChange }) => (
      <div data-testid={"durationInput"} onClick={() => onChange(duration)}>
        mocked DurationInput
      </div>
    ));

    const medications: Medication[] = [
      {
        id: "1",
        dose: {
          amount: 200,
        },
        medicament: {
          name: "name",
          batchNumber: {
            number: 12345,
          },
        },
      },
    ];
    MedicationsInput.mockImplementation(({ onChange }) => (
      <div
        data-testid={"medicationsInput"}
        onClick={() => onChange && onChange(medications)}
      >
        mocked MedicationsInput
      </div>
    ));

    const { getByRole, getByLabelText, getByTestId, getByText } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={true} onSubmit={onSubmit} />
      </MuiPickersUtilsProvider>,
    );

    await userEvent.type(
      getByLabelText("Körpergewicht"),
      "{backspace}{backspace}10",
    );
    userEvent.click(getByLabelText("Datum"));
    userEvent.click(getByRole("button", { name: "10" }));
    userEvent.click(getByRole("button", { name: "OK" }));
    userEvent.click(getByTestId("durationInput"));
    await userEvent.type(getByLabelText("Kommentare"), "comments");
    userEvent.click(getByTestId("medicationsInput"));
    userEvent.click(getByText("Speichern"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    const expected: MedicationEntry = {
      bodyMass: {
        amount: 10,
      },
      comments: "comments",
      date: new Date(2021, 1, 10),
      duration: { minutes: 15, hours: 2 },
      id: "",
      medications,
    };
    expect(onSubmit).toHaveBeenLastCalledWith(expected);
  });

  it("should call onAbort when aborting", async () => {
    expect.hasAssertions();

    const onAbort = jest.fn();

    jest.setSystemTime(new Date(2021, 1, 1));

    const { getByRole } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={true} onAbort={onAbort} />
      </MuiPickersUtilsProvider>,
    );

    userEvent.click(getByRole("button", { name: "Abbrechen" }));
    await waitFor(() => {
      expect(onAbort).toHaveBeenCalledTimes(1);
    });
  });

  it("should set values from medicationEntry prop if present", async () => {
    expect.hasAssertions();
    const medicationEntry1: MedicationEntry = {
      bodyMass: { amount: 20 },
      comments: "comments1",
      date: new Date(2021, 1, 2),
      duration: {
        minutes: 15,
        hours: 3,
      },
      id: "1",
      medications: [],
    };
    const medicationEntry2: MedicationEntry = {
      bodyMass: { amount: 25 },
      comments: "comments2",
      date: new Date(2021, 2, 3),
      duration: {
        minutes: 10,
        hours: 2,
      },
      id: "2",
      medications: [],
    };

    const { getByLabelText, rerender } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={true} medicationEntry={medicationEntry1} />
      </MuiPickersUtilsProvider>,
    );

    expectFieldsEqualEntry(medicationEntry1, getByLabelText);

    rerender(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={false} />
      </MuiPickersUtilsProvider>,
    );
    rerender(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={true} medicationEntry={medicationEntry2} />
      </MuiPickersUtilsProvider>,
    );

    expectFieldsEqualEntry(medicationEntry2, getByLabelText);
  });

  it("should reset state when closing and opening again", async () => {
    expect.hasAssertions();

    const date = new Date(2021, 1, 1);
    jest.setSystemTime(date);

    const duration: Duration = { minutes: 15, hours: 2 };
    // eslint-disable-next-line sonarjs/no-identical-functions
    DurationInput.mockImplementation(({ onChange }) => (
      <div data-testid={"durationInput"} onClick={() => onChange(duration)}>
        mocked DurationInput
      </div>
    ));

    const medications: Medication[] = [
      {
        id: "1",
        dose: {
          amount: 200,
        },
        medicament: {
          name: "name",
          batchNumber: {
            number: 12345,
          },
        },
      },
    ];
    // eslint-disable-next-line sonarjs/no-identical-functions
    MedicationsInput.mockImplementation(({ onChange }) => (
      <div
        data-testid={"medicationsInput"}
        onClick={() => onChange && onChange(medications)}
      >
        mocked MedicationsInput
      </div>
    ));

    const { getByRole, getByLabelText, getByTestId, rerender } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={true} />
      </MuiPickersUtilsProvider>,
    );

    const medicationEntry: MedicationEntry = {
      bodyMass: { amount: 10 },
      comments: "comments",
      date: new Date(date.getFullYear(), date.getMonth(), 10),
      duration,
      id: "1",
      medications,
    };

    await userEvent.type(
      getByLabelText("Körpergewicht"),
      `{backspace}{backspace}${medicationEntry.bodyMass.amount}`,
    );
    userEvent.click(getByLabelText("Datum"));
    userEvent.click(
      getByRole("button", { name: `${medicationEntry.date.getDate()}` }),
    );
    userEvent.click(getByRole("button", { name: "OK" }));
    userEvent.click(getByTestId("durationInput"));
    await userEvent.type(
      getByLabelText("Kommentare"),
      medicationEntry.comments,
    );
    userEvent.click(getByTestId("medicationsInput"));

    expectFieldsEqualEntry(medicationEntry, getByLabelText);

    rerender(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={false} />
      </MuiPickersUtilsProvider>,
    );
    rerender(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MedicationEntryDialog open={true} />
      </MuiPickersUtilsProvider>,
    );

    const expected: MedicationEntry = {
      bodyMass: { amount: 60 },
      comments: "",
      date,
      duration: { minutes: 0, hours: 0 },
      id: "",
      medications: [],
    };

    expectFieldsEqualEntry(expected, getByLabelText);
  });
});
