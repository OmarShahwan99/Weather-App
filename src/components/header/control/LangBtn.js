import ControlBtn from "../../UI/ControlBtn";

const LangBtn = (props) => {
  return <ControlBtn onClick={props.onToggleLang}>{props.lang}</ControlBtn>;
};

export default LangBtn;
