import { darken, lighten } from 'polished';
import { TouchableHighlightProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.primary};
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 20px 10px 20px;
  align-items: center;
`;
interface ButtonProps extends TouchableHighlightProps {
  isFb?: boolean;
}
export const Button = styled.TouchableHighlight<ButtonProps>`
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  width: 80px;
  height: 45px;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  background-color: ${({ theme }) => lighten(0.05, theme.primary)};
  border-radius: 4px;
`;

// eslint-disable-next-line prettier/prettier
export const FullButtonWithIcon = styled(Button)`
  flex-direction: row;
  width: 95%;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, isFb }) =>
    isFb ? theme.colorBlue : theme.bgColor};
`;
export const Icon = styled.View`
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  min-width: 50px;
  margin-right: 15px;
`;

export const ButtonContent = styled.Text`
  color: ${({ theme }) => theme.primaryForeground};
  font-family: 'AktivRegular';
  font-size: 16px;
  align-items: center;
  justify-content: center;
`;
export const ButtonFullContent = styled(ButtonContent)`
  flex: 1;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.primaryDarkenForeground};
  font-size: 16px;
  font-family: 'AktivRegular';
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Text`
  font-family: 'AktivBold';
  font-size: 76px;
  color: #fff;
  margin-bottom: 47px;
`;

export const LoginWrapper = styled.View`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 100%;
`;

export const InputLogin = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.primaryDarkenForeground,
}))`
  width: 95%;
  border-radius: 8px;
  background-color: ${({ theme }) => darken(0.02, theme.primary)};
  padding: 11px 10px 8px 15px;
  font-family: 'AktivRegular';
  color: #fff;
  margin-bottom: 20px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: red;
  }
  :-ms-input-placeholder {
    color: red;
  }
`;
export const Footer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  height: 45px;
  padding: 0 10px;
`;
