import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';

const HeaderBack: React.FC = () => {
  const navigate = useNavigation();
  const theme = useContext(ThemeContext);
  return (
    <Container onPressIn={() => navigate.goBack()}>
      <Ionicons
        name="md-arrow-round-back"
        size={24}
        color={theme.navigationForeground}
        style={{
          marginLeft: 15,
        }}
      />
    </Container>
  );
};

export default HeaderBack;
