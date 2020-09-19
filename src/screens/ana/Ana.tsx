import React from 'react';
import {GradientContainer, Header} from '../../components';
// @ts-ignore
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, GLOBAL_STYLES} from '../../constants';
import {TextInput, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

const Ana = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.goBack();
  };

  const scrollStyle = {
    backgroundColor: theme.colors.backGroundAna,
    ...GLOBAL_STYLES.screen,
  };

  return (
    <GradientContainer
      topColor={theme.colors.topAna}
      bottomColor={theme.colors.backGroundAna}>
      <Header
        textColor={theme.colors.headerTextAna}
        hasBack={true}
        title="Coach Ana"
        background={theme.colors.topAna}
        leftAction={leftAction}
      />
      <ScrollView style={scrollStyle} />
      <View
        style={{
          width: '100%',
          bottom: 0,
          paddingHorizontal: 20,
        }}>
        <View style={GLOBAL_STYLES.rowBetweenCenter}>
          <View
            style={{
              width: '85%',
              height: 40,
              ...GLOBAL_STYLES.center,
              borderRadius: 20,
              padding: 10,
              backgroundColor: COLORS.semiGrey,
            }}>
            <TextInput
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                ...GLOBAL_STYLES.smallText,
              }}
              placeholder="Escribe un mensaje"
              placeholderTextColor={COLORS.black}
            />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              padding: 8,
              backgroundColor: COLORS.primary,
              ...GLOBAL_STYLES.center,
            }}>
            <Icon name={'ios-send'} size={20} color={COLORS.white} />
          </View>
        </View>
      </View>
    </GradientContainer>
  );
};
const mapToStateProps = (state: any) => {
  return state;
};

export default connect(mapToStateProps)(Ana);
