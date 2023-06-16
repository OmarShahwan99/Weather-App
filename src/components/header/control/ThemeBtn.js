import ControlBtn from "../../UI/ControlBtn";

import { BiSun, BiMoon } from "react-icons/bi";

const ThemeBtn = (props) => {
  return (
    <ControlBtn onClick={props.onSwitch}>
      {props.mode === "light" ? <BiSun /> : <BiMoon />}
    </ControlBtn>
  );
};

export default ThemeBtn;
