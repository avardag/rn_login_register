import React, {useContext, useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import RegisterComponent from '../../components/Register';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';

export default function Register() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();

  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data, navigate]);

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
    // if (formData[name] !== '') {
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => ({
            ...prev,
            [name]: 'password must be at least 6 chars',
          }));
        } else {
          setErrors(prev => ({...prev, [name]: null}));
        }
      } else {
        setErrors(prev => ({...prev, [name]: null}));
      }
    } else {
      setErrors(prev => ({...prev, [name]: 'This field is required'}));
    }
  };
  const onSubmit = () => {
    //validations
    if (!formData.username) {
      setErrors(prev => ({...prev, username: 'Please add username'}));
    }
    if (!formData.email) {
      setErrors(prev => ({...prev, email: 'Please add email'}));
    }
    if (!formData.lastName) {
      setErrors(prev => ({...prev, lastName: 'Please add last name'}));
    }
    if (!formData.firstName) {
      setErrors(prev => ({...prev, firstName: 'Please add first name'}));
    }
    if (!formData.password) {
      setErrors(prev => ({...prev, password: 'Please add password'}));
    }
    //check if any of values are empty
    if (
      Object.values(formData).length === 5 &&
      Object.values(formData).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(formData)(authDispatch);
    }
  };
  return (
    <RegisterComponent
      error={error}
      loading={loading}
      errors={errors}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

///2.28.20
