import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import clear from "../src/clear.png";
import water from "../src/water.png";
import wind from "../src/wind.png";

function Weather() {
  const navigate = useNavigate();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  let city = "seoul";

  const handleLogout = () => {
    axios
      .post(
        `http://sesac231-alb-1341608115.ap-southeast-1.elb.amazonaws.com/logout`
      )
      .then((response) => {
        console.log(response.data.message);
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  useEffect(() => {
    // 로드 밸런서 엔드포인트로 GET 요청 보내기
    axios
      .get(
        `http://sesac231-alb-1341608115.ap-southeast-1.elb.amazonaws.com/get_weather`,
        {
          params: { city: city },
        }
      )
      .then((response) => {
        setWeatherData(response.data); // API 응답 데이터 저장
        setLoading(false); // 로딩 상태 업데이트
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, [city]);

  // if (loading) return <p>Loading...</p>;
  // if (!weatherData) return <p>No weather data available.</p>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <div className="flex justify-between items-center px-5 py-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            서울시 성동구
          </span>
          <button
            onClick={handleLogout}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium rounded-lg px-4 py-2 text-sm"
          >
            로그아웃
          </button>
        </div>

        <div className="px-5">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between w-96 h-80">
              <div className="ml-8 bg-white flex items-center justify-center">
                <img className="rounded-t-lg" src={clear} alt="weather" />
              </div>

              <div className="w-64 h-12 bg-white dark:bg-gray-800 dark:border-gray-700 ml-4 flex items-center h-full">
                <h5 className="text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  25°C
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5">
          <div className="grid grid-cols-1 gap-4 mb-5">
            <div className="flex justify-between">
              <div className="w-64 h-16 bg-white dark:bg-gray-800 dark:border-gray-700 ml-2 flex items-center">
                <img
                  className="w-12 h-14 rounded-l-lg"
                  src={water}
                  alt="weather"
                />
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white ml-2">
                  70%
                </h5>
              </div>

              <div className="w-64 h-16 bg-white dark:bg-gray-800 dark:border-gray-700 ml-2 flex items-center">
                <img
                  className="w-12 h-14 rounded-l-lg"
                  src={wind}
                  alt="weather"
                />
                <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white ml-2">
                  북동 7.5m/s
                </h5>
              </div>
            </div>

            <div className="flex justify-end items-center">
              <Link
                to="/signin"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5 mb-2"
              >
                자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
