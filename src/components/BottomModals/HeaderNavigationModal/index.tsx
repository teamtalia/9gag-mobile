import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';
import React, { useCallback, useContext, useState } from 'react';
import { Modal, Switch, View } from 'react-native';
import { ThemeContext } from 'styled-components';
// import * as Updates from 'expo-updates';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../../App';

import {
  Container,
  ModalContainer,
  ItemContainer,
  ItemContent,
  EndZone,
  ProBadgeContainer,
  ProBadgeContent,
} from './styles';
import useEvent from '../../../hooks/useEvent';
import useAuth from '../../../hooks/useAuth';

interface ItemProps {
  icon: any;
  title: string;
  isBreak?: boolean;
  badge?: any;
  onPress?: any;
}

const Item: React.FC<ItemProps> = ({
  icon,
  title,
  isBreak,
  badge,
  onPress,
}) => {
  return (
    <ItemContainer isBreak={isBreak || false} onPress={onPress}>
      {typeof icon === 'function' && icon()}
      {typeof icon !== 'function' && icon}
      <ItemContent>{title}</ItemContent>
      {badge && typeof icon === 'function' && badge()}
      {badge && typeof icon !== 'function' && badge}
    </ItemContainer>
  );
};

const HeaderNavigationModal: React.FC = () => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const [isClose, setIsClose] = useState(true);
  const { setTheme } = useContext(AppContext);
  const { user, signed, signOut } = useAuth();

  const handleOpen = useCallback(() => {
    setIsClose(false);
  }, [setIsClose]);
  const handleClose = useCallback(() => {
    setIsClose(true);
  }, [setIsClose]);

  useEvent('modals.header.navigation@open', handleOpen);
  useEvent('modals.header.navigation@close', handleClose);

  const config = {
    velocityThreshold: 0.001,
    directionalOffsetThreshold: 25,
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={!isClose}
      onRequestClose={() => {
        setIsClose(true);
      }}
    >
      <GestureRecognizer
        onSwipeDown={() => setIsClose(true)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}
      >
        <EndZone onPress={() => setIsClose(true)}>
          <View style={{ flex: 1 }} />
        </EndZone>
        <Container>
          <ModalContainer>
            {!signed && (
              <Item
                title="Sign in"
                icon={() => (
                  <FontAwesome
                    name="user-circle"
                    size={24}
                    color={theme.navigationForeground}
                  />
                )}
                onPress={() => {
                  navigation.navigate('auth.landing');
                  setIsClose(true);
                }}
              />
            )}
            {signed && (
              <Item
                title={`${user.fullname} (${user.email})`}
                icon={() => (
                  <FontAwesome
                    name="user-circle"
                    size={24}
                    color={theme.navigationForeground}
                  />
                )}
                onPress={() => {
                  // navigation.navigate('auth.landing');
                  setIsClose(true);
                }}
              />
            )}

            <Item
              title="Saved"
              icon={() => (
                <MaterialCommunityIcons
                  name="bookmark-multiple"
                  size={24}
                  color={theme.navigationForeground}
                />
              )}
            />
            <Item
              isBreak
              title="Get Θαλία PRO"
              icon={() => (
                <Ionicons
                  name="md-trophy"
                  size={24}
                  color={theme.navigationForeground}
                />
              )}
              badge={() => (
                <ProBadgeContainer>
                  <ProBadgeContent>PRO</ProBadgeContent>
                </ProBadgeContainer>
              )}
            />
            <Item
              title="Settings"
              icon={() => (
                <MaterialIcons
                  name="settings"
                  size={24}
                  color={theme.navigationForeground}
                />
              )}
            />
            <Item
              isBreak
              title="Send feedback"
              icon={() => (
                <MaterialIcons
                  name="feedback"
                  size={24}
                  color={theme.navigationForeground}
                />
              )}
            />
            <Item
              title="Dark mode"
              icon={() => (
                <Ionicons
                  name="md-moon"
                  size={24}
                  color={
                    theme.name === 'dark'
                      ? 'yellow'
                      : theme.navigationForeground
                  }
                />
              )}
              badge={() => (
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={e => {
                    setTheme(e ? 'dark' : 'light');
                    // Updates.reloadAsync();
                  }}
                  value={theme.name === 'dark'}
                />
              )}
            />
            {signed && (
              <Item
                title="Log out"
                icon={() => (
                  <AntDesign
                    name="logout"
                    size={24}
                    color={theme.navigationForeground}
                  />
                )}
                onPress={async () => {
                  await signOut();
                  setIsClose(true);
                }}
              />
            )}
          </ModalContainer>
        </Container>
      </GestureRecognizer>
    </Modal>
  );
};

export default HeaderNavigationModal;
