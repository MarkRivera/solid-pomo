import { createSignal } from "solid-js";

export function settings() {
  const [state, setSettingMenu] = createSignal(false);

  const toggleSettingsMenu = () => {
    console.log("toggleSettingsMenu", state())
    setSettingMenu(!state());
  };

  return { state, toggleSettingsMenu };
}