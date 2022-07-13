import React, { FC } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { styles } from './TextApp.style';
import { TextAppT } from './TextApp.type';

export const TextApp:FC<TextAppT>=({ title = 'Title', style:customStyles }) => {

  return (
    <Text 
    adjustsFontSizeToFit={true}
    style={[styles.text,customStyles]}>{title}</Text>
  )
}