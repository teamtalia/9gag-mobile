import { DefaultTheme } from 'styled-components';
import Dark from './Dark';
import Light from './Light';

export interface ThemeInterface {
  bgColor: string;
  primary: string;
  primaryForeground: string;
  primaryDarkenForeground: string;
  navigationBgColor: string;
  navigationForeground: string;
  // color bases
  colorBlue: string;
}

export type ThemeType = 'Dark' | 'Light';

interface ThemeGeneralInterface {
  Dark: DefaultTheme;
  Light?: DefaultTheme;
  default: ThemeType;
}

const Theme: ThemeGeneralInterface = {
  Dark,
  Light,
  default: 'Dark',
};

export default Theme;
