import { clearActiveTimer, setTimerTime, timerState } from "../../../state/timer_state";
import { getMinutesFromSeconds, getSecondsFromMinutes } from "../../../utils/timer_util";

type TimeInputProps = {
  label: string,
  name: string,
};

const TimeInput = ({ label, name }: TimeInputProps) => {
  return (
    <form class="text-black my-4 px-2 inline-block md:flex md:flex-col">
      <div class="flex flex-col">
        <label for={name} class="text-white">
          {label}
        </label>
        <input
          type="number"
          min={1}
          name={name}
          id={name}
          value={getMinutesFromSeconds(timerState.time[name])}
          class="pl-2 bg-gray-300 rounded w-20 h-10"
          onChange={(e) => {
            const seconds = getSecondsFromMinutes(parseInt(e.target.value));
            setTimerTime(e.target.name, seconds);
            clearActiveTimer();
          }} />
      </div>
    </form>
  )
}

export default TimeInput