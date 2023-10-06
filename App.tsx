import React from 'react';
import Router from './src/routes';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
}

export default App;
