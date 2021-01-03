export default class Dose {
  static readonly unit = "ml";

  constructor(readonly amount: number) {}

  toString = (): string => `${this.amount} ${Dose.unit}`;
}
