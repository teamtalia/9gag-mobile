import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { Appearance } from 'react-native-appearance';
import Themes, { ThemeType } from '../themes';

export interface UseThemeResponse {
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  theme: DefaultTheme;
}

const useTheme = (): UseThemeResponse => {
  const [theme, setTheme] = useState<ThemeType>(
    // eslint-disable-next-line
    Appearance.getColorScheme() | Themes.default,
  );
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      // eslint-disable-next-line
      setTheme(colorScheme);
    });
    return () => {
      subscription.remove();
    };
  }, []);
  return {
    theme: Themes[theme] || Themes.light,
    setTheme,
  };
};

export default useTheme;
