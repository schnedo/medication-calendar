import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(
      <Sidebar open={true} onOpen={jest.fn()} onClose={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
