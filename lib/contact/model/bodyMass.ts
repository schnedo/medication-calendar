export default interface BodyMass {
  readonly amount: number;
}

const unit = "kg";

export function format(bodyMass: BodyMass): string {
  return `${bodyMass.amount} ${unit}`;
}
