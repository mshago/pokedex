import React from 'react';
import {AppNavigation} from './src/navigators/appNavigation/AppNavigation'
import { ThemeProvider } from './src/hooks/context'
import * as colors from './src/assets/colors/colors'

const App = () => {
  return (
    <ThemeProvider value={colors.STATUS_BAR_COLOR} >
      <AppNavigation/>
    </ThemeProvider>
  );
};

export default App;