import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import {
  Container,
  InputForgot,
  ForgotWrapper,
  Button,
  ButtonContent,
  Footer,
  AlreadyText,
} from './styles';
import useAuth from '../../hooks/useAuth';

const ForgotPassword: React.FC = () => {
  const { sendResetPassword, error, pending } = useAuth();
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleForgotPassword = async () => {
    if (email) {
      const errorResetPassword = await sendResetPassword({ email });
      if (!errorResetPassword) {
        console.log('go next');
        navigation.navigate('auth.reset');
      } else {
        ToastAndroid.show(errorResetPassword, ToastAndroid.LONG);
      }
    }
  };

  return (
    <Container>
      <ForgotWrapper>
        <InputForgot
          placeholder="Your email address"
          onChangeText={text => setEmail(text)}
        />
      </ForgotWrapper>

      <Footer>
        <AlreadyText onPress={() => navigation.navigate('auth.reset')}>
          I already have a code
        </AlreadyText>
        <Button onPress={handleForgotPassword}>
          <ButtonContent>
            {pending ? 'SENDING INSTRUCTION' : 'SEND ME INSTRUCTION'}
          </ButtonContent>
          {pending && (
            <Fontisto
              name="spinner-refresh"
              size={24}
              color="white"
              style={{ marginLeft: 5 }}
            /> // #edit-request:infinity rotate
          )}
        </Button>
      </Footer>
    </Container>
  );
};

export default ForgotPassword;
