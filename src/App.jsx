import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { Icon } from '@iconify/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Detail from './components/Detail';
import Forecast from './components/Forecast';

dayjs.extend(utc);

function App() {
  const [userInput, setUserInput] = useState('');
  const [query, setQuery] = useState(() => localStorage.getItem('query'));
  const [weatherData, setWeatherData] = useState('');
  const [forecastData, setForecastData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMesssage] = useState('');
  const [isMetric, setIsMetric] = useState(true);

  const apiKey = '7141b15f64f0f081581cb634eda215ba';

  useEffect(() => {
    getData();
  }, [query, isMetric]);

  useEffect(() => {
    changeBackground();
  }, [weatherData]);

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(userInput);
    localStorage.setItem('query', userInput);
    setUserInput('');
  }

  async function getData() {
    const units = isMetric ? 'metric' : 'imperial';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=${units}&appid=${apiKey}`;
    await Promise.all([axios.get(weatherUrl), axios.get(forecastUrl)])
      .then(([{ data: weather }, { data: forecast }]) => {
        setWeatherData(weather);
        setForecastData(forecast);
        document.title = `${weather.name} | Weather App`;
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMesssage(error.response.data.message);
        document.title = 'Weather App';
        setIsLoading(true);
      });
  }

  function changeBackground() {
    const hour = dayjs((weatherData.dt + weatherData.timezone) * 1000)
      .utc()
      .get('hour');
    let bgColor;
    if (hour < 4) {
      bgColor = 'linear-gradient(to bottom, #20202c 0%,#515175 100%)';
    } else if (hour < 6) {
      bgColor =
        'linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)';
    } else if (hour < 15) {
      bgColor =
        'linear-gradient(to bottom, #757abf 0%, #8583be 60%, #eab0d1 100%)';
    } else if (hour < 18) {
      bgColor =
        'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)';
    } else if (hour >= 18) {
      bgColor = 'linear-gradient(to bottom, #20202c 0%,#515175 100%)';
    } else {
      bgColor =
        'linear-gradient(to bottom, #757abf 0%, #8583be 60%, #eab0d1 100%)';
    }
    document.body.style.background = bgColor;
  }

  function capitalizeEachWords(text) {
    text = text
      .split(' ')
      .map((t) => t[0].toUpperCase() + t.substring(1))
      .join(' ');
    return text;
  }

  // Weather Data
  let weatherDescription, weatherDetails;
  if (weatherData) {
    weatherDescription = capitalizeEachWords(
      weatherData.weather[0].description
    );
    weatherDetails = [
      {
        title: 'Sunrise',
        icon: 'mi:sunrise',
        value: dayjs((weatherData.sys.sunrise + weatherData.timezone) * 1000)
          .utc()
          .format('HH:mm'),
      },
      {
        title: 'Sunset',
        icon: 'mi:sunset',
        value: dayjs((weatherData.sys.sunset + weatherData.timezone) * 1000)
          .utc()
          .format('HH:mm'),
      },
      {
        title: 'Humidity',
        icon: 'material-symbols:humidity-percentage-outline',
        value: weatherData.main.humidity,
        unit: '%',
      },
      {
        title: 'Pressure',
        icon: 'mdi:barometer',
        value: weatherData.main.pressure,
        unit: 'hPa',
      },
      {
        title: 'Wind Speed',
        icon: 'ph:wind',
        value: isMetric
          ? (weatherData.wind.speed * 3.6).toFixed()
          : weatherData.wind.speed.toFixed(),
        unit: isMetric ? 'km/h' : 'miles/h',
      },
      {
        title: 'Wind Direction',
        icon: 'mdi:arrow-compass',
        value: weatherData.wind.deg,
        unit: '°',
      },
      {
        title: 'Cloudiness',
        icon: 'material-symbols:cloud-outline',
        value: weatherData.clouds.all,
        unit: '%',
      },
      {
        title: 'Visibility',
        icon: 'material-symbols:visibility-outline',
        value: isMetric
          ? weatherData.visibility / 1000
          : (weatherData.visibility / 1609).toFixed(),
        unit: isMetric ? 'km' : 'miles',
      },
      {
        title: 'Rain Volume',
        icon: 'carbon:rain-drop',
        value: weatherData.rain && weatherData.rain['1h'],
        unit: 'mm',
      },
      {
        title: 'Snow Volume',
        icon: 'carbon:snow-density',
        value: weatherData.snow && weatherData.snow['1h'],
        unit: 'mm',
      },
    ];

    weatherDetails = weatherDetails.map((detail) => {
      if (detail.value === undefined) {
        return;
      } else {
        return (
          <Detail
            key={detail.title}
            title={detail.title}
            icon={detail.icon}
            value={detail.value}
            unit={detail.unit}
          />
        );
      }
    });
  }

  // Forecast Data
  let forecastItems;
  if (forecastData) {
    forecastItems = forecastData.list.map((forecast) => {
      const forecastDescription = capitalizeEachWords(
        forecast.weather[0].description
      );
      return (
        <Forecast
          key={forecast.dt}
          date={dayjs((forecast.dt + forecastData.city.timezone) * 1000)
            .utc()
            .format('DD-MM-YYYY')}
          time={dayjs((forecast.dt + forecastData.city.timezone) * 1000)
            .utc()
            .format('HH:mm')}
          temperature={`${forecast.main.temp.toFixed()}°`}
          icon={forecast.weather[0].icon}
          description={forecastDescription}
        />
      );
    });
  }

  return (
    <div className="App flex min-h-screen flex-col items-center p-4 text-slate-100">
      <Search
        onSubmit={(event) => handleSubmit(event)}
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <main className="grid flex-grow place-items-center py-4">
        {isLoading ? (
          <div className="empty-data">
            {errorMessage === 'city not found'
              ? 'Please enter a valid location!'
              : 'Search the location to show the data...'}
          </div>
        ) : (
          <>
            <Tippy content="Change units">
              <button
                className="menu__change-units-icon mb-1 place-self-end p-2"
                onClick={() => setIsMetric((prevIsMetric) => !prevIsMetric)}
              >
                <Icon icon="mi:switch" height="1.5rem" />
              </button>
            </Tippy>
            <Weather
              name={weatherData.name}
              country={weatherData.sys.country}
              updatedAt={dayjs((weatherData.dt + weatherData.timezone) * 1000)
                .utc()
                .format('HH:mm')}
              temperature={weatherData.main.temp.toFixed()}
              units={isMetric ? 'C' : 'F'}
              main={weatherData.weather[0].main}
              icon={weatherData.weather[0].icon}
              description={weatherDescription}
            />
            <div className="detail mt-8 grid w-80 grid-cols-2 gap-2 rounded-md bg-slate-900 bg-opacity-25 p-4">
              {weatherDetails}
            </div>
          </>
        )}
      </main>
      {!isLoading && (
        <div className="forecast flex w-11/12 gap-2 overflow-x-scroll pb-2">
          {forecastItems}
        </div>
      )}
    </div>
  );
}

export default App;
