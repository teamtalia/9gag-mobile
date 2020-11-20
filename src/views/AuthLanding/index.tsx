import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';

const AuthLanding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <FocusAwareStatusBar color="#000" barStyle="light-content" />

      <Image source={logo} style={{ width: 120, height: 120 }} />
      <Heading>Exclusive for Θαλία users</Heading>
      <SubHeading>Join us and have fun together!</SubHeading>
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
        <FooterText onPress={() => navigation.goBack()}>Not now</FooterText>
      </Footer>
    </Container>
  );
};

export default AuthLanding;
