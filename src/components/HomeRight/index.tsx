/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import useEventDispatch from '../../hooks/useEventDispatch';

import { Container, Button, SearchInput } from './styles';

const HomeRight: React.FC = () => {
  const [inSearch, setInSearch] = useState(false);
  const toggleSearch = () => {
    setInSearch(ins => !ins);
  };
  const navigator = useNavigation();
  const dispatch = useEventDispatch();

  const theme = useContext(ThemeContext);

  return (
    <Container inSearch={inSearch}>
      <Button onPress={() => toggleSearch()}>
        {!inSearch ? (
          <AntDesign
            name="search1"
            size={16}
            color={theme.navigationForeground}
          />
        ) : (
            <Ionicons
              name="md-arrow-back"
              size={24}
              color={theme.navigationForeground}
            />
          )}
      </Button>
      {inSearch && <SearchInput placeholder="Search post" />}
      {!inSearch && (
        <>
          <Button>
            <Ionicons
              name="md-notifications"
              size={24}
              color={theme.navigationForeground}
            />
          </Button>
          <Button onPress={() => dispatch('modals.header.navigation@open', true)}>
            <FontAwesome
              name="user-circle"
              size={24}
              color={theme.navigationForeground}
            />
          </Button>
        </>
      )}
    </Container>
  );
};

export default HomeRight;
