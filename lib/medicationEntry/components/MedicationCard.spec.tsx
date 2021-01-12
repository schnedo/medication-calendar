import { render } from "@testing-library/react";
import MedicationCard from "./MedicationCard";
import { BatchNumber, Dose, Medicament, Medication } from "../model";

describe("MedicationCard", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const medication = new Medication(
      new Dose(200),
      new Medicament("medicament name", new BatchNumber(12345)),
    );

    const { container } = render(<MedicationCard medication={medication} />);

    expect(container).toMatchSnapshot();
  });
});
