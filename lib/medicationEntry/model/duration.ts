import { Duration as DateFnsDuration } from "date-fns";

function format(number: number | undefined) {
  if (number === undefined) {
    return "00";
  }
  const raw = number.toString();
  return raw.length === 1 ? `0${raw}` : raw;
}

export default class Duration {
  constructor(readonly duration: DateFnsDuration) {}

  toString(): string {
    return `${format(this.duration.hours)}:${format(this.duration.minutes)}`;
  }
}
