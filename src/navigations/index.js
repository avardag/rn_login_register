import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
import {GlobalContext} from '../context/Provider';

export default function AppNavContainer() {
  const {authState} = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {authState.isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
