import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/Container';
import {HOME_NAV, SETTINGS} from '../../constants/routeNames';
import logout from '../../context/actions/auth/logout';
import styles from './styles';

export default function SideMenu({navigation, authDispatch}) {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {text: 'Cancel', onPress: () => {}},
      {text: 'OK', onPress: () => logout()(authDispatch)},
    ]);
  };
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Home',
      onItemPress: () => navigation.navigate(HOME_NAV),
    },
    {
      icon: <Text>P</Text>,
      name: 'Settings',
      onItemPress: () => navigation.navigate(SETTINGS),
    },
    {
      icon: <Text>T</Text>,
      name: 'Logout',
      onItemPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.navImage}
        />
        <View style={styles.menuItemsWrapper}>
          {menuItems.map(({name, icon, onItemPress}) => (
            <TouchableOpacity
              key={name}
              onPress={onItemPress}
              style={styles.menuItem}>
              {icon}
              <Text style={styles.menuItemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
}
