import { useContext } from "react";
import weatherContext from "../../store/weather-context";
import Card from "../UI/Card";
import TodaysForcast from "../TodaysForcast/TodaysForcast";

import { GrLocation } from "react-icons/gr";
import { useTranslation } from "react-i18next";

import { days, monthNames } from "../../date";

const CurrentWeather = () => {
  const { locationName, currentIcon, currentWeatherData, tempUnit } =
    useContext(weatherContext);
  const [t] = useTranslation("global");

  const date = new Date();

  const dayName = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const monthName = monthNames[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <Card>
      <div className="border-b-2 pb-5 border-b-paragraph">
        <div className="flex px-5 justify-between gap-5 flex-wrap">
          <div>
            <p className="text-sm text-paragraph">
              {t(dayName.toLowerCase())}, {dayOfMonth},{" "}
              {t(monthName.toLocaleLowerCase())}, {hours}:{minutes}
            </p>
            <h3 className="text-dark-100 dark:text-light-100 mb-4 text-2xl">
              {locationName}
              <GrLocation className="text-sm inline-block ml-3" />
            </h3>
            <h1 className="text-dark-100 dark:text-light-100 text-5xl font-medium">
              {tempUnit === "C"
                ? currentWeatherData.temp_c
                : currentWeatherData.temp_f}
              <sup className="text-2xl">&deg;{tempUnit}</sup>
            </h1>
          </div>
          <img
            src={currentIcon}
            alt="weather icon"
            className="object-contain "
          />
        </div>
      </div>
      <TodaysForcast />
    </Card>
  );
};

export default CurrentWeather;
