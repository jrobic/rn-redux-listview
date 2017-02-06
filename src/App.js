import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Header headerText="Tech Stack" />
      <LibraryList />
    </View>
  </Provider>
);

export default App;
