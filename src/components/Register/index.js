import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

export default function RegisterComponent({
  errors,
  formData,
  onSubmit,
  onChange,
}) {
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
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={errors.username}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="First name"
            placeholder="Enter first name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Password"
            placeholder="Enter desired password"
            secureTextEntry
            iconPosition="right"
            icon={<Text>Show</Text>}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton primary title="Submit" onPress={onSubmit} />
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
