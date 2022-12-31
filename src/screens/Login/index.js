import React, {useState, useContext, useCallback, useEffect} from 'react';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import LoginComponent from '../../components/Login';
import {GlobalContext} from '../../context/Provider';
import login from '../../context/actions/auth/login';
import {clearAuthState} from '../../context/actions/auth/register';

export default function Login() {
  const [formData, setFormData] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setFormData({...formData, username: params.data.username});
      setJustSignedUp(true);
    }
  }, [params, formData]);

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
    setJustSignedUp(false);
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
      justSignedUp={justSignedUp}
    />
  );
}
