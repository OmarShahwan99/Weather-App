import { useTranslation } from "react-i18next";
import Card from "../UI/Card";
import TableHeader from "./TableHeader";
import TrHours from "./TrHours";

const DayWeatherCard = (props) => {
  const [t] = useTranslation("global");
  return (
    <Card>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <TableHeader
                  dayOfMonth={props.dayOfMonth}
                  dayName={props.dayName}
                  monthName={props.monthName}
                />
                <tbody>
                  <TrHours
                    minTempC={props.morningHours[0].temp_c}
                    maxTempC={props.morningHours[5].temp_c}
                    minTempF={props.morningHours[0].temp_f}
                    maxTempF={props.morningHours[5].temp_f}
                    icon={props.morningHours[0].condition.icon}
                    text={props.morningHours[0].condition.text}
                    pressure={props.morningHours[0].pressure_mb}
                    humidity={props.morningHours[0].humidity}
                    feelslikeC={props.morningHours[0].feelslike_c}
                    feelslikeF={props.morningHours[0].feelslike_f}
                    title={t("morning")}
                  />
                  <TrHours
                    minTempC={props.afternoonHours[0].temp_c}
                    maxTempC={props.afternoonHours[5].temp_c}
                    minTempF={props.afternoonHours[0].temp_f}
                    maxTempF={props.afternoonHours[5].temp_f}
                    icon={props.afternoonHours[0].condition.icon}
                    text={props.afternoonHours[0].condition.text}
                    pressure={props.afternoonHours[0].pressure_mb}
                    humidity={props.afternoonHours[0].humidity}
                    feelslikeC={props.afternoonHours[0].feelslike_c}
                    feelslikeF={props.afternoonHours[0].feelslike_f}
                    title={t("afternoon")}
                  />
                  <TrHours
                    minTempC={props.eveningHours[0].temp_c}
                    maxTempC={props.eveningHours[5].temp_c}
                    minTempF={props.eveningHours[0].temp_f}
                    maxTempF={props.eveningHours[5].temp_f}
                    icon={props.eveningHours[0].condition.icon}
                    text={props.eveningHours[0].condition.text}
                    pressure={props.eveningHours[0].pressure_mb}
                    humidity={props.eveningHours[0].humidity}
                    feelslikeC={props.eveningHours[0].feelslike_c}
                    feelslikeF={props.eveningHours[0].feelslike_f}
                    title={t("evening")}
                  />
                  <TrHours
                    minTempC={props.nightHours[0].temp_c}
                    maxTempC={props.nightHours[5].temp_c}
                    minTempF={props.nightHours[0].temp_f}
                    maxTempF={props.nightHours[5].temp_f}
                    icon={props.nightHours[0].condition.icon}
                    text={props.nightHours[0].condition.text}
                    pressure={props.nightHours[0].pressure_mb}
                    humidity={props.nightHours[0].humidity}
                    feelslikeC={props.nightHours[0].feelslike_c}
                    feelslikeF={props.nightHours[0].feelslike_f}
                    title={t("night")}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DayWeatherCard;
