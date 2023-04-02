import { settings } from "../state/settings-menu";
import Cog from "./Cog";

import SettingsMenu from "./Settings/SettingsMenu"
import { TimeStateTypes } from "../../types/global";

type AppHeaderProps = {
  handleSeconds: (seconds: number) => number;
} & TimeStateTypes;

const AppHeader = ({ handleSeconds, time, handleNumberInput }: AppHeaderProps) => {
  const { state, toggleSettingsMenu } = settings();

  return (
    <>
      <Cog toggleSettingsMenu={toggleSettingsMenu} />
      <SettingsMenu
        settingsMenu={state}
        toggleSettingsMenu={toggleSettingsMenu}
        handleSeconds={handleSeconds}
        time={time}
        handleNumberInput={handleNumberInput}
      />
    </>
  )
}

export default AppHeader