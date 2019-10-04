import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Product from './pages/ProductDescription';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    Product,
  })
);
