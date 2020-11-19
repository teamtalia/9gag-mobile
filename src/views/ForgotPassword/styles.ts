import { darken } from 'polished';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.primary};
`;

interface ButtonProps extends TouchableOpacityProps {
  isFb?: boolean;
}
export const Button = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  padding: 0 20px;
  height: 45px;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  background-color: ${({ theme }) => theme.colorBlue};
  border-radius: 4px;
`;

export const ButtonContent = styled.Text`
  color: white;
  font-family: 'AktivRegular';
  font-size: 16px;
  align-items: center;
  justify-content: center;
`;

export const ForgotWrapper = styled.View`
  margin: 15px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
`;

export const InputForgot = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.primaryDarkenForeground,
}))`
  width: 95%;
  border-radius: 0;
  background-color: ${({ theme }) => darken(0.02, theme.primary)};
  padding: 11px 10px 8px 15px;
  font-family: 'AktivRegular';
  color: #fff;
  margin-bottom: 15px;
`;
export const Footer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 98%;
  height: 45px;
  padding: 0 10px;
`;
