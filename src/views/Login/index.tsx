import React from 'react';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Container,
  InputLogin,
  LoginWrapper,
  Logo,
  InputLabel,
  AuthOptions,
  AuthLink,
  NextStepContainer,
  NextStepButton,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo>Θαλία</Logo>
      <LoginWrapper>
        <AuthOptions>
          <AuthLink active>LOGIN</AuthLink>
          <AuthLink>REGISTER</AuthLink>
        </AuthOptions>
        <InputLabel>Username</InputLabel>
        <InputLogin placeholder="Enter Username" />
        <InputLabel>Password</InputLabel>
        <InputLogin placeholder="Enter Password" autoCompleteType="password" />
        <NextStepContainer>
          <NextStepButton>
            <Text>
              <FontAwesome5 name="arrow-right" size={24} color="white" />
            </Text>
          </NextStepButton>
        </NextStepContainer>
      </LoginWrapper>
    </Container>
  );
};

export default Login;
