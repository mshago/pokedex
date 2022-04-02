import React from 'react';
import TabNavigator from './src/navigators/TabNavigator'
import { ThemeProvider } from './src/hooks/context'
import * as colors from './src/assets/colors/colors'

const App = () => {
  return (
    <ThemeProvider value={colors.STATUS_BAR_COLOR} >
      <TabNavigator/>
    </ThemeProvider>
  );
};

export default App;