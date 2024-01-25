import { useEffect, useState } from 'react';
import { WeatherContext } from '../hooks/useWeather';
import axios from 'axios';
import { appId } from '../constant';

export default function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  const [forecast, setForecast] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState(null);

  const [query, setQuery] = useState(() => localStorage.getItem('query'));
  const [isMetric, setIsMetric] = useState(() => {
    const isMetric = localStorage.getItem('isMetric');
    if (isMetric === 'true' || !isMetric) return true;
    return false;
  });

  useEffect(() => {
    if (query) {
      getWeather();
      getForecast();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, isMetric]);

  async function getWeather() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${isMetric ? 'metric' : 'imperial'}&appid=${appId}`;
    setWeatherLoading(true);

    try {
      const response = await axios.get(weatherUrl);
      setWeather(response.data);
      document.title = `${response.data.name} | Weather App`;
      setWeatherError(null);
    } catch (error) {
      setWeather(null);

      if (error.response.data.cod === '404') {
        setWeatherError({
          status: error.response.statusText,
          message: 'Location not found. You can try search again.',
        });
        document.title = 'Not Found | Weather App';
        return;
      }

      if (error.response.data.cod === '429') {
        setWeatherError({
          status: error.response.statusText,
          message: 'Sorry, the API call has reached its limit. You can try again later.',
        });
        document.title = 'Too Many Requests | Weather App';
        return;
      }

      setWeatherError({
        status: error.response.statusText,
        message: 'Something went wrong. Try again later.',
      });
      document.title = 'Error | Weather App';
    } finally {
      setWeatherLoading(false);
    }
  }

  async function getForecast() {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=${isMetric ? 'metric' : 'imperial'}&appid=${appId}`;

    setForecastLoading(true);
    setForecastError(null);
    setForecast(null);

    try {
      const response = await axios.get(forecastUrl);
      setForecast(response.data);
    } catch (error) {
      setForecastError('Something went wrong. Try again later.');
    } finally {
      setForecastLoading(false);
    }
  }

  function swapUnits() {
    setIsMetric(prev => {
      localStorage.setItem('isMetric', !prev);
      return !prev;
    });
  }

  const value = {
    getWeather,
    weather,
    weatherLoading,
    weatherError,
    getForecast,
    forecast,
    forecastLoading,
    forecastError,
    query,
    setQuery,
    isMetric,
    swapUnits,
  };

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}
