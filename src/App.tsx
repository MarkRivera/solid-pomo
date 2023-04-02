import type { Component } from 'solid-js';
import { invoke } from '@tauri-apps/api'
import { timerSettings } from './state/timer-settings';
import AppHeader from './components/AppHeader';
import Timer from './components/Timer';

const get_greeting = async () => {
  const message = await invoke('greet', { name: 'Mark' })
  return message;
}

const App: Component = () => {
  const { time, getMinutesWithSeconds, getMinutesFromSeconds, handleNumberInput } = timerSettings();

  const { pomodoro, short, long } = time();

  async function getGreeting() {
    const message = await get_greeting();
    console.log(message);
  }

  getGreeting();

  return (
    <div class="bg-indigo-900 text-white h-full w-full mr-3 overflow-hidden">
      <AppHeader handleSeconds={getMinutesFromSeconds} time={time} handleNumberInput={handleNumberInput} />
      <Timer time={pomodoro} handleSeconds={getMinutesWithSeconds} />
    </div>
  )
};

export default App;
