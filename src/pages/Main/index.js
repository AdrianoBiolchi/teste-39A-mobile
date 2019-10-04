import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import Card from '~/components/Cards';
import Background from '~/components/Background';
import { Container, List, ListCards, TitleBox, Title } from './styles';

export default function Main({ navigation }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const { data } = response.data;
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Background>
      <TitleBox>
        <Title>Produtos 39A</Title>
      </TitleBox>
      <Container>
        <ListCards>
          <List
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Card data={item} key={item.id} navigation={navigation} />
            )}
            numColumns={2}
          />
        </ListCards>
      </Container>
    </Background>
  );
}
