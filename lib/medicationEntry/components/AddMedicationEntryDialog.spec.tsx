import { render, waitFor } from "@testing-library/react";
import AddMedicationEntryDialog from "./AddMedicationEntryDialog";
import { mock } from "@userlike/joke";
import userEvent from "@testing-library/user-event";
import { Duration, Medication, MedicationEntry } from "../model";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const { default: DurationInput } = mock(import("./DurationInput"));
const { default: MedicationsInput } = mock(import("./MedicationsInput"));

describe("AddMedicationEntryDialog", () => {
  beforeEach(() => {
    DurationInput.mockReturnValue(<div>mocked Duration Input</div>);
    MedicationsInput.mockReturnValue(<div>mocked MedicationsInput</div>);
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    jest.setSystemTime(new Date(2021, 1, 13));

    const { container } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AddMedicationEntryDialog open={true} />
      </MuiPickersUtilsProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should call onSubmit when submitting", async () => {
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
        <AddMedicationEntryDialog open={true} onSubmit={onSubmit} />
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

    // await waitFor(() => {
    //   expect(onSubmit).toHaveBeenCalledTimes(1);
    // });
    // const expected: MedicationEntry = {
    //   bodyMass: {
    //     amount: 10,
    //   },
    //   comments: "comments",
    //   date: new Date(2021, 1, 10),
    //   duration: { minutes: 15, hours: 2 },
    //   id: "",
    //   medications,
    // };
    // expect(onSubmit).toHaveBeenLastCalledWith(expected);
  });

  it("should call onAbort when aborting", async () => {
    expect.hasAssertions();

    const onAbort = jest.fn();

    jest.setSystemTime(new Date(2021, 1, 1));

    const { getByRole } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AddMedicationEntryDialog open={true} onAbort={onAbort} />
      </MuiPickersUtilsProvider>,
    );

    userEvent.click(getByRole("button", { name: "Abbrechen" }));
    await waitFor(() => {
      expect(onAbort).toHaveBeenCalledTimes(1);
    });
  });
});
