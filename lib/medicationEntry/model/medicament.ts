import BatchNumber from "./batchNumber";

export default interface Medicament {
  readonly name: string;
  readonly batchNumber: BatchNumber;
}
