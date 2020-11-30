import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { Appearance } from 'react-native-appearance';
import Themes, { ThemeType } from '../themes';
import { getDataString } from './useGetData';
import { storeString } from './useStoreData';

export interface UseThemeResponse {
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  theme: DefaultTheme;
  loaded: boolean;
}

const useTheme = (): UseThemeResponse => {
  const colorScheme = Appearance.getColorScheme();
  const [themeStorage, setThemeStorage] = useState<any>(
    colorScheme || Themes.default,
  );

  const [loaded, setLoaded] = useState(false);

  const [theme, setTheme] = useState<ThemeType>(
    // eslint-disable-next-line
    themeStorage,
  );

  useEffect(() => {
    const load = async () => {
      const { data } = await getDataString('theme');
      if (data) {
        setThemeStorage(data);
      }
      setLoaded(true);
    };
    load();
  }, []);

  useEffect(() => {
    if (themeStorage !== theme) {
      setTheme(themeStorage);
    }
  }, [themeStorage]);

  useEffect(() => {
    if (theme) {
      const load = async () => {
        const { error } = await storeString('theme', theme);
      };
      load();
    }
  }, [theme]);

  return {
    theme: Themes[theme],
    setTheme,
    loaded,
  };
};

export default useTheme;
