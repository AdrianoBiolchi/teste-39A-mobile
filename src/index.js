import React from 'react';
import { StatusBar } from 'react-native';
import App from './App';

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <App />
    </>
  );
}
