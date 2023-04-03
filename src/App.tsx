import type { Component } from 'solid-js';
import { invoke } from '@tauri-apps/api'
import {  } from './state/timer_state';
import AppHeader from './components/AppHeader';
import Timer from './components/Timer';

const get_greeting = async () => {
  const message = await invoke('greet', { name: 'Mark' })
  return message;
}



const App: Component = () => {
  async function getGreeting() {
    const message = await get_greeting();
    console.log(message);
  }

  getGreeting();

  return (
    <div class="bg-indigo-900 text-white h-full w-full mr-3 overflow-hidden">
      <AppHeader />
      <Timer />
    </div>
  )
};

export default App;
