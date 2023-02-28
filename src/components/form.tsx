import { FC, FormEvent, useRef, useState } from 'react';
import { SimpleButton } from './simple-button';
import { Text } from './text';

export const MyForm: FC = () => {
  // State for our error message
  const [errorMessage, setErrorMessage] = useState('');

  const textInputEmailRef = useRef<HTMLInputElement>(null);
  const textInputPhoneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Prevent the form from submitting
    event.preventDefault();

    // Reset the error message
    setErrorMessage('');

    // Check if our phone number is valid, and display an error message
    const phoneRegex = new RegExp(
      /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/gm
    );
    if (
      textInputPhoneRef.current?.value &&
      !phoneRegex.test(textInputPhoneRef.current.value)
    ) {
      // Set the error message
      setErrorMessage('Please enter a valid phone number');

      // Focus on the phone number field
      textInputPhoneRef.current.focus();

      return;
    }

    alert(`
      📧 Email: ${textInputEmailRef.current?.value}
      📲 Phone: ${textInputPhoneRef.current?.value}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && (
        <Text textColor="buttonRed" role="alert">
          {errorMessage}
        </Text>
      )}
      <div>
        <Text as="label" htmlFor="emailField">
          Your email
        </Text>
        :{' '}
        <input id="emailField" type="email" ref={textInputEmailRef} required />
      </div>
      <div>
        <Text as="label" htmlFor="phoneField">
          Your phone number
        </Text>
        : <input id="phoneField" type="tel" ref={textInputPhoneRef} required />
      </div>
      <SimpleButton type="submit">Submit</SimpleButton>
    </form>
  );
};
