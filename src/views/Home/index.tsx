import React, { useContext, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import useSyncMenu from '../../hooks/useSyncMenu';
import BottomModals from '../../components/BottomModals';

const Tab = createMaterialTopTabNavigator();

const Home: React.FC = () => {
  useSyncMenu();

  const theme = useContext(ThemeContext);
  return (
    <Container>
      <BottomModals />
      <Tab.Navigator
        initialRouteName="home.hot"
        tabBarOptions={{
          activeTintColor: theme.navigationForeground,
          indicatorStyle: {
            backgroundColor: '#000',
          },
          labelStyle: { fontSize: 12 },
          style: {
            backgroundColor: theme.navigationBgColor,
          },
        }}
      >
        <Tab.Screen
          name="home.hot"
          component={View}
          options={{ tabBarLabel: 'Hot' }}
        />
        <Tab.Screen
          name="home.trending"
          component={View}
          options={{ tabBarLabel: 'Trending' }}
        />
        <Tab.Screen
          name="home.fresh"
          component={View}
          options={{ tabBarLabel: 'Fresh' }}
        />
        <Tab.Screen
          name="home.boards"
          component={View}
          options={{ tabBarLabel: 'Boards' }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default Home;
