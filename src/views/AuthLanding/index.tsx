import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';

import {
  WrapperButton,
  ButtonContent,
  Container,
  Heading,
  SubHeading,
  WrapperButtons,
  Footer,
  FooterText,
} from './styles';
import logo from '../../../assets/images/talia-icon-white.png';

const AuthLanding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={logo} style={{ width: 120, height: 120 }} />
      <Heading>Exclusive for Θαλία users</Heading>
      <SubHeading>Join us and have fung together!</SubHeading>
      <WrapperButtons>
        <WrapperButton
          isBlue
          onPress={() => navigation.navigate('auth.signup')}
        >
          <ButtonContent>SIGN UP</ButtonContent>
        </WrapperButton>
        <WrapperButton onPress={() => navigation.navigate('auth.login')}>
          <ButtonContent>LOG IN</ButtonContent>
        </WrapperButton>
      </WrapperButtons>
      <Footer>
        <FooterText>Not now</FooterText>
      </Footer>
    </Container>
  );
};

export default AuthLanding;
