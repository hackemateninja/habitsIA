import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {Navigation} from './src/navigation';
import store from './src/state/state';
// @ts-ignore
import {Provider} from 'react-redux';
enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
