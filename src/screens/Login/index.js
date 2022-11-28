import React, {useState, useContext, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import LoginComponent from '../../components/Login';
import {GlobalContext} from '../../context/Provider';
import login from '../../context/actions/auth/login';
import {clearAuthState} from '../../context/actions/auth/register';

export default function Login() {
  const [formData, setFormData] = useState({});
  const {navigate} = useNavigation();

  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error, authDispatch]),
  );

  const onChange = ({name, value}) => {
    setFormData({...formData, [name]: value});
  };
  const onSubmit = () => {
    if (formData.username && formData.password) {
      login(formData)(authDispatch);
    }
  };
  return (
    <LoginComponent
      error={error}
      loading={loading}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}
