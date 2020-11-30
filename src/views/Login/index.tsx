import React, { useContext, useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
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
import useAuth from '../../hooks/useAuth';
import { androidClient } from '../../config/google';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const { signIn, error, user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    Facebook.initializeAsync('441714206821575', 'Talia');
    Facebook.setAutoLogAppEventsEnabledAsync(true);
  }, []);

  const handleFacebook = async () => {
    const data = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['email'],
    })
      .then(res => res)
      .catch(err => console.log('erro: ', err));
  };

  const handleGoogle = async () => {
    const { type, idToken } = await Google.logInAsync({
      scopes: ['profile', 'email'],
      androidClientId: androidClient,
    });
    if (type === 'success') {
      const errorSignIn = await signIn({ thirdPartyToken: idToken });
      if (!errorSignIn) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'home' }],
          }),
        );
      } else {
        ToastAndroid.show(errorSignIn, ToastAndroid.LONG);
      }
    }
  };

  const handleLogin = async () => {
    const errorSignIn = await signIn({ email, password });
    if (!errorSignIn) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'home' }],
        }),
      );
    } else {
      ToastAndroid.show(errorSignIn, ToastAndroid.LONG);
    }
  };

  const navigator = useNavigation();
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ButtonsContainer>
        <FullButtonWithIcon isFb onPress={handleFacebook}>
          <>
            <Icon>
              <FontAwesome5 name="facebook-square" size={24} color="white" />
            </Icon>
            <ButtonFullContent textLight>
              Sign in with Facebook
            </ButtonFullContent>
          </>
        </FullButtonWithIcon>
        <FullButtonWithIcon onPress={handleGoogle}>
          <>
            <Icon>
              <FontAwesome5
                name="google"
                size={24}
                color={theme.primaryForeground}
              />
            </Icon>
            <ButtonFullContent>Sign in with Google</ButtonFullContent>
          </>
        </FullButtonWithIcon>
      </ButtonsContainer>
      <Text>or</Text>
      <LoginWrapper>
        <InputLogin
          placeholder="Enter Email"
          autoCompleteType="email"
          onChangeText={text => setEmail(text)}
        />
        <InputLogin
          placeholder="Enter Password"
          autoCompleteType="password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </LoginWrapper>
      <Footer>
        <Text onPress={() => navigator.navigate('auth.forgot')}>
          Forgot password?
        </Text>
        <Button>
          <ButtonContent onPress={handleLogin}>Log in</ButtonContent>
        </Button>
      </Footer>
    </Container>
  );
};

export default Login;
