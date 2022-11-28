import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

export default function LoginComponent({
  error,
  loading,
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
        <Text style={styles.subTitle}>Please log in here</Text>
        {error &&
          Object.keys(error).length > 0 &&
          Object.keys(error).map(objKey => (
            <Message
              danger
              onDismiss={() => {}}
              message={error[objKey]}
              key={objKey}
            />
          ))}
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter username"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            iconPosition="right"
            icon={<Text>Q</Text>}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton
            primary
            title="Submit"
            onPress={onSubmit}
            disabled={loading}
            loading={loading}
          />
          <View style={styles.noAccountSection}>
            <Text style={styles.infoText}>Dont have account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
}
