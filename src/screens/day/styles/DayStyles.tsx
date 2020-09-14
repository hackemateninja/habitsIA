import {StyleSheet} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../../constants';

export default StyleSheet.create({
  calendarContainer: {
    height: LAYOUT.window.height * 0.085,
    marginVertical: 10,
    width: '95%',
    ...GLOBAL_STYLES.rowAroundCenter,
  },
  calendarIndicator: {
    borderRadius: 18,
    height: 36,
    width: 36,
    ...GLOBAL_STYLES.center,
  },
  calendarLabel: {
    color: COLORS.grey,
    textAlign: 'center',
    ...GLOBAL_STYLES.p,
  },
  calendarDateContainer: {
    height: '100%',
    ...GLOBAL_STYLES.columnBetweenCenter,
  },
  calendarDayText: {
    textAlign: 'center',
    ...GLOBAL_STYLES.p,
  },
  cardContainer: {
    borderColor: COLORS.hardBlueSecondary,
    borderRadius: 8,
    borderWidth: 0.3,
    height: '100%',
    marginRight: 10,
    padding: 8,
    width: LAYOUT.window.width * 0.5,
  },
  cardContainerLarge: {
    borderColor: COLORS.hardBlueSecondary,
    borderRadius: 8,
    borderWidth: 0.3,
    height: '100%',
    marginRight: 10,
    padding: 8,
    width: LAYOUT.window.width * 0.9,
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  cardEmptyCircle: {
    borderRadius: 25,
    height: 50,
    width: 50,
    ...GLOBAL_STYLES.center,
  },
  cardEmptyData: {
    borderColor: COLORS.hardBlueSecondary,
    borderRadius: 8,
    borderWidth: 0.3,
    height: LAYOUT.window.height * 0.15,
    marginRight: 24,
    ...GLOBAL_STYLES.columnEvenlyCenter,
  },
  cardIcon: {
    borderRadius: 25,
    height: 50,
    padding: 8,
    width: 50,
    ...GLOBAL_STYLES.center,
  },
  cardPoints: {
    color: COLORS.primary,
    marginRight: 5,
    marginTop: 5,
    ...GLOBAL_STYLES.h4,
  },
  cardPointsContainer: {
    width: '40%',
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  cardPointsIndicator: {
    color: COLORS.hardGrey,
    marginTop: 5,
    ...GLOBAL_STYLES.p,
  },
  cardTitle: {
    width: '70%',
  },
  cardTopText: {
    color: COLORS.hardPrimary,
    ...GLOBAL_STYLES.smallText,
  },
  completedIndicator: {
    borderRadius: 6,
    height: 12,
    marginRight: 5,
    width: 12,
  },
  completedIndicatorContainer: {
    width: '60%',
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  completeIndicatorText: {
    color: COLORS.hardGrey,
    ...GLOBAL_STYLES.smallText,
  },
  scrollContainer: {
    marginBottom: 39,
    marginTop: 8,
    width: '100%',
  },
  scrollTitle: {
    marginBottom: 10,
    textAlign: 'left',
    ...GLOBAL_STYLES.h5,
  },
});
