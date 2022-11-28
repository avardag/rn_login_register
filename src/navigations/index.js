import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

export default function AppNavContainer() {
  const {authState} = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authCheckCompleted, setAuthCheckCompleted] = useState(false);

  async function getUserFromStorage() {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsAuthenticated(true);
        setAuthCheckCompleted(true);
      } else {
        setIsAuthenticated(false);
        setAuthCheckCompleted(true);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getUserFromStorage();
  }, []);

  if (!authCheckCompleted) {
    return <ActivityIndicator style={{flex: 1}} size="large" />;
  }
  return (
    <NavigationContainer>
      {authState.isLoggedIn || isAuthenticated ? (
        <DrawerNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
}
