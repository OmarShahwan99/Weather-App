import LangBtn from "./LangBtn";
import TempBtn from "./TempBtn";
import ThemeBtn from "./ThemeBtn";

const Control = (props) => {
  return (
    <div className="flex gap-3">
      <LangBtn lang={props.lang} onToggleLang={props.onToggleLang} />
      <ThemeBtn mode={props.mode} onSwitch={props.onSwitchTheme} />
      <TempBtn unit={props.unit} onToggleUnit={props.onToggleUnit} />
    </div>
  );
};

export default Control;
