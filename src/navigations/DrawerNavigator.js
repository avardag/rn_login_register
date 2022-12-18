import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAV} from '../constants/routeNames';
import {Image, SafeAreaView} from 'react-native';
import Container from '../components/common/Container';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/Provider';

const getDrawerContent = (navigation, authDispatch) => (
  <SideMenu navigation={navigation} authDispatch={authDispatch} />
);

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = React.useContext(GlobalContext);
  return (
    // <Drawer.Navigator screenOptions={{ headerShown: false }} >
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen
        name={HOME_NAV}
        component={HomeNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
