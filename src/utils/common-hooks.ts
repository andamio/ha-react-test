import { useRef, useEffect, useCallback, useState } from 'react';
import { fetchWeather, FetchWeatherParams } from '../api/weather';
import { WeatherData } from '../types/weather';

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}

export function useWeatherData(params: FetchWeatherParams) {
  const [data, setData] = useState<WeatherData>();

  useEffect(() => {
    fetchWeather(params)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);

  return { data };
}
