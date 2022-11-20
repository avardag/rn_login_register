import * as React from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Container/Input';

export default function Login() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <Container>
      <Input
        onChangeText={onChangeText}
        value={text}
        label="Username"
        icon={<Text>HI</Text>}
        iconPosition="right"
      />
      <Input
        onChangeText={onChangeText}
        value={text}
        label="Password"
        icon={<Text>HI</Text>}
        iconPosition="left"
        error="This field is required"
      />
    </Container>
  );
}
