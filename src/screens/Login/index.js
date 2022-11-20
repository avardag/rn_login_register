import * as React from 'react';
import {View, Text} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/Container/CustomButton';
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
      <CustomButton title="Submit" loading={true} disabled={true} secondary />
      <CustomButton title="Click me" secondary loading />
      <CustomButton title="Submit" loading={true} disabled={true} primary />
      <CustomButton title="Submit" danger />
    </Container>
  );
}
