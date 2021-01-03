import { Duration } from "date-fns";
import Medication from "./medication";
import { BodyMass } from "../contact";

export default class MedicationEntry {
  constructor(
    readonly date: Date,
    readonly medications: Medication[],
    readonly duration: Duration,
    readonly comments: string,
    readonly bodyMass: BodyMass,
  ) {}
}
