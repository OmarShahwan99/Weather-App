import ControlBtn from '../../UI/ControlBtn'

const TempBtn = (props) => {
  return (
    <ControlBtn onClick={props.onToggleUnit}>{props.unit}</ControlBtn>
  )
}

export default TempBtn
