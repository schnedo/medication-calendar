import BatchNumber from "./batchNumber";

export default class Medicament {
  constructor(readonly name: string, readonly batchNumber: BatchNumber) {}
}
