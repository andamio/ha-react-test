import { useQuery } from '@tanstack/react-query';
import { useRef, useEffect, useCallback, useState } from 'react';
import { fetchWeather, FetchWeatherParams } from '../api/weather';

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
  return useQuery({
    // Our queryKey includes all the options we expect to change that uniquely describe the data that is returned from our queryFn
    queryKey: ['weatherData', params.location, params.date, params.include],
    queryFn: () => fetchWeather(params),
  });
}
