import React from 'react';
import {COLORS} from '../assets/colors/colors'

STATUS_BAR_COLOR = COLORS.red

const ThemeContext = React.createContext(STATUS_BAR_COLOR)

export const ThemeProvider = ThemeContext.Provider
export default ThemeContext