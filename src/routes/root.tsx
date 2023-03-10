import { TabPanel } from '@reach/tabs';
import { FC } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout';
import { Tabs } from '../components/tabs';

const tabItems = [
  { title: 'Daily', path: '/' },
  { title: 'Hourly', path: '/hourly' },
  { title: 'Settings', path: '/settings' },
  { title: 'useMemo Demonstration', path: '/usememo' },
];

export const Root: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Keep track of the current tab index based on the active pathname
  const currentIndex = tabItems.findIndex(
    (item) => item.path === location.pathname
  );

  // Navigate to the route matching the tab index
  const handleTabChange = (index: number) => {
    navigate(tabItems[index].path);
  };

  return (
    <>
      <Layout
        // This is a placeholder for now, we'll pass in a real component later!
        sidebarContent='Sidebar content'
        // The Outlet from react-router will render our child route content here based on what we define in our Router instance in main.tsx
        mainContent={
          <Tabs
            index={currentIndex}
            onChange={handleTabChange}
            items={tabItems}
            panels={
              <TabPanel index={currentIndex}>
                <Outlet />
              </TabPanel>
            }
          />
        }
      />
    </>
  );
};
