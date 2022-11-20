import * as React from 'react';
import {View, Text} from 'react-native';
import LoginComponent from '../../components/Login';

export default function Login() {
  const [text, onChangeText] = React.useState('Useless Text');
  return <LoginComponent />;
}
