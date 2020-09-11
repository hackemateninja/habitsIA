import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../../constants';

export default StyleSheet.create({
  avatar: {
    backgroundColor: COLORS.white,
    borderRadius: (LAYOUT.window.width * 0.25) / 2,
    height: LAYOUT.window.width * 0.25,
    overflow: 'hidden',
    padding: 5,
    width: LAYOUT.window.width * 0.25,
    ...GLOBAL_STYLES.shadow,
  },
  avatarContainer: {
    height: LAYOUT.window.height * 0.15,
    marginTop: LAYOUT.window.height * 0.02,
    paddingLeft: 24,
    width: '100%',
  },
  companyLogo: {
    backgroundColor: COLORS.white,
    borderRadius: (LAYOUT.window.width * 0.15) / 2,
    overflow: 'hidden',
    padding: '6%',
    height: LAYOUT.window.width * 0.15,
    left: LAYOUT.window.width * 0.17,
    marginBottom: -LAYOUT.window.width * 0.15,
    top: -LAYOUT.window.width * 0.15,
    width: LAYOUT.window.width * 0.15,
    ...GLOBAL_STYLES.shadow,
  },
  drawerContainer: {
    flex: 1,
  },
  logOutContainer: {
    marginTop: LAYOUT.window.height * 0.1,
  },
  image: {
    alignSelf: 'center',
    borderRadius: (LAYOUT.window.width * 0.25) / 2,
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  itemContainer: {
    width: '100%',
    marginBottom: 10,
    paddingLeft: 24,
    ...GLOBAL_STYLES.rowStartCenter,
  },
  itemsContainer: {
    marginTop: LAYOUT.window.height * 0.02,
  },
  itemText: {
    marginLeft: 24,
    textAlign: 'left',
    ...GLOBAL_STYLES.p,
  },
  nameContainer: {
    paddingLeft: 24,
  },
});
