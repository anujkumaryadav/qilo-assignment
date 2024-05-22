import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import WeatherCard from "./components/WeatherCard";
import WeatherBarChart from "./components/WeatherBarChart";
import Notepad from "./components/Notepad";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [avgTemp, setAvgTemp] = useState(0);
  const [avgRainfall, setAvgRainfall] = useState(0);
  const [avgHumidity, setAvgHumidity] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Dummy data for demonstration
      const dummyData = [
        { temp: 20, rainfall: 5, humidity: 60 },
        { temp: 22, rainfall: 7, humidity: 65 },
        { temp: 25, rainfall: 0, humidity: 70 },
        { temp: 24, rainfall: 2, humidity: 68 },
        { temp: 23, rainfall: 4, humidity: 66 },
        { temp: 26, rainfall: 3, humidity: 72 },
        { temp: 28, rainfall: 1, humidity: 75 },
      ];

      setWeatherData(dummyData);

      const avgTemp =
        dummyData.reduce((acc, day) => acc + day.temp, 0) / dummyData.length;
      const avgRainfall =
        dummyData.reduce((acc, day) => acc + day.rainfall, 0) /
        dummyData.length;
      const avgHumidity =
        dummyData.reduce((acc, day) => acc + day.humidity, 0) /
        dummyData.length;

      setAvgTemp(avgTemp.toFixed(2));
      setAvgRainfall(avgRainfall.toFixed(2));
      setAvgHumidity(avgHumidity.toFixed(2));
      setCurrentTemp(dummyData[dummyData.length - 1].temp);
    };

    fetchData();
  }, []);

  return (
    <div class="bg-[#212121] h-full w-full pb-10">
      <div className="App">
        <h2 className="text-2xl text-white text-center pt-10">Average of week</h2>
        <div className="lg:flex lg:flex-row flex flex-col gap-10 justify-evenly items-center pt-10">
          <WeatherCard title="Temperature" value={`${avgTemp}°C`} icon={<FaTemperatureHigh size={24}/>} />
          <WeatherCard
            title="Rainfall"
            value={`${avgRainfall} mm`}
            icon={<FaCloudRain size={24}/>}
          />
          <WeatherCard title="Humidity" value={`${avgHumidity}%`} icon={<WiHumidity size={24}/>} />
          <WeatherCard title="Current Temp" value={`${currentTemp}°C`} icon={<FaTemperatureThreeQuarters size={24}/>} />
        </div>
        <div className="mt-20 pb-10 w-full max-w-4xl mx-auto">
          <WeatherBarChart data={weatherData.map((day) => day.temp)} />
        </div>
      </div>
      <Notepad/>
    </div>
  );
};

export default App;
