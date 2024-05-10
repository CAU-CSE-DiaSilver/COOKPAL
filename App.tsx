import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {SearchContextProvider} from './contexts/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <RootStack />
      </SearchContextProvider>
    </NavigationContainer>
  );
}
export default App;
