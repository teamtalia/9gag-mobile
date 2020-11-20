/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-indent */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from 'styled-components';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Container, ContainerMenu } from './styles';
import Home from '../Home';
import useEvent from '../../hooks/useEvent';

const Drawer = createDrawerNavigator();

export const HomeLeft = () => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEvent('menu@open', handleOpenMenu);
  useEvent('menu@close', handleCloseMenu);

  return (
    <ContainerMenu
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      {!isOpen ? (
        <Entypo
          name="menu"
          size={24}
          color={theme.navigationForeground}
          style={{
            marginLeft: 15,
          }}
        />
      ) : (
          <AntDesign
            name="close"
            size={24}
            color={theme.navigationForeground}
            style={{
              marginLeft: 15,
            }}
          />
        )}
    </ContainerMenu>
  );
};

const Menu: React.FC = () => {
  return (
    <Container>
      <Drawer.Navigator>
        <Drawer.Screen
          name="@home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        {/* <Drawer.Screen name="Article" component={Article} /> */}
      </Drawer.Navigator>
    </Container>
  );
};

export default Menu;
