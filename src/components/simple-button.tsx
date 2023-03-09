import styled, { CSSObject } from 'styled-components';
import { theme } from '../theme';

/**
 * A sum type which states that the theme can be primary or secondary.
 * If you've not heard of a sum type before, this article may be of interest (although it's not Typescript specific) https://adapptor.com.au/blog/sum-types-in-swift-and-kotlin
 */
export type ButtonTheme = 'primary' | 'secondary';

interface Props {
  /**
   * An optional true|false property which tells us whether or not this button should use a secondary style.
   */
  secondary?: boolean;
}

/** Here we are defining two different sets of colors based on which button style we wish to render */
const buttonTheme: Record<ButtonTheme, CSSObject> = {
  primary: {
    color: theme.colors.buttonWhite,
    backgroundColor: theme.colors.buttonRed,
  },
  secondary: {
    color: theme.colors.buttonRed,
    backgroundColor: 'transparent',
  },
};

/**
 * This helper function takes in the "props" from our button component and returns the appropriate styles
 */
function getButtonTheme(props: Props) {
  if (props.secondary) {
    return buttonTheme.secondary;
  }

  return buttonTheme.primary;
}

export const SimpleButton = styled.button<Props>`
  height: 40px;
  padding: 0 ${theme.space.medium};
  border-radius: ${theme.radii.medium};
  font-size: ${theme.fontSizes.small};
  font-weight: bold;
  font-family: ${theme.fonts.body};
  border: 1px solid ${theme.colors.buttonRed};
  transition: 0.25s ease-in-out;
  cursor: pointer;

  /* With styled-components we can "nest" selectors similar to Sass and other CSS preprocessors, in this case the "&" represents the parent selector which is our button element */
  &:hover {
    background-color: ${theme.colors.purple};
    color: ${theme.colors.buttonWhite};
    border-color: ${theme.colors.purple};
  }

  /* These values of these properties are dependant on the "secondary" boolean prop */
  /* styled-components will pass props implicitly to this function */
  ${getButtonTheme}
`;
