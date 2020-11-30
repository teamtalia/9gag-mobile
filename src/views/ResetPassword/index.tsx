import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {
  Container,
  InputForgot,
  ForgotWrapper,
  Button,
  ButtonContent,
  Footer,
} from './styles';
import useAuth from '../../hooks/useAuth';

const ResetPassword: React.FC = () => {
  const { resetPassword, error } = useAuth();
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = async () => {
    if (code && password && passwordConfirm) {
      const { error: errorResetPassword, message } = await resetPassword({
        code,
        password,
        passwordConfirm,
      });
      if (!errorResetPassword) {
        ToastAndroid.show(message, ToastAndroid.LONG);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'home' }],
          }),
        );
      } else {
        ToastAndroid.show(errorResetPassword, ToastAndroid.LONG);
      }
    }
  };

  return (
    <Container>
      <ForgotWrapper>
        <InputForgot
          placeholder="Reset Password Code"
          onChangeText={text => setCode(text)}
        />
        <InputForgot
          placeholder="New Password"
          onChangeText={text => setPassword(text)}
        />

        <InputForgot
          placeholder="New Password Confirm"
          onChangeText={text => setPasswordConfirm(text)}
        />
      </ForgotWrapper>
      <Footer>
        <Button onPress={handleResetPassword}>
          <ButtonContent>Change Password</ButtonContent>
        </Button>
      </Footer>
    </Container>
  );
};

export default ResetPassword;
