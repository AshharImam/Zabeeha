/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

import store from './src/store';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

const RNRedux = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
