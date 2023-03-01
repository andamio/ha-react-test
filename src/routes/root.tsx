import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '../components/layout';

export const Root: FC = () => {
  return (
    <Layout
      // This is a placeholder for now, we'll pass in a real component later!
      sidebarContent='Sidebar content'
      // The Outlet from react-router will render our child route content here based on what we define in our Router instance in main.tsx
      mainContent={<Outlet />}
    />
  );
};
