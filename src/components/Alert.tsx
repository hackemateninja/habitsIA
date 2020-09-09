import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../constants';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';

const styles = StyleSheet.create({
  alertOverlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: LAYOUT.window.height,
    position: 'absolute',
    width: LAYOUT.window.width,
    ...GLOBAL_STYLES.center,
  },
  alertContainer: {
    backgroundColor: COLORS.hardBlue,
    borderRadius: 14,
    height: '25%',
    padding: 20,
    width: '90%',
    ...GLOBAL_STYLES.columnBetweenCenter,
  },
  title: {
    color: COLORS.primary,
    textAlign: 'center',
    ...GLOBAL_STYLES.h2,
  },
  description: {
    color: COLORS.grey,
    textAlign: 'center',
    ...GLOBAL_STYLES.p,
  },
});

export default ({
  visible,
  title,
  desc,
  type,
  onPress,
}: {
  title: string;
  desc: string;
  type: string;
  visible: boolean;
  onPress: any;
}) => {
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    switch (type) {
      case 'success':
        setColor(COLORS.green);
        setIcon('ios-checkmark-circle-outline');
        break;
      case 'error':
        setColor(COLORS.red);
        setIcon('ios-close-circle-outline');
        break;
      case 'warning':
        setColor(COLORS.yellow);
        setIcon('ios-warning-outline');
        break;
      default:
        setColor(COLORS.primary);
        setIcon('ios-information-circle-outline');
        break;
    }
  }, [type]);

  if (visible) {
    return (
      <View style={styles.alertOverlay}>
        <View style={styles.alertContainer}>
          <Icon name={icon} size={60} color={color} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{desc}</Text>
          <Button
            title={'Aceptar'}
            colorText={COLORS.white}
            color={COLORS.primary}
            action={onPress}
          />
        </View>
      </View>
    );
  }
  return null;
};
