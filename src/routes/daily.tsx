import { FC } from 'react';
import { useWeatherData } from '../utils/common-hooks';

export const Daily: FC = () => {
  const { data, status, error } = useWeatherData({
    location: { lat: -31.0397559, lng: 114.6813632 },
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>{(error as Error).message}</span>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
