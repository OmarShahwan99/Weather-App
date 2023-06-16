import { useContext } from "react";
import weatherContext from "../../store/weather-context";
import DayWeatherCard from "./DayWeatherCard";

import { days, monthNames } from "../../date";

const DayWeatherInfo = () => {
  const { futureForecast } = useContext(weatherContext);

  const limittedFutureForecast = futureForecast.slice(0, 3);

  return limittedFutureForecast.map((day) => (
    <DayWeatherCard
      key={day.date_epoch}
      dayName={days[new Date(day.date).getDay()]}
      dayOfMonth={new Date(day.date).getDate()}
      monthName={monthNames[new Date(day.date).getMonth()]}
      morningHours={day.hour.slice(0, 6)}
      afternoonHours={day.hour.slice(6, 12)}
      eveningHours={day.hour.slice(12, 18)}
      nightHours={day.hour.slice(18, 24)}
    />
  ));
};

export default DayWeatherInfo;
