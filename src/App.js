import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { Header } from './components/common';


const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Header headerText="Tech Stack" />
      </View>
    </Provider>
  );
};

export default App;
