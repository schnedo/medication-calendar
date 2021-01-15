export default interface Dose {
  readonly amount: number;
}

const unit = "ml";

export function format(dose: Dose): string {
  return `${dose.amount} ${unit}`;
}
