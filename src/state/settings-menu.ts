import { createSignal } from "solid-js";

export function settings() {
  const [state, setSettingMenu] = createSignal(false);

  const toggleSettingsMenu = () => {
    setSettingMenu(!state());
  };

  return { state, toggleSettingsMenu };
}