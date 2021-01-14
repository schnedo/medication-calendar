import Medication from "./medication";
import { BodyMass } from "../../contact/model";
import Duration from "./duration";
import { v4 } from "uuid";

export default class MedicationEntry {
  readonly id: string = v4();

  constructor(
    readonly date: Date,
    readonly medications: Medication[],
    readonly duration: Duration,
    readonly comments: string,
    readonly bodyMass: BodyMass,
  ) {}
}
