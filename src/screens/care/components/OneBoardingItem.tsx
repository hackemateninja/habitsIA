import React from 'react';
import CareStyles from '../styles/CareStyles';
import OneBoardingItem from '../types/OneBoardingItem';
import {Button} from '../../../components';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default ({
  image,
  title,
  description,
  itemNumber,
  action,
  colorButton,
  colorButtonText,
  colorTitle,
  colorDescription,
}: OneBoardingItem) => {
  const titleStyle = {
    color: colorTitle,
    ...CareStyles.title,
  };

  const descriptionStyle = {
    color: colorDescription,
    ...CareStyles.description,
  };
  return (
    <View style={CareStyles.oneBoardingItem}>
      <TouchableOpacity onPress={action}>
        <Text style={CareStyles.topAction}>Omitir</Text>
      </TouchableOpacity>
      <Image source={{uri: image}} style={CareStyles.image} />
      <Text style={titleStyle}>{title}</Text>
      <Text style={descriptionStyle}>{description}</Text>
      {itemNumber === 2 ? (
        <Button
          title="Empezar"
          colorText={colorButtonText}
          action={action}
          color={colorButton}
        />
      ) : null}
    </View>
  );
};
