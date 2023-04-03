import { settings } from "../state/settings-menu";
import Cog from "./Cog";
import SettingsMenu from "./Settings/SettingsMenu"

const AppHeader = () => {
  const { state, toggleSettingsMenu } = settings();

  return (
    <>
      <Cog toggleSettingsMenu={toggleSettingsMenu} />
      <SettingsMenu
        settingsMenu={state}
        toggleSettingsMenu={toggleSettingsMenu}
      />
    </>
  )
}

export default AppHeader