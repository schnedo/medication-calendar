import { render } from "@testing-library/react";
import DurationInput from "./DurationInput";
import { Duration } from "../model";
import userEvent from "@testing-library/user-event";

describe.skip("DurationInput", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const duration: Duration = {
      minutes: 15,
      hours: 1,
    };
    const { container } = render(
      <DurationInput value={duration} onChange={() => undefined} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should call change handler with selected duration", async () => {
    expect.hasAssertions();

    const duration: Duration = {
      minutes: 15,
      hours: 1,
    };
    const changeHandler = jest.fn();
    const { getByRole, getByLabelText } = render(
      <DurationInput value={duration} onChange={changeHandler} />,
    );

    userEvent.click(getByLabelText("h"));
    userEvent.click(getByRole("option", { name: "2" }));
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenLastCalledWith({ minutes: 15, hours: 2 });
    userEvent.click(getByLabelText("min"));
    userEvent.click(getByRole("option", { name: "25" }));
    expect(changeHandler).toHaveBeenCalledTimes(2);
    expect(changeHandler).toHaveBeenLastCalledWith({ minutes: 25, hours: 1 });
  });
});
