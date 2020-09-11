import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigation/Navigator';
import {enableScreens} from 'react-native-screens';
import store from './src/state/state';
// @ts-ignore
import {Provider} from 'react-redux';
enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
