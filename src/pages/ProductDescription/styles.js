import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;
export const BoxImageProduct = styled.View`
  background: #7239f2;
  height: 60%;
  margin-top: auto;
`;
export const ContainerBox = styled.View`
  margin-top: auto;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 60%;
`;
export const BoxProduct = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
  justifyContent: 'center',
})`
  align-self: stretch;
`;

export const NameProduct = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

export const TitleInfo = styled.Text`
  font-size: 10px;
  color: #7f8c8d;
`;

export const ButtonBack = styled(RectButton)`
  height: 46px;
  background: #000;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextBack = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
