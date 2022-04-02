import React from 'react';
import * as colors from '../assets/colors/colors'

const ThemeContext = React.createContext(colors.STATUS_BAR_COLOR)

export const ThemeProvider = ThemeContext.Provider
export default ThemeContext