import { useContext, useEffect, useState } from "react";
import weatherContext from "./store/weather-context";
import CurrentWeather from "./components/current weather/CurrentWeather";
import FutureForecast from "./components/FutureForecast/FutureForecast";
import Header from "./components/header/Header";
import DayWeatherInfo from "./components/DayWeatherInfo/DayWeatherInfo";
import Loading from "./components/UI/Loading";

import Map from "./components/map/Map";
import { useTranslation } from "react-i18next";

function App() {
  const [enteredCity, setEnteredCity] = useState("");
  const [mode, setMode] = useState("light");
  const [, i18next] = useTranslation("global");

  const {
    fetchWeatherData,
    changeCityHandler,
    changeLangHandler,
    changeUnitHandler,
    isLoading,
    lang,
    tempUnit,
  } = useContext(weatherContext);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  // get lang frm local storage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      changeLangHandler(savedLang);
      i18next.changeLanguage(savedLang.toLowerCase());
    }
  }, [changeLangHandler, i18next]);

  // get theme from local storage
  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setMode("dark");
    } else {
      html.classList.remove("dark");
      setMode("light");
    }
  }, [mode]);

  const searchHandler = (event) => {
    event.preventDefault();
    changeCityHandler(enteredCity);
    setEnteredCity("");
  };

  const selectLangHandler = (enteredLang) => {
    if (enteredLang === "EN") {
      changeLangHandler("AR");
      localStorage.setItem("lang", "AR");
      i18next.changeLanguage("ar");
    } else {
      changeLangHandler("EN");
      localStorage.setItem("lang", "EN");
      i18next.changeLanguage("en");
    }
  };

  const toggleThemeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setMode("light");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleUnitHandler = (unit) => {
    if (unit === "C") {
      changeUnitHandler("F");
    } else {
      changeUnitHandler("C");
    }
  };

  const directionClass = lang === "AR" ? "rtl" : "ltr";

  if (mode === "dark") {
    document.body.classList.remove("bg-light-100");
    document.body.classList.add("bg-dark-100");
  } else {
    document.body.classList.remove("bg-dark-100");
    document.body.classList.add("bg-light-100");
  }

  return (
    <div className={`py-8 ${directionClass}`}>
      <Header
        lang={lang}
        mode={mode}
        unit={tempUnit}
        onSwitchTheme={toggleThemeHandler}
        onToggleLang={(event) => selectLangHandler(event.target.innerHTML)}
        onToggleUnit={(event) => toggleUnitHandler(event.target.innerHTML)}
        searchValue={enteredCity}
        onChange={(event) => setEnteredCity(event.target.value)}
        onSubmit={searchHandler}
      />
      {!isLoading && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 my-10 container">
            <div className="col-span-1 md:col-span-5">
              <CurrentWeather />
            </div>
            <div className="col-span-1 md:col-span-7">
              <Map />
            </div>
          </div>
          <div className="my-10 container">
            <FutureForecast />
          </div>
          <DayWeatherInfo />
        </>
      )}
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
