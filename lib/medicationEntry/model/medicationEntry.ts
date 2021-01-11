import Medication from "./medication";
import { BodyMass } from "../../contact/model";
import Duration from "./Duration";

export default class MedicationEntry {
  constructor(
    readonly date: Date,
    readonly medications: Medication[],
    readonly duration: Duration,
    readonly comments: string,
    readonly bodyMass: BodyMass,
  ) {}
}
