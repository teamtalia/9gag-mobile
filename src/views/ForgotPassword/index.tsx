import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';
import {
  Container,
  InputForgot,
  ForgotWrapper,
  Button,
  ButtonContent,
  Footer,
} from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <ForgotWrapper>
        <InputForgot placeholder="Your email address" />
      </ForgotWrapper>
      <Footer>
        <Button>
          <ButtonContent>SEND ME INSTRUCTION</ButtonContent>
        </Button>
      </Footer>
    </Container>
  );
};

export default ForgotPassword;
