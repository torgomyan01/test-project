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
import PageNotFound from './pages/404/404';
import AlertSite from './features/alert/alert';
import Home from './pages/home/home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={SITE_URL.HOME} element={<Home />}>
          <Route path="*" element={<PageNotFound />} />
        </Route>
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
