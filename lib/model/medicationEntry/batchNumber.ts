export default class BatchNumber {
  static readonly prefix = "Ch.-B.";

  constructor(readonly number: number) {}

  toString = (): string => `${BatchNumber.prefix} ${this.number}`;
}
