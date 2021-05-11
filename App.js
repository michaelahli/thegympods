import React from 'react'
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Application from './src/screen/index';
import store from './src/global/store/store';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Application/>
      </Provider>
    </NavigationContainer>
  )
}

export default App;
