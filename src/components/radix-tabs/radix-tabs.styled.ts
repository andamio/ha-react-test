import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledTabs = styled(Tabs.Root)`
  width: 100%;
`;

export const StyledTabList = styled(Tabs.List)`
  background-color: transparent;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.lightBorder};
`;

export const StyledTab = styled(Tabs.Trigger)`
  padding: 0;
  height: 40px;
  min-width: 100px;
  border-bottom: 4px solid transparent;
  text-align: center;
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.default};
  background-color: transparent;
  border: 0;
  color: ${theme.colors.textLight};
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid ${theme.colors.lightGrey};
    background-color: ${theme.colors.overlayBackground};
  }

  &[data-state="active"] {
    background-color: ${theme.colors.overlayBackground};
  }
`;
