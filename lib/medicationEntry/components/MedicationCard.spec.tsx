import { render } from "@testing-library/react";
import MedicationCard from "./MedicationCard";
import { Medication } from "../model";
import userEvent from "@testing-library/user-event";

describe("MedicationCard", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const medication: Medication = {
      dose: {
        amount: 200,
      },
      id: "1",
      medicament: {
        name: "medicament name",
        batchNumber: {
          number: 12345,
        },
      },
    };

    const { container } = render(<MedicationCard medication={medication} />);

    expect(container).toMatchSnapshot();
  });

  it("should call onClick when clicked on", async () => {
    expect.hasAssertions();

    const medication: Medication = {
      dose: {
        amount: 200,
      },
      id: "id",
      medicament: {
        name: "name",
        batchNumber: {
          number: 1234,
        },
      },
    };
    const onClick = jest.fn();

    const { getByRole } = render(
      <MedicationCard medication={medication} onClick={onClick} />,
    );

    expect(onClick).not.toHaveBeenCalled();
    userEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
