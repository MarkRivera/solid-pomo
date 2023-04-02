type TimerProps = {
  time: number;
  handleSeconds: (seconds: number) => string;
}

const Timer = ({ time, handleSeconds }: TimerProps) => {
  const tabClasses = "mx-2 mt-8 bg-indigo-900 hover:bg-indigo-500 transition-colors font-semibold px-4 py-2 rounded-3xl cursor-pointer"

  return (
    <div class="bg-indigo-700 h-96 w-5/6 max-w-7xl mt-8 rounded-3xl mx-auto shadow-lg">
      <div class="flex justify-center">
        <h1 class={tabClasses}>Pomodoro</h1>
        <h1 class={tabClasses}>Short Break</h1>
        <h1 class={tabClasses}>Long Break</h1>
      </div>

      <div class="flex justify-center">
        <div class="flex flex-col items-center">
          <h1 class="text-9xl mt-8">{handleSeconds(time)}</h1>
          <button class={tabClasses}>Start</button>
        </div>
      </div>
    </div>
  )
}

export default Timer