import axios from "axios";
import { createContext, useCallback, useState, useEffect } from "react";

const weatherContext = createContext({
  city: "",
  lang: "en",
  tempUnit: "C",
  location: {},
  lat: 0,
  lon: 0,
  locationName: "",
  currentWeatherData: {},
  currentIcon: "",
  todaysForecast: [],
  futureForecast: [],
  isLoading: false,
  changeCityHandler: (city) => {},
  changeLangHandler: (langs) => {},
  changeUnitHandler: (unit) => {},
  fetchWeatherData: () => {},
});

export const WeatherProvider = (props) => {
  const [city, setCity] = useState();
  const [lang, setLang] = useState("en");
  const [tempUnit, setTempUnit] = useState("C");
  const [locationName, setLocationName] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [currentIcon, setCurrentIcon] = useState("");
  const [todaysForecast, setTodaysForeCast] = useState([]);
  const [futureForecast, setFutureForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const changeCityHandler = (city) => {
    setCity(city);
  };

  const changeLangHandler = useCallback((lang) => {
    setLang(lang);
  }, []);

  const changeUnitHandler = (unit) => {
    setTempUnit(unit);
  };

  useEffect(() => {
    try {
      const fetchCurrLocationData = async () => {
        const response = await axios.get("https://ipapi.co/json");
        const locationData = await response.data;
        setCity(locationData.city);
      };
      fetchCurrLocationData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchWeatherData = useCallback(async () => {
    setIsLoading(true);
    if (city) {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=5fb74b8a4f494d05a5a102734231206&q=${city}&days=10&aqi=no&alerts=no&lang=${lang}`,
          { headers: { "Content-Type": "application/json" } }
        );
        const weatherData = await response.data;
        setIsLoading(false);
        setLocationName(weatherData.location.name);
        setLat(weatherData.location.lat);
        setLon(weatherData.location.lon);
        setCurrentWeatherData(weatherData.current);
        setCurrentIcon(weatherData.current.condition.icon);
        setTodaysForeCast(weatherData.forecast.forecastday[0].hour);
        setFutureForecast(weatherData.forecast.forecastday);
      } catch (error) {
        setIsLoading(false);
      }
    }
  }, [lang, city]);

  const contextValue = {
    city,
    lang,
    tempUnit,
    locationName,
    lat,
    lon,
    currentWeatherData,
    currentIcon,
    todaysForecast,
    futureForecast,
    isLoading,
    changeCityHandler,
    changeLangHandler,
    changeUnitHandler,
    fetchWeatherData,
  };

  return (
    <weatherContext.Provider value={contextValue}>
      {props.children}
    </weatherContext.Provider>
  );
};

export default weatherContext;
