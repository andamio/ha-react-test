import { useEffect, useMemo, useState, useRef } from 'react';
import { SimpleButton } from '../simple-button';
import { MemoWrap, ResultBox, TitleInput } from './memo-example.styled';

const getNumber = () => {
  // Imagine here an API call which returns a random number
  return Math.random();
};
const runHeavyCalc = (data: number, type: 'memoised' | 'non-memoised') => {
  if (!data) return;
  const t0 = performance.now();
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let str = '';
  let count = 0;
  const length = Math.floor(data * 99999);
  for (let i = 0; i < length; i++) {
    str += ' ' + chars.charAt(Math.floor(Math.random() * chars.length));
  }
  let array = str.split(' ');
  array.forEach(() => {
    count = count + 1;
  });
  const result = count;
  const t1 = performance.now();
  console.log(`[${type}] ${t1 - t0} milliseconds`);
  return result;
};

export const MemoExample = () => {
  const [count, setCount] = useState(1);
  const [numberUpdateCount, setNumberUpdateCount] = useState(1);
  const [number, setNumber] = useState(0);
  const [inputText, setInputText] = useState('useMemo Demonstration');

  console.log(`App has been rendered ${count} times.`);
  useEffect(() => {
    const data = getNumber();
    setNumber(data);
  }, []);

  const result = runHeavyCalc(number, 'non-memoised');
  const resultMemo = useMemo(() => runHeavyCalc(number, 'memoised'), [number]);

  return (
    <MemoWrap>
      <h1>{inputText}</h1>

      <p>
        useMemo allows you to memoize expensive functions so that you can avoid
        calling them on every render.
      </p>
      <ResultBox>
        Non-memoised result: {result}
        <br />
        The non-memoised function has been called {count} times
      </ResultBox>
      <ResultBox>
        Memoised result: {resultMemo}
        <br />
        The memoised function has been called {numberUpdateCount} times
      </ResultBox>
      <SimpleButton
        onClick={() => {
          setNumber(Math.floor(Math.random() * 10) + 1);
          setNumberUpdateCount(numberUpdateCount + 1);
          setCount(count + 1);
        }}
      >
        Update number
      </SimpleButton>
      <SimpleButton onClick={() => setCount(count + 1)}>
        Button Click
      </SimpleButton>
      <TitleInput
        type='text'
        onChange={(e) => {
          setInputText(
            e.target.value === '' ? 'useMemo Demonstration' : e.target.value
          );
          setCount(count + 1);
        }}
        placeholder='Add text to change the title'
      />
    </MemoWrap>
  );
};
