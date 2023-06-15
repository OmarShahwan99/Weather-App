import { useContext } from "react";
import weatherContext from "../../store/weather-context";
import Card from "../UI/Card";
import TodaysForcast from "../TodaysForcast/TodaysForcast";

import { GrLocation } from 'react-icons/gr';

const CurrentWeather = () => {
  const { locationName, currentIcon, currentWeatherData, tempUnit } = useContext(weatherContext);

  const date = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthName = monthNames[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${dayName}, ${dayOfMonth} ${monthName}, ${hours}:${minutes}`;

  return (
    <Card>
      <div className=" border-b-2 pb-5 border-b-paragraph">
        <div className="flex px-5 justify-between gap-5 flex-wrap">
          <div>
            <p className="text-sm text-paragraph">{formattedDate}</p>
            <h3 className="text-dark-100 dark:text-light-100 mb-4 text-2xl">
              {locationName}
              <GrLocation className="text-dark-100 text-sm inline-block ml-3 dark:text-light-100" />
            </h3>
            <h1 className="text-dark-100 dark:text-light-100 text-5xl font-medium">
              {tempUnit === 'C' ? currentWeatherData.temp_c : currentWeatherData.temp_f}<sup className="text-2xl">&deg;{tempUnit}</sup>
            </h1>
          </div>
          <img src={currentIcon} alt="weather icon" className="object-contain " />
        </div>
        <p></p>
      </div>
      <TodaysForcast />
    </Card>
  );
};

export default CurrentWeather;
