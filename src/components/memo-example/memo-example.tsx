import { useMemo, useState } from 'react';
import { SimpleButton } from '../simple-button';
import { MemoWrap, Note, ResultBox, TitleInput } from './memo-example.styled';

// Create computationally expensive function:
const fibonacci = (number: number | string): number => {
  const t0 = performance.now();
  const num = typeof number === 'string' ? parseInt(number) : number;
  const t1 = performance.now();
  console.log(`Call to fibonacci took ${t1 - t0} milliseconds.`);
  return num === 2
    ? 1
    : num === 1
    ? 0
    : fibonacci(num - 1) + fibonacci(num - 2);
};

export const MemoExample = () => {
  const [count, setCount] = useState(1);
  const [inputText, setInputText] = useState('useMemo Demonstration');

  const memoizedValue = useMemo(() => fibonacci(count), [count]);

  return (
    <MemoWrap>
      <h1>{inputText}</h1>
      <p>
        useMemo allows you to memoize expensive functions so that you can avoid
        calling them on every render.
      </p>
      <p>
        This demonstration creates the fibonacci number using a heavy, slow
        function.
      </p>
      <ResultBox>Fibonacci: {memoizedValue}</ResultBox>
      <ResultBox>Count: {count}</ResultBox>
      <SimpleButton onClick={() => setCount(count + 1)}>Increment</SimpleButton>

      <TitleInput
        type='text'
        onChange={(e) => {
          setInputText(
            e.target.value === '' ? 'useMemo Demonstration' : e.target.value
          );
        }}
        placeholder='Add text to change the title'
      />
      {count > 20 && (
        <Note>
          Notice the performance of updating the title is still snappy and fast?
          The fibonacci function isn't being called on every render.
        </Note>
      )}
    </MemoWrap>
  );
};
