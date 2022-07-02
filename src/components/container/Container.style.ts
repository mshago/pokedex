import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/colors/colors';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.red,
  },
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor:COLORS.white,
  },
  content: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

