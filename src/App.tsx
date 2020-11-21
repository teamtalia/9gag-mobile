/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent, AppLoading } from 'expo';
import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { loadAsync } from 'expo-font';
import Routes from './routes';
import Theme, { ThemeType } from './themes';
import useTheme from './hooks/useTheme';
import EventEmitter from './util/EventEmitter';
import Dark from './themes/Dark';

interface StateAppInterface {
  inSearch: boolean;
}

interface AppContextInterface {
  setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>;
  inSearch: boolean;
  setState?: React.Dispatch<React.SetStateAction<StateAppInterface>>;
}

export const AppContext = createContext<AppContextInterface>({});

const App: React.FC = () => {
  const { theme, setTheme, loaded } = useTheme();
  const [loadedFonts, setLoadedFonts] = useState(false);
  const [state, setState] = useState({
    inSearch: false,
  });

  const { inSearch } = state;

  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({
        AktivRegular: require('../assets/fonts/AktivGroteskCorp-Regular.ttf'),
        AktivBold: require('../assets/fonts/AktivGroteskCorp-Bold.ttf'),
        AktivMedium: require('../assets/fonts/AktivGroteskCorp-Medium.ttf'),
        'bebaes-neue': require('../assets/fonts/BebasNeue-Regular.ttf'),
      });
      setLoadedFonts(true);
    };
    loadFonts();
  }, []);

  if (!loadedFonts || !loaded) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        setTheme,
        inSearch,
        setState,
      }}
    >
      <EventEmitter>
        <ThemeProvider theme={theme}>
          <StatusBar />
          <Routes />
        </ThemeProvider>
      </EventEmitter>
    </AppContext.Provider>
  );
};
export default App;

registerRootComponent(App);
