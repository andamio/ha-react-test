import { SimpleButton } from './components/simple-button';
import { Tabs } from './components/tabs';
import { Text } from './components/text';
import { Reset } from './reset';
import { FC, useCallback, useEffect, useState } from 'react';
import { MyForm } from './components/form';
import { ShowRandomNumber } from './components/random-number';

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=-32.168841&lon=115.809106&units=metric&appid=8ec13c7dbc53c3ea8883f5062b5d1205'
    )
      .then((result) => {
        console.log('SUCCESS', result);
      })
      .catch((error) => {
        console.warn('FAILURE', error);
      });
  }, []);

  return (
    <div>
      <Reset />
      <SimpleButton onClick={() => setTabIndex(1)}>
        Navigate to tab 2!
      </SimpleButton>

      <Text textColor='purple' textSize='medium' textWeight='bold'>
        Hello I am some text
      </Text>

      <ShowRandomNumber />

      {/* Declare an array from 0 to 99,999 */}
      <Accumulator bigArray={[...Array(100000).keys()]} />

      <Counter />

      <MyForm />

      <Tabs
        items={[
          { title: 'Tab 1', content: 'Tab 1 content!' },
          { title: 'Tab 2', content: 'Tab 2 content!' },
        ]}
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
      />
    </div>
  );
}

interface AccumulatorProps {
  bigArray: number[];
}

const Accumulator: FC<AccumulatorProps> = (props) => {
  // Reduce will take an array, and turn it into a single value of the same type. In this case, it's summing all numbers in the array
  const allAdded = props.bigArray.reduce((a, b) => a + b, 0);

  return <Text>{allAdded}</Text>;
};

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  const onClick = useCallback(
    () => setCounter(counter + 1),
    [counter, setCounter]
  );

  return <SimpleButton onClick={onClick}>{`Count: ${counter}`}</SimpleButton>;
};

console.group('People');
const person = {
  givenName: 'Tomas',
  surname: 'Haake',
  age: 52,
};
const person2 = {
  givenName: 'Fredrik',
  surname: 'Thordendal',
  age: 52,
};

console.log('Print a person object', person);
console.log('Print a person object', person2);
console.groupEnd();
console.group('Cars');
const car = {
  make: 'Nissan',
  model: 'Skyline',
  badge: 'GT-R R32',
};
console.log('Print a car object', car);
console.groupEnd();

export default App;
