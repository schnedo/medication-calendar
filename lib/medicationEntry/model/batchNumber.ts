export default interface BatchNumber {
  readonly number: number;
}

const prefix = "Ch.-B.";
export function format(batchNumber: BatchNumber): string {
  return `${prefix} ${batchNumber.number}`;
}
