import Medication from "./medication";
import { BodyMass } from "../../contact/model";
import Duration from "./duration";

export default interface MedicationEntry {
  readonly id: string;
  readonly date: Date;
  readonly medications: Medication[];
  readonly duration: Duration;
  readonly comments: string;
  readonly bodyMass: BodyMass;
}
