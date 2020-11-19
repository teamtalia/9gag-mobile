/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent, AppLoading } from 'expo';
import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { loadAsync, useFonts } from 'expo-font';
import Routes from './routes';
import { ThemeType } from './themes';
import useTheme from './hooks/useTheme';

interface AppContextInterface {
  setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const AppContext = createContext<AppContextInterface>({});

const App: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [loadedFonts, setLoadedFonts] = useState(false);

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

  if (!loadedFonts) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        setTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Routes />
      </ThemeProvider>
    </AppContext.Provider>
  );
};
export default App;

registerRootComponent(App);
