import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  InputLogin,
  LoginWrapper,
  ButtonsContainer,
  Button,
  ButtonContent,
  FullButtonWithIcon,
  Icon,
  Text,
  Footer,
  ButtonFullContent,
} from './styles';

const Login: React.FC = () => {
  const navigator = useNavigation();

  return (
    <Container>
      <ButtonsContainer>
        <FullButtonWithIcon isFb>
          <>
            <Icon>
              <FontAwesome5 name="facebook-square" size={24} color="white" />
            </Icon>
            <ButtonFullContent>Sign in with Facebook</ButtonFullContent>
          </>
        </FullButtonWithIcon>
        <FullButtonWithIcon>
          <>
            <Icon>
              <FontAwesome5 name="google" size={24} color="white" />
            </Icon>
            <ButtonFullContent>Sign in with Google</ButtonFullContent>
          </>
        </FullButtonWithIcon>
      </ButtonsContainer>
      <Text>or</Text>
      <LoginWrapper>
        <InputLogin placeholder="Enter Username" />
        <InputLogin placeholder="Enter Password" autoCompleteType="password" />
      </LoginWrapper>
      <Footer>
        <Text onPress={() => navigator.navigate('auth.forgot')}>
          Forgot password?
        </Text>
        <Button>
          <ButtonContent>Log in</ButtonContent>
        </Button>
      </Footer>
    </Container>
  );
};

export default Login;
