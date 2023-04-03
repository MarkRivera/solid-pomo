import { Exit } from "./Exit";
import cx from 'classnames';
import TimeInput from "./Time/TimeInput";
import SettingDropDown from "./SettingsDropDown";
import { Accessor, For } from "solid-js";

type SettingsMenuProps = {
  settingsMenu: Accessor<boolean>;
  toggleSettingsMenu: () => void;
};

const SettingsMenu = ({ settingsMenu, toggleSettingsMenu }: SettingsMenuProps) => {
  const timeInput = [{ name: "pomodoro", label: "Pomodoro" }, { name: "short", label: "Short Break" }, { name: "long", label: "Long Break"}];

  const handleSoundSubmit = (e: Event) => {
    e.preventDefault();
  }

  return (
    <div
      class={cx("bg-indigo-800 w-full md:w-1/3 h-full fixed right-0 top-0 transition-transform duration-200 ease-out", {
        "transform translate-x-0": settingsMenu(),
        "transform translate-x-full": !settingsMenu()
      })
      }
      onClick={toggleSettingsMenu}
    >
      <div class="flex items-center px-3">
        <h1 class="text-2xl">Settings</h1>
        <Exit />
      </div>

      <div class="flex flex-col items-center h-full" onClick={e => e.stopPropagation()}>
        <SettingDropDown label="Sound Settings">
          <form onSubmit={handleSoundSubmit} class="pl-9 flex flex-col">
            <h1 class="my-2">Selected Sound</h1>
            <input type="file" />
            <button type="submit" class="w-40 h-10 mt-2 pl-2 border-white border-solid border-2 rounded hover:text-indigo-900 hover:bg-white transition-colors">Change</button>
          </form>
        </SettingDropDown>

        <SettingDropDown label="Timer Settings">
          <div class="pl-9">
            <h1 class="my-2">Time (minutes)</h1>
            <div class="time text-black">
              <For each={timeInput}>
                {input => <TimeInput name={input.name} label={input.label} />}
              </For>
            </div>
          </div>
        </SettingDropDown>
      </div>
    </div>
  )
}

export default SettingsMenu