import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createHashRouter, RouterProvider, useLocation } from 'react-router-dom';

// Admin
import A_Main from './Admin/A_Main';

// Client
import Client_Main from './Clinent/User_Main';

const router = createHashRouter([
  { path: '/', element: <A_Main /> },
  // { path: '/Admin_Dashboard', element: <A_Main /> },
  // { path: '/', element: <Client_Main /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
