import { render } from "@testing-library/react";
import MedicationCard from "./MedicationCard";
import { Medication } from "../model";

describe.skip("MedicationCard", () => {
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
});
