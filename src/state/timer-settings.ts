import { createSignal } from "solid-js";

function getSecondsFromMinutes(minutes: number): number {
  return minutes * 60;
};

function getMinutesWithSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

function getMinutesFromSeconds(seconds: number): number {
  return Math.floor(seconds / 60);
}

export function timerSettings() {
  const timeState = {
    pomodoro: getSecondsFromMinutes(25),
    short: getSecondsFromMinutes(5),
    long: getSecondsFromMinutes(15),
  };

  const [time, setTime] = createSignal(timeState);

  const handleNumberInput = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setTime({ ...time(), [name]: getSecondsFromMinutes(Number(value)) });
  }

  return { time, handleNumberInput, getMinutesWithSeconds, getMinutesFromSeconds };
}