export function getSecondsFromMinutes(minutes: number): number {
  return minutes * 60;
};

export function getMinutesWithSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

export function getMinutesFromSeconds(seconds: number): number {
  return Math.floor(seconds / 60);
}