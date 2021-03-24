import React from 'react';
import { Provider, } from 'react-redux';
import { Text, } from 'react-native';
import store from './src/store';
import RootContainer from './RootContainer'
const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  )
};
export default (App);
