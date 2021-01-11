import { ReactElement } from "react";
import {
  BatchNumber,
  Dose,
  Medicament,
  Medication,
  MedicationEntry,
  MedicationEntryCard,
} from "../lib/medicationEntry";
import { BodyMass } from "../lib/contact";
import Duration from "../lib/medicationEntry/model/Duration";

const dummyEntry = new MedicationEntry(
  new Date(),
  [
    new Medication(
      new Dose(200),
      new Medicament("name1", new BatchNumber(123)),
    ),
    new Medication(
      new Dose(100),
      new Medicament("name2", new BatchNumber(1234)),
    ),
  ],
  new Duration({ minutes: 15 }),
  "Rote Stelle an Einstichstelle, Einstichstelle an Wade",
  new BodyMass(65),
);

export default function Home(): ReactElement {
  return (
    <>
      <main>
        <MedicationEntryCard medicationEntry={dummyEntry} />
      </main>
    </>
  );
}
