import React from "react";
import { useTranslation } from "react-i18next";

const TodaysForecastItem = (props) => {
  const [t] = useTranslation("global");
  return (
    <li className="flex flex-col items-center justify-between mx-2">
      <img src={props.icon} alt="weather icon" />
      <p className="text-paragraph text-sm">
        {props.hour === props.currentHour && t("now")}
        {props.hour !== props.currentHour && `${props.hour}:00`}
      </p>
      <p className="text-lg text-dark-100 dark:text-light-100 font-medium">
        {props.tempDeg}&deg;
      </p>
    </li>
  );
};

export default TodaysForecastItem;
