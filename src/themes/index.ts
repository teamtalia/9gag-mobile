import { DefaultTheme } from 'styled-components';
import dark from './Dark';
import light from './Light';

export interface ThemeInterface {
  bgColor: string;
  primary: string;
  primaryForeground: string;
  primaryDarkenForeground: string;
  navigationBgColor: string;
  navigationForeground: string;
  // color bases
  colorBlue: string;

  // socialNetWorkColors
  fbColor: string;
}

export type ThemeType = 'dark' | 'light';

interface ThemeGeneralInterface {
  dark: DefaultTheme;
  light: DefaultTheme;
  default: ThemeType;
}

const Theme: ThemeGeneralInterface = {
  dark,
  light,
  default: 'light',
};

export default Theme;
