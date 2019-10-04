import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #fff;
  border-top-left-radius: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ListCards = styled.View`
  flex: 1;
`;

export const TitleBox = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  margin-left: 20px;
  font-size: 24px;
  color: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paadding: 10 },
})``;
