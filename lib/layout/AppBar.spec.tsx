import { render } from "@testing-library/react";
import AppBar from "./AppBar";
import { mock } from "@userlike/joke";
import userEvent from "@testing-library/user-event";
import { Edit } from "@material-ui/icons";

const { default: Sidebar } = mock(import("./Sidebar"));

describe("AppBar", () => {
  beforeEach(() => {
    Sidebar.mockReturnValue(<div>mocked Sidebar</div>);
  });

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(
      <AppBar
        title={"title"}
        rightButton={{ icon: Edit, ariaLabel: "edit" }}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should show go back button only when flag is set", async () => {
    expect.hasAssertions();

    const { getByRole, rerender } = render(<AppBar withBackButton />);

    expect(getByRole("button", { name: "go back" })).toBeInTheDocument();
    expect(() => getByRole("button", { name: "open menu" })).toThrowError();

    rerender(<AppBar />);

    expect(getByRole("button", { name: "open menu" })).toBeInTheDocument();
    expect(() => getByRole("button", { name: "go back" })).toThrowError();
  });

  it("should open Sidebar when menu button is pressed", async () => {
    expect.hasAssertions();

    const { getByRole } = render(<AppBar />);
    expect(Sidebar).toHaveBeenCalledTimes(1);
    expect(Sidebar).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: false }),
      {},
    );

    userEvent.click(getByRole("button", { name: "open menu" }));
    expect(Sidebar).toHaveBeenCalledTimes(2);
    expect(Sidebar).toHaveBeenLastCalledWith(
      expect.objectContaining({ open: true }),
      {},
    );
  });

  it("should call onRightButtonClick callback when right button is pressed", async () => {
    expect.hasAssertions();

    const onClick = jest.fn();
    const { getByRole } = render(
      <AppBar rightButton={{ icon: Edit, ariaLabel: "label", onClick }} />,
    );

    userEvent.click(getByRole("button", { name: "label" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
