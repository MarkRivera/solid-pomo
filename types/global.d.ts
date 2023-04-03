import { Accessor } from "solid-js";

type Time = {
  pomodoro: number;
  short: number;
  long: number;
}

type TimeStateTypes = {
  time: Accessor<Time>;
  handleNumberInput: (e: Event) => void;
};

type SelectedTimeTypes = {
  stateTime: Accessor<symbol>;
  setSelectedTime: (time: symbol) => void;
}

type TimerTypes = "pomodoro" | "short" | "long";
