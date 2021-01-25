export default interface Duration {
  minutes: number;
  hours: number;
}

function formatPart(number: number | undefined) {
  if (number === undefined) {
    return "00";
  }
  const raw = number.toString();
  return raw.length === 1 ? `0${raw}` : raw;
}

export function format(duration: Duration): string {
  return `${formatPart(duration.hours)}:${formatPart(duration.minutes)}`;
}
