import React, { useState, useLayoutEffect } from 'react';
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
  const info = navigation.getParam('products');
  console.log(info);

  return (
    <Container>
      <BoxImageProduct>
        <ImageBackground
          source={{ uri: info.files.map(img => img.url)[0] }}
          style={{ height: '100%' }}
          opacity={0.9}
        />
      </BoxImageProduct>
      <ContainerBox>
        <BoxProduct>
          <NameProduct>{info.name}</NameProduct>
          <Info>
            Categorias:
            <TitleInfo> {info.categories.map(c => c.title)}</TitleInfo>
          </Info>
          <Info>
            Sub-Categorias:
            <TitleInfo> {info.subcategories.map(sb => sb.title)} </TitleInfo>
          </Info>
          <Info>
            Atributos:
            <TitleInfo> {info.attributes.map(at => at.title)} </TitleInfo>
          </Info>
          <Info>
            Aplicações:
            <TitleInfo>
              {' '}
              {info.applications.map(ap => ap.description)}
            </TitleInfo>
          </Info>
          <Info>
            Característcas:
            <TitleInfo> {info.features.map(f => f.description)} </TitleInfo>
          </Info>

          <ButtonBack onPress={() => navigation.navigate('Main')}>
            <TextBack>Voltar</TextBack>
          </ButtonBack>
        </BoxProduct>
      </ContainerBox>
    </Container>
  );
}
