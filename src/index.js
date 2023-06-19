import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { WeatherProvider } from "./store/weather-context";
import i18next from "i18next";

import { I18nextProvider } from "react-i18next";

import ar from "./translation/ar.json";
import en from "./translation/en.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: en,
    },
    ar: {
      global: ar,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <I18nextProvider i18n={i18next}>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </I18nextProvider>
);
