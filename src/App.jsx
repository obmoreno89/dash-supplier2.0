import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import StateProvider from './context/StateProvider';

import './css/style.scss';

import './charts/ChartjsConfig';

//ROUTES PRIVATE AND PUBLIC
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

// Import pages
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/utility/PageNotFound';
//LOGIN
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import MultiStepForm01 from './pages/MultiStepForm01';

import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';

import TabsPage from './pages/component/TabsPage';

import BadgePage from './pages/component/BadgePage';

import TooltipPage from './pages/component/TooltipPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <StateProvider>
      <Routes>
        {/* Dashboard */}
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Auth */}
        <Route
          path='/signin'
          element={
            <PublicRoute>
              <Signin />
            </PublicRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path='/reset-password'
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />
        <Route
          path='/step01'
          element={
            <PublicRoute>
              <MultiStepForm01 />
            </PublicRoute>
          }
        />

        {/* Vista previa de Componentes */}
        <Route path='/component/form' element={<FormPage />} />
        <Route path='/component/dropdown' element={<DropdownPage />} />
        <Route path='/component/alert' element={<AlertPage />} />
        <Route path='/component/modal' element={<ModalPage />} />
        <Route path='/component/tabs' element={<TabsPage />} />
        <Route path='/component/badge' element={<BadgePage />} />
        <Route path='/component/tooltip' element={<TooltipPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </StateProvider>
  );
}

export default App;
