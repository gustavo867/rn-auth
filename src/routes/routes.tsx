import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthRoutes from './auth.routes';
import { State } from '../redux/types';
import AppRoutes from './app.routes.';

const Routes: React.FC = () => {
  const signed = useSelector((state: State) => state.user.signed);

  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
