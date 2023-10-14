import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../constants';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import styles from './styles';

interface AlertType {
  title: string;
  desc: string;
  type: string;
  onPress: any;
}

export default ({title, desc, type, onPress}: AlertType) => {
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

  return (
    <View style={styles.alertOverlay}>
      <View style={styles.alertContainer}>
        <Icon name={icon} size={60} color={color} />
        <Text style={styles.alertTitle}>{title}</Text>
        <Text style={styles.alertDescription}>{desc}</Text>
        <Button
          title={'Aceptar'}
          colorText={COLORS.white}
          color={COLORS.primary}
          action={onPress}
        />
      </View>
    </View>
  );
};
