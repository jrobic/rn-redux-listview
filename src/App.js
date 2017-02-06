import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
};

export default App;
