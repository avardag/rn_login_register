import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

export default function RegisterComponent() {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please register account here</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter username"
            iconPosition="right"
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            iconPosition="right"
          />
          <Input
            label="First name"
            placeholder="Enter first name"
            iconPosition="right"
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            iconPosition="right"
          />
          <Input
            label="Password"
            placeholder="Enter desired password"
            secureTextEntry
            iconPosition="right"
            icon={<Text>Show</Text>}
          />
          <Input
            label="Confirm Password"
            placeholder="Enter password again"
            secureTextEntry
            iconPosition="right"
            icon={<Text>Show</Text>}
          />
          <CustomButton primary title="Submit" />
          <View style={styles.noAccountSection}>
            <Text style={styles.infoText}>Already registered?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
