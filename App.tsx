import {Text, View} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

const App = () => {
  return (
    <NativeBaseProvider>
      <View>
        <Text className='text-red-600'> Hello World </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default App;
