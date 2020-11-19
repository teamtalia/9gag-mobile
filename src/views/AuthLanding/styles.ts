import styled from 'styled-components/native';
import { darken } from 'polished';
import { TouchableHighlightProps } from 'react-native';

export const Container = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgColor};
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.primaryForeground};
  font-size: 24px;
  margin: 15px auto;
  font-weight: 400;
`;
export const SubHeading = styled.Text`
  color: ${({ theme }) => darken(0.4, theme.primaryForeground)};
  font-size: 14px;
`;

export const WrapperButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 80%;
`;

interface PropsButton extends TouchableHighlightProps {
  isBlue?: boolean;
}
export const WrapperButton = styled.TouchableHighlight<PropsButton>`
  margin: 0;
  height: 40px;
  width: 100px;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isBlue }) =>
    !isBlue ? theme.primary : theme.colorBlue};
  border-radius: 2px;
`;

export const ButtonContent = styled.Text`
  color: ${({ theme }) => theme.primaryForeground};
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.primaryDarkenForeground};
`;
