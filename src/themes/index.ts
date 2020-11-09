import { DefaultTheme } from 'styled-components';
import Dark from './Dark';

export interface ThemeInterface {
  bgColor: string;
}

export type ThemeType = 'Dark' | 'Light';

interface ThemeGeneralInterface {
  Dark: DefaultTheme;
  Light?: DefaultTheme;
  default: ThemeType;
}

const Theme: ThemeGeneralInterface = {
  Dark,
  default: 'Dark',
};

export default Theme;
