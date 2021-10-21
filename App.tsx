/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/Navigation/Main';

import Theme from './src/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
