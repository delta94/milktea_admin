import React from 'react';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DashboardLayout from '../layouts/DashboardLayout';
import MainLayout from '../layouts/MainLayout';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from '../views/auth/LoginView';
import NotFoundView from '../views/errors/NotFoundView';
import RegisterView from '../views/auth/RegisterView';
import SettingsView from '../views/settings/SettingsView';
import CustomerListView from '../views/customer/CustomerListView';
import ProductListView from '../views/product/ProductListView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        // path: '/',
        element: <PrivateRoute path='/' component={DashboardView} />,
      },
      {
        path: 'customers',
        element: <PrivateRoute path='customers' component={CustomerListView} />,
      },
      {
        path: 'products',
        element: <PrivateRoute path='products' component={ProductListView} />,
      },
      {
        path: 'settings',
        element: <PrivateRoute path='settings' component={SettingsView} />,
      },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <LoginView /> },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
];

export default routes;
