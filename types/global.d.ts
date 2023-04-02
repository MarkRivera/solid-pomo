import { Accessor } from "solid-js";

type TimeStateTypes = {
  time: Accessor<{
    pomodoro: number;
    short: number;
    long: number;
  }>;

  handleNumberInput: (e: Event) => void;
};