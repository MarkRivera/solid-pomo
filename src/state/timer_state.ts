import { createStore, produce } from "solid-js/store"
import { getSecondsFromMinutes } from "../utils/timer_util";
import { createSignal } from "solid-js";


const [timerState, setTimerState] = createStore({
  timerType: "pomodoro",
  time: {
    pomodoro: getSecondsFromMinutes(25),
    short: getSecondsFromMinutes(5),
    long: getSecondsFromMinutes(15),
  },
  activeTimer: 0
});

const setTimerTime = (name: string, value: number) => {
  setTimerState(
    produce((s) => {
      s.time[name] = value
    })
  );
}

const setTimerType = (type: string) => {
  setTimerState("timerType", () => (type));
  clearActiveTimer();
}

const setActiveTimer = () => {
  let timer = start();
  setTimerState("activeTimer", () => (timer))
}

const clearActiveTimer = () => {
  clear(timerState.activeTimer);
  setTimerState("activeTimer", () => 0);
}

// Interval Functions
const createInterval = (selectedTimer: string) => setInterval(() => {
  setTimerTime(selectedTimer, timerState.time[selectedTimer] - 1)
}, 1000);

function clearTimer(interval: number) {
  clearInterval(interval);
}

const start = () => createInterval(timerState.timerType);
const clear = (interval: number) => clearTimer(interval);

export { timerState, setTimerTime, setTimerType, setActiveTimer, clearActiveTimer }