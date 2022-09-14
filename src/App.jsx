import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import StateProvider from './context/StateProvider';

import './css/style.scss';

import './charts/ChartjsConfig';

//ROUTES PRIVATE AND PUBLIC
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import PrivateCodeValidation from './routes/PrivateCodeValidation';
import PrivateMultistepForm from './routes/PrivateMultistepForm';
import PrivateSignup from './routes/PrivateSignup';

// Import pages
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/utility/PageNotFound';
//LOGIN
import Signin from './pages/Signin';
import Signup from './pages/Signup';
//RESET PASSWORD
import ResetPassword from './pages/ResetPassword';
//PHONE CODE GENERATOR
import PhoneCodeGenerator from './pages/PhoneCodeGenerator';
//CODE VALIDATION
import ValidationCode from './pages/ValidationCode';
//MULTI STEP FORM
import MultiStepForm from './pages/MultiStepForm';
import MultiStepFormEnd from './pages/MultiStepFormEnd';
//MODULE PRODUCTS
import ProductCreate from './partials/products/ProductCreate';
import ProductList from './partials/products/ProductList';
//MODULE PLANT
import PlantCreate from './partials/plant/PlantCreate';
import PlantList from './partials/plant/PlantList';
import PlantUpdate from './partials/plant/PlantUpdate';
//MODULE COMPANY
import Profile from './partials/company/Profile';

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
          path='/code/generator'
          element={
            <PublicRoute>
              <PhoneCodeGenerator />
            </PublicRoute>
          }
        />
        <Route
          exact
          path='/code/validation'
          element={
            <PrivateCodeValidation>
              <ValidationCode />
            </PrivateCodeValidation>
          }
        />

        <Route
          path='/signup'
          element={
            <PrivateSignup>
              <Signup />
            </PrivateSignup>
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
        <Route path='/multiStep' element={<MultiStepForm />} />
        <Route
          path='/multiStep/end'
          element={
            <PrivateMultistepForm>
              <MultiStepFormEnd />
            </PrivateMultistepForm>
          }
        />
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
        {/* Products */}
        <Route
          exact
          path='/products/create'
          element={
            <PrivateRoute>
              <ProductCreate />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/products/list'
          element={
            <PrivateRoute>
              <ProductList />
            </PrivateRoute>
          }
        />
        {/* Plant */}
        <Route
          exact
          path='/plant/create'
          element={
            <PrivateRoute>
              <PlantCreate />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/plant/list'
          element={
            <PrivateRoute>
              <PlantList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/plant/update/:id'
          element={
            <PrivateRoute>
              <PlantUpdate />
            </PrivateRoute>
          }
        />
        {/* company */}
        <Route
          exact
          path='/company/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
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
