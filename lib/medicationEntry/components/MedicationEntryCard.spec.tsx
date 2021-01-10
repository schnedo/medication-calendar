import { mount } from "cypress-react-unit-test";
import MedicationEntryCard from "./MedicationEntryCard";
import {
  BatchNumber,
  Dose,
  Duration,
  Medicament,
  Medication,
  MedicationEntry,
} from "../model";
import { BodyMass } from "../../contact";

const medicationEntry = new MedicationEntry(
  new Date(2021, 1),
  [
    new Medication(
      new Dose(200),
      new Medicament("medicament_name", new BatchNumber(12345)),
    ),
  ],
  new Duration({}),
  "",
  new BodyMass(70),
);

describe("MedicationEntryCard", () => {
  it("should match image snapshot", () => {
    mount(<MedicationEntryCard medicationEntry={medicationEntry} />);

    cy.get("#cypress-root").toMatchImageSnapshot();
  });
});
