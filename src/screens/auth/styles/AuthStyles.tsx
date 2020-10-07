import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';
import {GLOBAL_STYLES, LAYOUT} from '../../../constants';
import {useResponsive} from '../../../hooks';

export default StyleSheet.create({
  bottomAuthScreen: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: LAYOUT.window.height * 0.85,
    ...GLOBAL_STYLES.screenContainer,
  },
  bottomAuthTitleContainer: {
    marginVertical: LAYOUT.window.height * 0.04,
  },
  bottomAuthTitle: {
    color: COLORS.black,
    marginBottom: 10,
    ...GLOBAL_STYLES.h4,
  },
  bottomAuthDescription: {
    color: COLORS.grey,
    ...GLOBAL_STYLES.p,
  },
  checkBoxContainer: {
    marginBottom: LAYOUT.window.height * 0.02,
    width: '70%',
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  checkBoxStyle: {
    color: COLORS.black,
    ...GLOBAL_STYLES.p,
  },
  inputContainer: {
    backgroundColor: COLORS.light,
    height: 40,
    marginBottom: 10,
    width: '100%',
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  inputErrorMessage: {
    color: COLORS.red,
    textAlign: 'right',
    top: -12,
    ...GLOBAL_STYLES.superSmallText,
  },
  input: {
    color: COLORS.black,
    height: '100%',
    letterSpacing: 2,
    marginTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 8,
    textDecorationLine: 'none',
    width: '100%',
    ...GLOBAL_STYLES.p,
  },
  inputIcon: {
    height: '100%',
    position: 'absolute',
    right: 0,
    ...GLOBAL_STYLES.center,
  },
  label: {
    color: COLORS.hardGrey,
    ...GLOBAL_STYLES.smallTextBold,
  },
  link: {
    color: COLORS.hardGrey,
    ...GLOBAL_STYLES.link,
    ...GLOBAL_STYLES.smallText,
  },
  linkContainer: {
    width: '60%',
    marginBottom: LAYOUT.window.height * 0.04,
  },
  pickerContainer: {
    backgroundColor: COLORS.light,
    height: LAYOUT.window.height * 0.06,
    width: '100%',
    marginBottom: LAYOUT.window.height * 0.04,
  },
  pickerContainerIosValue: {
    width: '100%',
    padding: 8,
  },
  pickerIos: {
    backgroundColor: COLORS.light,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 8,
    width: '100%',
    ...GLOBAL_STYLES.rowBetweenCenter,
  },
  pickerValueIOS: {
    color: COLORS.black,
    ...GLOBAL_STYLES.h6,
  },
  separator: {
    marginBottom: LAYOUT.window.height * 0.12,
  },
  topAuthScreen: {
    height: LAYOUT.window.height * 0.15,
    justifyContent: 'space-evenly',
    marginBottom: 10,
    marginTop: 5,
    ...GLOBAL_STYLES.screenContainer,
  },
  welcomeButtonSeparation: {
    marginBottom: '5%',
  },
  welcomeContainer: {
    bottom: '5%',
    position: 'absolute',
    ...GLOBAL_STYLES.screenContainer,
  },
  welcomeLogo: {
    height: LAYOUT.window.height * 0.1,
    marginBottom: '5%',
    resizeMode: 'contain',
    width: LAYOUT.window.width * 0.15,
  },
  welcomeSubTitle: {
    marginBottom: '10%',
    ...GLOBAL_STYLES.p,
  },
  welcomeTitle: {
    marginBottom: '5%',
    ...GLOBAL_STYLES.h1,
  },
});
