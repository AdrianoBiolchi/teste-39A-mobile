import React, { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
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
  const [product, setProduct] = useState();

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`products/${info.id}`);
        setProduct(response.data);
    }
    loadProduct();
  }, [info.id]);


  return (
    <Container>
      {!product ? (
          <Spinner
          visible={true}
          textContent={'Carregando...'}
          animation='fade'
          overlayColor='rgba(0, 0, 0, 1)'
        />
      ) : (
        <>
          <BoxImageProduct>
            <ImageBackground
              source={{ uri: product.files.map(img => img.url)[0] }}
              style={{ height: '100%' }}
              opacity={0.9}
            />
          </BoxImageProduct>
          <ContainerBox>
            <BoxProduct>
              <NameProduct>{product.name}</NameProduct>
              <Info>
                Categorias:
                <TitleInfo> {product.categories.map(c => c.title)}</TitleInfo>
              </Info>
              <Info>
                Sub-Categorias:
                <TitleInfo>
                  {product.subcategories.map(sb => sb.title)}
                </TitleInfo>
              </Info>
              <Info>
                Atributos:
                <TitleInfo>{product.attributes.map(at => at.title)}</TitleInfo>
              </Info>
              <Info>
                Aplicações:
                <TitleInfo>
                  {product.applications.map(ap => ap.description)}
                </TitleInfo>
              </Info>
              <Info>
                Característcas:
                <TitleInfo>
                  {product.features.map(f => f.description)}
                </TitleInfo>
              </Info>

              <ButtonBack onPress={() => navigation.navigate('Main')}>
                <TextBack>Voltar</TextBack>
              </ButtonBack>
            </BoxProduct>
          </ContainerBox>
        </>
      )}
    </Container>
  );
}
