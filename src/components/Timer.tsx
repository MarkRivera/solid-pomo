import cx from "classnames";
import { timerState, setTimerType, setActiveTimer, clearActiveTimer } from "../state/timer_state";
import { getMinutesWithSeconds } from "../utils/timer_util";
import { onCleanup } from "solid-js";

type TimerTabProps = {
  name: string;
  timerType: string;
};


const TimerTab = ({ name, timerType }: TimerTabProps) => {
  const tabClasses = "mx-2 mt-8 hover:bg-indigo-500 transition-colors font-semibold px-4 py-2 rounded-3xl cursor-pointer"

  const isSelectedTime = (): boolean => {
    return timerState.timerType === timerType;
  }

  const generateTabClasses = (): string => {
    return cx(tabClasses,
      {
        "bg-indigo-500": isSelectedTime(),
        "bg-indigo-900": !isSelectedTime()
      }
    )
  }

  return <h1
    class={generateTabClasses()}
    onClick={() => {
      setTimerType(timerType);
    }}
  >
    {name}
  </h1>
}

const Timer = () => {
  const tabs = [
    { name: "Pomodoro", timerType: "pomodoro" },
    { name: "Short Break", timerType: "short" },
    { name: "Long Break", timerType: "long" }
  ];

  onCleanup(() => {
    clearActiveTimer();
  })

  return (
    <div class="bg-indigo-700 h-96 w-5/6 max-w-7xl mt-8 rounded-3xl mx-auto shadow-lg">
      <div class="flex justify-center">
        {tabs.map((tab) => {
          return <TimerTab
            name={tab.name}
            timerType={tab.timerType}
          />
        })}
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col items-center">
          <h1 class="text-9xl mt-8">
            {
              getMinutesWithSeconds(timerState.time[timerState.timerType])
            }
          </h1>
          <div>
            <button
              class="mx-2 mt-16 w-44 bg-indigo-900 hover:bg-indigo-500 transition-colors font-semibold px-4 py-2 rounded-3xl cursor-pointer"
              onClick={() => {
                setActiveTimer();
              }}
            >
              Start
            </button>
            <button
              class="mx-2 mt-16 w-44 bg-indigo-900 hover:bg-indigo-500 transition-colors font-semibold px-4 py-2 rounded-3xl cursor-pointer"
              onClick={() => {
                clearActiveTimer()
              }}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer