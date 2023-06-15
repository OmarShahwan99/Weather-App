import { useContext, useEffect, useState } from "react";
import weatherContext from "./store/weather-context";
import CurrentWeather from "./components/current weather/CurrentWeather";
import FutureForecast from "./components/FutureForecast/FutureForecast";
import Header from "./components/header/Header";
import DayWeatherInfo from "./components/DayWeatherInfo/DayWeatherInfo";
import Loading from "./components/UI/Loading";

import Map from "./components/map/Map";

function App() {
  const [enteredCity, setEnteredCity] = useState("");
  const [mode, setMode] = useState("light");

  const { 
    fetchWeatherData,
    changeCityHandler,
    changeLangHandler,
    changeUnitHandler,
    isLoading,
    lang,
    tempUnit,
    location
  } = useContext(weatherContext);

  useEffect(() => {
    fetchWeatherData();  
  }, [fetchWeatherData]);

  // get lang frm local storage
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      changeLangHandler(savedLang);
    }
  }, [changeLangHandler]);

  // get theme from local storage
  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setMode('dark');
    }else {
      html.classList.remove('dark');
      setMode('light');
    }
  }, [mode]);
  
  const searchHandler = (event) => {
    event.preventDefault();
    changeCityHandler(enteredCity);
    setEnteredCity("");
  };
  
  const selectLangHandler = (enteredLang) => {
    if (enteredLang === 'EN') {
      changeLangHandler('AR');
      localStorage.setItem('lang', 'AR');
    }else {
      localStorage.setItem('lang', 'EN');
      changeLangHandler('EN');
    }
  }

  const toggleThemeHandler =  () => {
    if (mode === 'light') {
      setMode('dark');
      localStorage.setItem('theme', 'dark');
    }else {
      setMode('light');
      localStorage.setItem('theme', 'light');
    }
  }

  const toggleUnitHandler = (unit) => {
    if (unit === 'C') {
      changeUnitHandler('F');
    }else {
      changeUnitHandler('C');
    }
  }

  const directionClass = lang === 'AR' ? 'rtl' : 'ltr'

  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-100"> 
      <div className={`container py-8 ${directionClass}`}>
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
        {!isLoading && <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <CurrentWeather />
              <Map />
            </div>
            <FutureForecast />
            <DayWeatherInfo />
        </div>}
        {isLoading && <Loading />}
      </div>
    </div>
  );
}

export default App;
