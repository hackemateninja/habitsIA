import {StyleSheet} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../constants';

export default StyleSheet.create({
  alertContainer: {
    backgroundColor: COLORS.hardBlue,
    borderRadius: 14,
    height: LAYOUT.window.height * 0.3,
    padding: 15,
    width: LAYOUT.window.width * 0.9,
    ...GLOBAL_STYLES.columnBetweenCenter,
  },
  alertOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: LAYOUT.window.height,
    position: 'absolute',
    width: LAYOUT.window.width,
    ...GLOBAL_STYLES.center,
  },
  alertTitle: {
    color: COLORS.primary,
    textAlign: 'center',
    ...GLOBAL_STYLES.h2,
  },
  alertDescription: {
    color: COLORS.grey,
    textAlign: 'center',
    ...GLOBAL_STYLES.p,
  },
  bottomSheetOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: LAYOUT.window.height,
    position: 'absolute',
    width: LAYOUT.window.width,
  },
  bottomSheetOverlayTouchable: {
    height: LAYOUT.window.height,
  },
  bottomSheetPickerContainer: {
    height: '70%',
  },
  bottomSheetText: {
    color: COLORS.primary,
    textAlign: 'right',
    ...GLOBAL_STYLES.h6,
  },
  bottomTabItemContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    height: LAYOUT.window.width * 0.13,
    marginBottom: -15,
    padding: 8,
    width: LAYOUT.window.width * 0.13,
    ...GLOBAL_STYLES.columnBetweenCenter,
  },
  bottomTabItemImage: {width: '70%', height: '70%'},
  bottomTabItemLabel: {
    textAlign: 'center',
    color: COLORS.white,
    ...GLOBAL_STYLES.smallTextBold,
  },
  buttonContainer: {
    borderRadius: 12,
    paddingVertical: Number(LAYOUT.window.height / 70),
    width: '100%',
    ...GLOBAL_STYLES.center,
  },
  chartContainer: {
    width: '100%',
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  chartLeft: {
    width: '50%',
  },
  chartRight: {
    width: '50%',
    ...GLOBAL_STYLES.columnBetweenStart,
  },
  chartRightItem: {
    marginBottom: 15,
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  chartRightTextContainer: {
    width: '70%',
    ...GLOBAL_STYLES.rowStartCenter,
  },
  chartRightTextLabel: {
    borderRadius: 4,
    height: 8,
    marginRight: 5,
    width: 8,
  },
  chartRightTextContainerPercentage: {width: '30%'},
  chartRightTextPercentage: {
    textAlign: 'right',
    ...GLOBAL_STYLES.superSmallText,
  },
  chipContainer: {
    borderRadius: 8,
    padding: 3,
  },
  chipText: {
    textAlign: 'center',
    ...GLOBAL_STYLES.smallTextBold,
  },
  choice: {
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },
  headerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 5,
    width: '100%',
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  waitingContainer: {
    backgroundColor: 'transparent',
    height: LAYOUT.window.height,
    position: 'absolute',
    width: LAYOUT.window.width,
    ...GLOBAL_STYLES.center,
  },
});
