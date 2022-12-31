import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
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
  const [isSecureEntry, setIsSecureEntry] = useState(true);
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
