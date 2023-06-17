import { useContext } from "react";
import weatherContext from "../../store/weather-context";
import FutureForecastItem from "./FutureForecastItem";
import Card from "../UI/Card";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { days, monthNames } from "../../date";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";

const FutureForecast = () => {
  const { futureForecast, tempUnit, lang } = useContext(weatherContext);
  const [t] = useTranslation("global");

  return (
    <Card>
      <div className="relative group">
        <div className="absolute top-2/3 w-full z-10 opacity-0 transition duration-300 group-hover:opacity-100">
          <button
            className={`${
              lang === "AR" ? "nextF-button" : "prevF-button"
            } p-1 text-lg bg-light-100 dark:bg-paragraph rounded-full text-dark-200 absolute left-5`}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`${
              lang === "AR" ? "prevF-button" : "nextF-button"
            } p-1 text-lg bg-light-100 dark:bg-paragraph rounded-full text-dark-200 absolute right-5`}
          >
            <IoIosArrowForward />
          </button>
        </div>
        <h2 className="px-5 font-medium text-2xl pb-5 text-dark-100 dark:text-light-200 border-b-paragraph border-b-2">
          {t("title")}
        </h2>
        <div className="px-16 mt-10">
          <Swiper
            slidesPerView={1}
            navigation={{ prevEl: ".prevF-button", nextEl: ".nextF-button" }}
            spaceBetween={0}
            breakpoints={{
              220: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              420: {
                slidesPerView: 3,
              },
              520: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 7,
              },
              1024: {
                slidesPerView: 9,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <ul className="flex justify-center">
              {futureForecast.map((item) => (
                <SwiperSlide key={item.date_epoch}>
                  <FutureForecastItem
                    icon={item.day.condition.icon}
                    date={item.date}
                    dayName={days[new Date(item.date).getDay()]}
                    dayOfMonth={new Date(item.date).getDate()}
                    monthName={monthNames[new Date(item.date).getMonth()]}
                    maxTempDeg={
                      tempUnit === "C" ? item.day.avgtemp_c : item.day.avgtemp_f
                    }
                    minTempDeg={
                      tempUnit === "C" ? item.day.avgtemp_c : item.day.avgtemp_f
                    }
                    text={item.day.condition.text}
                    unit={tempUnit}
                  />
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
      </div>
    </Card>
  );
};

export default FutureForecast;
