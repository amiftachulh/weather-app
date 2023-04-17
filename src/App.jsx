import { useEffect, useState } from 'react';
import './App.css';
import { Icon } from '@iconify/react';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import WeatherDetails from './components/WeatherDetails';
import WeatherLoading from './components/WeatherLoading';
import Forecasts from './components/Forecasts';

dayjs.extend(utc);

function App() {
  const [userInput, setUserInput] = useState('');
  const [query, setQuery] = useState(() => localStorage.getItem('query'));
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [weatherErrorMsg, setWeatherErrorMsg] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMetric, setIsMetric] = useState(() => {
    const isMetric = localStorage.getItem('isMetric');
    if (!isMetric) return true;
    return JSON.parse(isMetric);
  });

  const units = isMetric ? 'metric' : 'imperial';
  const weatherApiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (query) {
      getWeatherData();
      getForecastData();
    }
  }, [query, isMetric]);

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(userInput);
    localStorage.setItem('query', userInput);
    setUserInput('');
  }

  function changeUnits() {
    setIsMetric((prev) => {
      localStorage.setItem('isMetric', !prev);
      return !prev;
    });
  }

  async function getWeatherData() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${weatherApiKey}`;

    setWeatherLoading(true);
    setWeatherData(null);
    setWeatherErrorMsg('');

    try {
      const response = await axios.get(weatherUrl);
      setWeatherData(response.data);
      document.title = `${response.data.name} | Weather App`;
    } catch (error) {
      document.title = 'Weather App';
      if (error.response.data.cod === '404') {
        setWeatherErrorMsg(
          <div className="error flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-2">
            <Icon icon="lucide:map-pin-off" width="5rem" height="5rem" />
            <p className="text-center font-bold">
              Sorry, the location that you search is not found
            </p>
          </div>
        );
        return;
      }

      setWeatherErrorMsg(
        <div className="error flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-2">
          <Icon
            icon="material-symbols:error-outline-rounded"
            width="5rem"
            height="5rem"
          />
          <p className="text-center font-bold">
            Error occured, please try again later
          </p>
        </div>
      );
    } finally {
      setWeatherLoading(false);
    }
  }

  async function getForecastData() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=${units}&appid=${weatherApiKey}`;

    setForecastLoading(true);
    setForecastData(null);

    try {
      const response = await axios.get(forecastUrl);
      setForecastData(response.data);
    } catch (error) {
      // do nothing
    } finally {
      setForecastLoading(false);
    }
  }

  function refresh() {
    if (query) {
      getWeatherData();
      getForecastData();
    }
  }

  return (
    <div className="App min-h-screen text-slate-200">
      <Navbar
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
        userInput={userInput}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
        refresh={refresh}
        isMetric={isMetric}
        changeUnits={changeUnits}
        setQuery={setQuery}
      />

      <main className="p-4">
        {weatherLoading ? (
          <WeatherLoading />
        ) : weatherData ? (
          <>
            <Weather data={weatherData} isMetric={isMetric} />
            <WeatherDetails data={weatherData} isMetric={isMetric} />
          </>
        ) : weatherErrorMsg ? (
          weatherErrorMsg
        ) : (
          <div className="empty-data flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-2">
            <Icon
              icon="fa6-solid:map-location-dot"
              width="5rem"
              height="5rem"
            />
            <p className="font-bold">
              Search location to show the current weather
            </p>
          </div>
        )}

        {forecastLoading ? null : forecastData ? (
          <Forecasts data={forecastData} />
        ) : null}
      </main>
    </div>
  );
}

export default App;
