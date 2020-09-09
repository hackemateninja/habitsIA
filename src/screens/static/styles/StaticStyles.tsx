import {StyleSheet} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../../constants';

export default StyleSheet.create({
  help: {
    color: COLORS.greenPastel,
    textDecorationLine: 'underline',
    textAlign: 'center',
    ...GLOBAL_STYLES.h6,
  },
  infoStyle: {
    color: COLORS.primary,
    textAlign: 'right',
    ...GLOBAL_STYLES.h6,
  },
  infoContainer: {
    height: '80%',
    ...GLOBAL_STYLES.columnBetweenCenter,
  },
  itemContainer: {
    borderBottomWidth: 0.2,
    height: 50,
    paddingHorizontal: 24,
    width: LAYOUT.window.width,
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
});
