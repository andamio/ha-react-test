import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reset } from './reset';
import { Root } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <>daily</>,
      },
      {
        path: '/hourly',
        element: <>hourly</>,
      },
      {
        path: '/settings',
        element: <>settings</>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <RouterProvider router={router} />
  </React.StrictMode>
);
