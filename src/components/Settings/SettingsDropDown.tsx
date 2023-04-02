import { JSX } from "solid-js/jsx-runtime";

type SettingDropDownProps = {
  label: string,
  children: JSX.Element;
};

const SettingDropDown = ({ children, label }: SettingDropDownProps) => {
  return (
    <details class="w-full px-3 mt-8">
      <summary class="text-lg">{label}</summary>
      {children}
    </details>
  )
}

export default SettingDropDown