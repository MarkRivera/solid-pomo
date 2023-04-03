import { setTimerTime } from "../../../state/timer_state";

type TimeInputProps = {
  label: string,
  name: string,
  seconds: number,
  handleSeconds: (seconds: number) => number,
};

const TimeInput = ({ label, name, seconds, handleSeconds }: TimeInputProps) => {
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
          value={handleSeconds(seconds)}
          class="pl-2 bg-gray-300 rounded w-20 h-10"
          onChange={(e) => setTimerTime(e.target.name, Number(e.target.value))} />
      </div>
    </form>
  )
}

export default TimeInput