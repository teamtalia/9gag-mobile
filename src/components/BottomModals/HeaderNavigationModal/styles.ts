import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const EndZone = styled.TouchableWithoutFeedback`
  flex: 1;
  background-color: black;
`;

export const ProBadgeContainer = styled.View`
  padding: 2px 5px;
  background: #573501;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const ProBadgeContent = styled.Text`
  color: white;
  font-weight: bold;
  font-family: 'AktivBold';
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const ModalContainer = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  elevation: 5,
})`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
  padding-bottom: 20px;
`;

interface ItemContainerProps extends TouchableOpacityProps {
  isBreak?: boolean;
}
export const ItemContainer = styled.TouchableOpacity<ItemContainerProps>`
  padding: 15px 25px;
  align-items: center;
  height: 65px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: rgba(0, 0, 0, 0.13);
  border-bottom-width: ${({ isBreak }) => (isBreak ? '1px' : '0px')};
`;
export const ItemContent = styled.Text`
  flex: 1;
  padding-left: 50px;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.primaryForeground};
`;
