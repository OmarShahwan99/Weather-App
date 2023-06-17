import { useTranslation } from "react-i18next";
import { formattedDateNow } from "../../date";

const FutureForecastItem = (props) => {
  const [t] = useTranslation("global");
  const today = `${props.dayName} ${props.dayOfMonth} ${props.monthName}`;

  return (
    <li className="flex flex-col justify-between items-center">
      <div>
        <p
          className={`text-2xl font-medium ${
            formattedDateNow === today
              ? "text-primary"
              : "text-dark-100 dark:text-light-200"
          }`}
        >
          {formattedDateNow === today
            ? t("today")
            : t(props.dayName.toLowerCase())}
        </p>
        <p className="text-paragraph">
          {props.dayOfMonth} {t(props.monthName.toLowerCase())}
        </p>
      </div>
      <img
        src={props.icon}
        alt="weather icon"
        className="object-contain w-16"
      />
      <p className="font-medium">
        <span className="text-dark-100 dark:text-light-200 text-2xl">
          {props.maxTempDeg}
          <sup>&deg;{props.unit}</sup>
        </span>
      </p>
      <span className="text-paragraph text-center text-sm">{props.text}</span>
    </li>
  );
};

export default FutureForecastItem;
