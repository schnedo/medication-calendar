import Dose from "./dose";
import Medicament from "./medicament";
import { v4 } from "uuid";

export default class Medication {
  readonly id: string = v4();

  constructor(readonly dose: Dose, readonly medicament: Medicament) {}
}
