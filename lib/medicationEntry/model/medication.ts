import Dose from "./dose";
import Medicament from "./medicament";

export default class Medication {
  constructor(readonly dose: Dose, readonly medicament: Medicament) {}
}
