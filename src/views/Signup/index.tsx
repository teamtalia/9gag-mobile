import React, { useContext } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';
import { ThemeContext } from 'styled-components';
import {
  Container,
  InputSignup,
  SignupWrapper,
  ButtonsContainer,
  Button,
  ButtonContent,
  FullButtonWithIcon,
  Icon,
  Text,
  Footer,
  ButtonFullContent,
} from './styles';

const Signup: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ButtonsContainer>
        <FullButtonWithIcon isFb>
          <>
            <Icon>
              <FontAwesome5 name="facebook-square" size={24} color="white" />
            </Icon>
            <ButtonFullContent textLight>
              Sign in with Facebook
            </ButtonFullContent>
          </>
        </FullButtonWithIcon>
        <FullButtonWithIcon>
          <>
            <Icon>
              <FontAwesome5
                name="google"
                size={24}
                color={theme.primaryDarkenForeground}
              />
            </Icon>
            <ButtonFullContent>Sign in with Google</ButtonFullContent>
          </>
        </FullButtonWithIcon>
      </ButtonsContainer>
      <Text>or</Text>
      <SignupWrapper>
        <InputSignup placeholder="Fullname" />
        <InputSignup placeholder="Email" />
        <InputSignup
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry
        />
      </SignupWrapper>
      <Footer>
        <View>
          <Text underscore>Therms of Service</Text>
          <Text underscore>Privacy Policy</Text>
        </View>
        <Button>
          <ButtonContent>Next</ButtonContent>
        </Button>
      </Footer>
    </Container>
  );
};

export default Signup;
