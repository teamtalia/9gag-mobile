/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import Routes from './routes';
import Themes, { ThemeType } from './themes';
import Dark from './themes/Dark';

interface AppContextInterface {
  setTheme?: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const AppContext = createContext<AppContextInterface>({});

export default function App() {
  const [theme, setTheme] = useState<ThemeType>(Themes.default);

  const [loadedFonts] = useFonts({
    AktivRegular: require('../assets/fonts/AktivGroteskCorp-Regular.ttf'),
    AktivBold: require('../assets/fonts/AktivGroteskCorp-Bold.ttf'),
    AktivMedium: require('../assets/fonts/AktivGroteskCorp-Medium.ttf'),
  });

  if (!loadedFonts) {
    return null;
  }
  return (
    <AppContext.Provider
      value={{
        setTheme,
      }}
    >
      <ThemeProvider theme={Dark}>
        <StatusBar />
        <Routes />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

registerRootComponent(App);
