import { ViewProps, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

interface ContainerProps extends ViewProps {
  inSearch?: boolean;
}
export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-shrink: 1;
  flex-direction: row;
  padding: 0 10px;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: ${({ inSearch }) => (inSearch ? 'flex-start' : 'center')};
  background-color: ${({ inSearch, theme }) =>
    inSearch ? theme.primary : 'transparent'};
  width: ${({ inSearch }) => (inSearch ? Math.ceil(width) : 'auto')};
`;

export const Button = styled.TouchableOpacity`
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding-left: 15px;
`;
