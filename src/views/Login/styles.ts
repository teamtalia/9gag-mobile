import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.bgColor};
`;

export const Logo = styled.Text`
  font-family: 'AktivBold';
  font-size: 76px;
  color: #fff;
  margin-bottom: 47px;
`;

export const LoginWrapper = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 304px;
  background-color: #fff;
  border-radius: 28px;
  box-shadow: 0px 7px 22px rgba(0, 0, 0, 0.97);
`;

export const InputLogin = styled.TextInput`
  width: 235px;
  border-radius: 8px;
  background-color: #d8d8d8;
  padding: 11px 10px 8px 15px;
  font-family: 'AktivRegular';
  margin-bottom: 20px;
  &::placeholder {
    color: #222222;
  }
`;

export const InputLabel = styled.Text`
  font-family: 'AktivMedium';
  font-size: 16px;
  width: 225px;
  margin-left: 10px;
  margin-bottom: 6px;
  color: #222;
  opacity: 0.5;
`;

export const AuthOptions = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  margin-bottom: 15px;
`;

interface AuthLinkProps {
  active?: boolean;
}

export const AuthLink = styled.Text<AuthLinkProps>`
  font-size: 22px;
  font-family: 'AktivRegular';
  color: #222222;
  opacity: ${props => (props.active ? 1 : 0.23)};
`;

export const NextStepContainer = styled.View`
  position: absolute;
  bottom: -47px;
  left: 105px;
  width: 94px;
  height: 94px;
  background-color: #fff;
  border-radius: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NextStepButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: #222222;
  border-radius: 32px;
`;
