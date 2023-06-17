import { useContext } from "react";
import weatherContext from "../../store/weather-context";

const TrHours = (props) => {
  const { tempUnit, lang } = useContext(weatherContext);

  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 flex items-start gap-8 justify-between">
        <div>
          <p className={`text-paragraph ${lang === "AR" ? "text-right" : ""}`}>
            {props.title}
          </p>
          <p className="font-medium text-dark-100 dark:text-light-100 text-lg">
            +{tempUnit === "C" ? props.minTempC : props.minTempF}&deg;... +
            {tempUnit === "C" ? props.maxTempC : props.minTempF}&deg;
          </p>
        </div>
        <div className="flex items-center mr-10 w-[150px] md:w-[250px]">
          <img alt="icon" className="w-16 object-contain" src={props.icon} />
          <p className="text-paragraph font-medium">{props.text}</p>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-xl font-medium text-dark-100 dark:text-light-200">
        {props.pressure}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-xl font-medium text-dark-100 dark:text-light-200">
        {props.humidity}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-xl font-medium text-dark-100 dark:text-light-200">
        +{tempUnit === "C" ? props.feelslikeC : props.feelslikeF}&deg;
      </td>
    </tr>
  );
};

export default TrHours;
