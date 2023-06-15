import { useTranslation } from "react-i18next";
import { formattedDateNow } from "../../date";

const TableHeader = (props) => {
  const today = `${props.dayName} ${props.dayOfMonth} ${props.monthName}`;
  const [t] = useTranslation("global");

  return (
    <thead className="border-b-2 border-paragraph">
      <tr>
        <th colSpan={2} scope="col" className="px-6 py-4 flex gap-4 items-end">
          <p
            className={`text-6xl font-medium ${
              formattedDateNow === today
                ? "text-primary"
                : "text-dark-100 dark:text-light-200"
            }`}
          >
            {props.dayOfMonth}
          </p>
          <div
            className={`${
              formattedDateNow === today ? "text-primary" : "text-paragraph"
            } font-medium`}
          >
            <p>{t(props.monthName.toLowerCase())},</p>
            <p>
              {formattedDateNow !== today && t(props.dayName.toLowerCase())}
              {formattedDateNow === today && t("today")}
            </p>
          </div>
        </th>
        <th scope="col" className="px-6 text-paragraph text-lg">
          {t("pressure")}
        </th>
        <th scope="col" className="px-6 text-paragraph text-lg">
          {t("humidity")}
        </th>
        <th scope="col" className="px-6 text-paragraph text-lg">
          {t("feels like")}
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;