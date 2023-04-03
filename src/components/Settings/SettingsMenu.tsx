import { Exit } from "./Exit";
import cx from 'classnames';
import TimeInput from "./Time/TimeInput";
import SettingDropDown from "./SettingsDropDown";
import { Accessor } from "solid-js";
import { setTimerTime, timerState } from "../../state/timer_state";
import { getMinutesFromSeconds } from "../../utils/timer_util";

type SettingsMenuProps = {
  settingsMenu: Accessor<boolean>;
  toggleSettingsMenu: () => void;
};

const SettingsMenu = ({ settingsMenu, toggleSettingsMenu }: SettingsMenuProps) => {
  const { pomodoro, short, long } = timerState.time;

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
              <TimeInput
                name="pomodoro"
                label="Pomodoro"
                seconds={pomodoro}
                handleSeconds={getMinutesFromSeconds} />

              <TimeInput
                name="short"
                label="Short Break"
                seconds={short}
                handleSeconds={getMinutesFromSeconds} />

              <TimeInput
                name="long"
                label="Long Break"
                seconds={long}
                handleSeconds={getMinutesFromSeconds} />
            </div>
          </div>
        </SettingDropDown>
      </div>
    </div>
  )
}

export default SettingsMenu