import Dose from "./dose";
import Medicament from "./medicament";

export default interface Medication {
  readonly id: string;
  readonly dose: Dose;
  readonly medicament: Medicament;
}
