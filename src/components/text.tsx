import styled, { CSSObject } from 'styled-components';
import { theme } from '../theme';

/**
 * We provide three different props to control the presentation of our text and we lean on TypeScript to only allow us to pick color, size, and weight values from our theme file!
 */
interface Props {
  textColor?: keyof typeof theme.colors;
  textSize?: keyof typeof theme.fontSizes;
  textWeight?: keyof typeof theme.fontWeights;
}

/** This function takes our props passed in to our component and returns the matching values from our theme */
function getThemeProperties(props: Props): CSSObject {
  return {
    color: theme.colors[props.textColor || 'bodyTextColor'],
    fontSize: theme.fontSizes[props.textSize || 'default'],
    fontWeight: theme.fontWeights[props.textWeight || 'regular'],
  };
}

/**
 * Our Text component defaults to a paragraph tag, but remember we can override this using the "as" prop later on if needed
 */
export const Text = styled.p<Props>`
  font-family: ${theme.fonts.body};
  line-height: 2;

  /* We're using the same pattern as our button component, this function is called with the props we provide to our component and we return the styles we'd like to use based on those props */
  /*
    This approach is cleaner and less repetitive than accessing the props inline which would look like:
    color: ${(props) =>
      theme.colors[props.textColor || 'bodyTextColor']}; and so on...
  */
  ${getThemeProperties}
`;
