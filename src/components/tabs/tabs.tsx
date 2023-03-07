import { FC, ReactNode } from 'react';
import '@reach/tabs/styles.css';
import { StyledTab, StyledTabList, StyledTabs } from './tabs.styled';
import { TabPanel, TabPanels } from '@reach/tabs';

/**
 * Each tab object represents the text of the tab shown as well as the contents displayed when that tab is active
 */
type Tab = {
  title: string;
  content: ReactNode;
};

interface Props {
  /**
   * An array of Tab objects which in turn get rendered inside our Tabs component
   */
  items: Tab[];
  /**
   * The current index or tab that is selected, this property allows us to control our tabs component from "outside"
   */
  index?: number;
  /**
   * Similar to our index prop above, this onChange function when passed in allows us to react to changes from within the tabs component on the outside
   */
  onChange?: (index: number) => void;

  /**
   * Override to allow us to return custom content within the TabPanels wrapper
   */
  panels?: ReactNode;
}

export const Tabs: FC<Props> = (props) => {
  return (
    <StyledTabs index={props.index} onChange={props.onChange}>
      <StyledTabList>
        {props.items.map((tab) => (
          <StyledTab key={tab.title}>{tab.title}</StyledTab>
        ))}
      </StyledTabList>
      <TabPanels>
        {props.panels
          ? // If the panels prop is being passed in, return them here
            props.panels
          : // Otherwise carry on iterating over our items
            props.items.map((tab) => (
              <TabPanel key={tab.title}>{tab.content}</TabPanel>
            ))}
      </TabPanels>
    </StyledTabs>
  );
};
