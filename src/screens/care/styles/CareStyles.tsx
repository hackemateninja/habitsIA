import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../../constants';
import Layout from '../../../constants/Layout';

export default StyleSheet.create({
  avatar: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  bubbleAvatar: {
    alignSelf: 'flex-end',
    borderRadius: 30,
    backgroundColor: 'blue',
    height: Layout.window.width * 0.08,
    marginRight: 5,
    width: Layout.window.width * 0.08,
  },
  bubbleContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 30,
    paddingVertical: 6,
    width: '100%',
  },
  bubbleStyle: {
    bottom: Layout.window.width * 0.04,
    borderBottomEndRadius: 14,
    borderTopEndRadius: 14,
    borderTopStartRadius: 14,
    maxWidth: '92%',
    padding: 15,
  },
  bottomChipContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    width: Layout.window.width,
  },
  chip: {
    alignItems: 'center',
    borderRadius: 14,
  },
  chipText: {
    ...GLOBAL_STYLES.p,
  },
  description: {
    marginBottom: LAYOUT.window.height * 0.05,
    ...GLOBAL_STYLES.h6,
  },
  dotPager: {
    alignSelf: 'center',
    bottom: LAYOUT.window.height * 0.03,
    flexDirection: 'row',
    position: 'absolute',
  },
  image: {
    alignSelf: 'center',
    height: LAYOUT.window.height * 0.5,
    resizeMode: 'contain',
    width: LAYOUT.window.width,
  },
  oneBoardingItem: {
    height: '100%',
    ...GLOBAL_STYLES.screenContainer,
  },
  title: {
    marginVertical: 15,
    ...GLOBAL_STYLES.h1Bold,
  },
  topAction: {
    color: COLORS.primary,
    ...GLOBAL_STYLES.h6,
  },
});
