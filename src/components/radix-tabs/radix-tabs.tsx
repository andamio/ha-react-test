import * as Tabs from '@radix-ui/react-tabs';
import { StyledTabs, StyledTab, StyledTabList } from './radix-tabs.styled';

export const RadixTabs = () => {
  return (
    <StyledTabs defaultValue='tab1' orientation='vertical'>
      <StyledTabList aria-label='tabs example'>
        <StyledTab value='tab1'>One</StyledTab>
        <StyledTab value='tab2'>Two</StyledTab>
        <StyledTab value='tab3'>Three</StyledTab>
      </StyledTabList>
      <Tabs.Content value='tab1'>Tab one content</Tabs.Content>
      <Tabs.Content value='tab2'>Tab two content</Tabs.Content>
      <Tabs.Content value='tab3'>Tab three content</Tabs.Content>
    </StyledTabs>
  );
};
