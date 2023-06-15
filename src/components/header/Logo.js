import { useContext } from "react";
import weatherContext from "../../store/weather-context";

import { useTranslation } from "react-i18next";

const Logo = () => {
  const [t] = useTranslation("global") 
  const { tempUnit } = useContext(weatherContext);
  return (
    <h1 className="text-3xl text-primary col-span-1">{t('logo')}&deg;{tempUnit}</h1>
  );
};

export default Logo;
