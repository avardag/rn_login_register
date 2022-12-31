import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

export default function RegisterComponent({
  errors,
  error,
  loading,
  formData,
  onSubmit,
  onChange,
}) {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please register account here</Text>
        {error &&
          Object.keys(error).length > 0 &&
          Object.keys(error).map(objKey => (
            <Message danger onDismiss={() => {}} message={error[objKey]} />
          ))}
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter username"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={errors.username || error?.username?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="First name"
            placeholder="Enter first name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Password"
            placeholder="Enter desired password"
            iconPosition="right"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity onPress={() => setIsSecureEntry(prev => !prev)}>
                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
              </TouchableOpacity>
            }
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            primary
            title="Submit"
            onPress={onSubmit}
            loading={loading}
            disabled={loading}
          />
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
