import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@reach/tabs';
import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledTabs = styled(Tabs)`
  width: 100%;
`;

export const StyledTabList = styled(TabList)`
  background-color: transparent;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.lightBorder};
`;

export const StyledTab = styled(Tab)`
  padding: 0;
  height: 40px;
  min-width: 100px;
  border-bottom: 4px solid transparent;
  text-align: center;
  font-weight: ${theme.fontWeights.bold};
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.default};

  &:focus-visible {
    background-color: ${theme.colors.overlayBackground};
  }

  &[data-selected] {
    border-bottom-color: ${theme.colors.buttonRed};
  }
`;
