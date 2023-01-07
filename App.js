import React from 'react';
import {AppNavigation} from './src/navigators/appNavigation/AppNavigation'
import { ThemeProvider } from './src/hooks/context'
import {COLORS} from './src/assets/colors/colors'

const STATUS_BAR_COLOR = COLORS.red

const App = () => {
  return (
    <ThemeProvider value={STATUS_BAR_COLOR} >
      <AppNavigation/>
    </ThemeProvider>
  );
};

export default App;