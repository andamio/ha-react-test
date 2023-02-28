import { FC, useCallback, useEffect, useState } from 'react';
import { useIsMounted } from '../utils/common-hooks';
import { Text } from './text';

/**
 * Simulate an API call fetching a number. Return a random number after 5 seconds
 */
async function fetchRandomNumber(): Promise<number> {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(Math.trunc(Math.random() * 100));
    }, 1500)
  );
}

/**
 * This will show a number that is "fetched". You can click the random number to "fetch" another number.
 * It takes 5 seconds to fetch this number.
 */
export const ShowRandomNumber: FC = () => {
  const [result, setResult] = useState<number | undefined>();

  const isMounted = useIsMounted();

  useEffect(() => {
    if (result == null) {
      fetchRandomNumber()
        .then((res) => {
          if (isMounted()) {
            setResult(res);
          }
        })
        .catch((error) => {
          if (isMounted()) {
            setResult(undefined);
          }
          console.warn(error);
        });
    }
  }, [result, setResult, isMounted]);

  const onClick = useCallback(() => {
    setResult(undefined);
  }, [setResult]);

  if (result == null) {
    return <Text>Waiting on a number</Text>;
  }

  return <Text onClick={onClick}>{`Random number: ${result}`}</Text>;
};
