import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';

import { Container, InfoProduct, NameProduct } from './styles';

export default function Cards({ navigation, data }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Product', {
          data,
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
