export default class BodyMass {
  static readonly unit = "kg";

  constructor(readonly amount: number) {}

  toString = (): string => `${this.amount} ${BodyMass.unit}`;
}
