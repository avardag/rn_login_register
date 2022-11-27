import React, {useEffect, useState} from 'react';
import RegisterComponent from '../../components/Register';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInterceptor';

export default function Register() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance.get('/contacts').catch(err => console.log(err));
  }, []);

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
  };
  return (
    <RegisterComponent
      errors={errors}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

///2.28.20
