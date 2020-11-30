import React, { useContext, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, ToastAndroid } from 'react-native';
import { ThemeContext } from 'styled-components';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as Google from 'expo-google-app-auth';
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
import useAuth from '../../hooks/useAuth';
import { androidClient } from '../../config/google';

const Signup: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { signIn, signUp, error } = useAuth();
  const navigation = useNavigation();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [fullname, setFullname] = useState<string | undefined>(undefined);

  const handleGoogle = async () => {
    const { type, idToken } = await Google.logInAsync({
      scopes: ['profile', 'email'],
      androidClientId: androidClient,
    });
    if (type === 'success') {
      await signUp({ thirdPartyToken: idToken });
      if (!error) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'home' }],
          }),
        );
      } else {
        console.log('error on signup google: ', error);
      }
    }
  };

  const handleSignup = async () => {
    const errorSignUp = await signUp({ email, fullname, password });
    if (!errorSignUp) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'home' }],
        }),
      );
    } else {
      ToastAndroid.show(errorSignUp, ToastAndroid.LONG);
    }
  };

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
        <FullButtonWithIcon onPress={handleGoogle}>
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
        <InputSignup
          placeholder="Fullname"
          onChangeText={text => setFullname(text)}
        />
        <InputSignup
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <InputSignup
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
      </SignupWrapper>
      <Footer>
        <View>
          <Text underscore>Therms of Service</Text>
          <Text underscore>Privacy Policy</Text>
        </View>
        <Button>
          <ButtonContent onPress={handleSignup}>Next</ButtonContent>
        </Button>
      </Footer>
    </Container>
  );
};

export default Signup;
