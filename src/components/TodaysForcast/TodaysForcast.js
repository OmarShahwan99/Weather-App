import React from "react";
import { useContext } from "react";
import weatherContext from "../../store/weather-context";
import TodaysForecastItem from "./TodaysForecastItem";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TodaysForcast = () => {
  const { todaysForecast, tempUnit } = useContext(weatherContext);

  const times = [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentIndex = times.findIndex((time) => {
    const [hour, minute] = time.split(":");
    return (
      parseInt(hour) >= currentHour ||
      (parseInt(hour) === currentHour && parseInt(minute) >= currentMinute)
    );
  });

  let sortedTimes = [];
  if (todaysForecast.length > 0) {
    for (let i = currentIndex; i < todaysForecast.length; i++) {
      sortedTimes.push(todaysForecast[i]);
    }

    for (let i = 0; i < currentIndex; i++) {
      sortedTimes.push(todaysForecast[i]);
    }
  }

  return (
    <div className="relative">
      <div className="absolute top-1/2 w-full z-10">
        <button className="prev-button p-1 text-xs bg-light-100 dark:bg-paragraph rounded-full text-dark-200 absolute left-5">
          <IoIosArrowBack />
        </button>
        <button className="next-button p-1 text-xs bg-light-100 dark:bg-paragraph rounded-full text-dark-200 absolute right-5">
          <IoIosArrowForward />
        </button>
      </div>
      <div className="px-5 mt-6">
        <Swiper
          slidesPerView={1}
          navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
          spaceBetween={0}
          breakpoints={{
            220: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 4,
            },
            520: {
              slidesPerView: 7,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <ul>
            {sortedTimes.map((h) => (
              <SwiperSlide key={h.time_epoch}>
                <TodaysForecastItem
                  key={h.time_epoch}
                  hour={new Date(h.time).getHours()}
                  icon={h.condition.icon}
                  tempDeg={tempUnit === "C" ? h.temp_c : h.temp_f}
                  currentHour={currentHour}
                />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </div>
  );
};

export default TodaysForcast;
