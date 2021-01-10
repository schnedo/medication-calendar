import MedicationCard from "./MedicationCard";
import { mount } from "cypress-react-unit-test";
import { BatchNumber, Dose, Medicament, Medication } from "../model";

const medication = new Medication(
  new Dose(200),
  new Medicament("medicament_name", new BatchNumber(12345)),
);

describe("MedicationCard", () => {
  it("should match image snapshot", () => {
    mount(<MedicationCard medication={medication} />);
    cy.get("#cypress-root").toMatchImageSnapshot();
  });
});
