import { FC } from 'react';
import { useWeatherData } from '../utils/common-hooks';

const weatherParams = { location: { lat: -31.0397559, lng: 114.6813632 } };

export const Daily: FC = () => {
  const { data } = useWeatherData(weatherParams);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
