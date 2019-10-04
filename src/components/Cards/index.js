import React, { useState, useEffect } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import api from '~/services/api';

import { Container, InfoProduct, NameProduct } from './styles';

export default function Cards({ navigation, data }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`products/${data.id}`);
      setProducts(response.data);
    }
    loadProducts();
  }, [data.id]);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Product', {
          products,
        })
      }
    >
      <Container>
        <ImageBackground
          source={{ uri: data.files.map(img => img.url)[0] }}
          style={{ width: '100%', height: '100%' }}
          imageStyle={{ borderRadius: 10 }}
        />
        <InfoProduct>
          <NameProduct> {data.name}</NameProduct>
        </InfoProduct>
      </Container>
    </TouchableOpacity>
  );
}
