import React, { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import api from '~/services/api';

import {
  Container,
  BoxImageProduct,
  ContainerBox,
  BoxProduct,
  NameProduct,
  TitleInfo,
  Info,
  ButtonBack,
  TextBack,
} from './styles';

export default function ProductDescription({ navigation }) {
  const info = navigation.getParam('data');
  const { id } = info;
  const [products, setProducts] = useState();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`products/${id}`);
      setProducts(response.data);
    }
    loadProducts();
  }, [id]);

  return (
    <Container>
      <BoxImageProduct>
        <ImageBackground
          style={{ height: '100%' }}
          source={{ uri: info.files.map(img => img.url)[0] }}
          opacity={0.9}
        />
      </BoxImageProduct>
      <ContainerBox>
        <BoxProduct>
          <NameProduct>{info.name}</NameProduct>
          <Info>
            Categorias:
            <TitleInfo>c</TitleInfo>
          </Info>
          <ButtonBack onPress={() => navigation.navigate('Main')}>
            <TextBack>Voltar</TextBack>
          </ButtonBack>
        </BoxProduct>
      </ContainerBox>
    </Container>
  );
}
