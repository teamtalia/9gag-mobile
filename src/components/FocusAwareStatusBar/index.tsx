/* eslint-disable react/prop-types */
import * as React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

interface FocusAwareStatusBarProps {
  color?: string;
  barStyle?: string;
}

const FocusAwareStatusBar: React.FC<FocusAwareStatusBarProps> = ({
  color,
  barStyle,
}) => {
  const isFocused = useIsFocused();
  const theme = React.useContext(ThemeContext);

  return isFocused ? (
    <StatusBar
      backgroundColor={color || theme.navigationBgColor}
      barStyle={
        barStyle || theme.name === 'dark' ? 'light-content' : 'dark-content'
      }
    />
  ) : null;
};

export default FocusAwareStatusBar;
