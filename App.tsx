import React from 'react';
//imports libs
import {Text, View} from 'native-base';
import {NativeBaseProvider} from 'native-base';
//self imports
import { Login } from './src/screens/Login/Login';



const App = () => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
};

export default App;
