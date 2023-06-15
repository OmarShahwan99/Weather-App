import { useContext } from "react"
import weatherContext from "../../store/weather-context"

const Logo = () => {
    const { tempUnit } = useContext(weatherContext);
  return <h1 className="text-3xl text-primary col-span-1">Weather&deg;{tempUnit}</h1>
}

export default Logo
