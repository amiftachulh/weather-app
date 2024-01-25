import { createContext, useContext } from 'react';

export const WeatherContext = createContext();

export default function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('Context is not available');
  }
  return context;
}
