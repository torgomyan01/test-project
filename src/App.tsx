import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { SITE_URL } from './utils/const';
import './App.scss';
import AlertSite from './features/alert/alert';
import Home from './pages/home/home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={SITE_URL.HOME} element={<Home />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <AlertSite />
    </>
  );
}

export default App;
