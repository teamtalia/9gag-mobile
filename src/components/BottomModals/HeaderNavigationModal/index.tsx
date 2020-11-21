import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React, { useCallback, useContext, useState } from 'react';
import { Modal } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { ThemeContext } from 'styled-components';
import * as Updates from 'expo-updates';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../../App';

import {
  Container,
  ModalContainer,
  ItemContainer,
  ItemContent,
} from './styles';
import useEvent from '../../../hooks/useEvent';

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

  const handleOpen = useCallback(() => {
    setIsClose(false);
  }, [setIsClose]);
  const handleClose = useCallback(() => {
    setIsClose(true);
  }, [setIsClose]);

  useEvent('modals.header.navigation@open', handleOpen);
  useEvent('modals.header.navigation@close', handleClose);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={!isClose}
      onRequestClose={() => {
        setIsClose(true);
      }}
    >
      <Container>
        <ModalContainer>
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
                color={theme.navigationForeground}
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
        </ModalContainer>
      </Container>
    </Modal>
  );
};

export default HeaderNavigationModal;
