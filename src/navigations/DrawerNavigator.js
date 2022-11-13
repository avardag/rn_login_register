import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAV} from '../constants/routeNames';

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    // <Drawer.Navigator screenOptions={{ headerShown: false }} >
    <Drawer.Navigator>
      <Drawer.Screen
        name={HOME_NAV}
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
