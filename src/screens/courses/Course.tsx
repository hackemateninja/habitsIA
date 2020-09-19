import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from '../../components';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, GLOBAL_STYLES} from '../../constants';
import {Text, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

const Course = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.goBack();
  };

  const scrollStyle = {
    paddingHorizontal: 20,
    ...GLOBAL_STYLES.screen,
  };
  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={true}
        title="Respiración"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <View
        style={{
          borderBottomWidth: 0.3,
          borderBottomColor: COLORS.grey,
          marginBottom: 10,
          padding: 20,
        }}>
        <Text
          style={{...GLOBAL_STYLES.smallText, color: theme.colors.mainText}}>
          Aprende a relajarte y respirar de forma adecuada. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s
        </Text>
      </View>
      <ScrollView style={scrollStyle}>
        <Text
          style={{
            color: COLORS.primary,
            marginBottom: 20,
            ...GLOBAL_STYLES.p,
          }}>
          MÓDULOS
        </Text>
        <TouchableOpacity
          onPress={()=> {navigation.navigate('Media')}}
          style={{
            width: '100%',
            backgroundColor: theme.colors.cardBackground,
            borderRadius: 14,
            padding: 8,
            borderWidth: 0.3,
            marginBottom: 10,
            borderColor: COLORS.hardBlueSecondary,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '10%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <Icon name={'ios-headset'} size={20} color={COLORS.primary} />
          </View>
          <View style={{width: '80%'}}>
            <Text
              style={{
                ...GLOBAL_STYLES.smallTextBold,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              1. Conciencia de respiración
            </Text>
          </View>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 13,
              backgroundColor: COLORS.greenHard,
              ...GLOBAL_STYLES.center,
            }}>
            <Icon name={'ios-checkmark-sharp'} size={18} color={COLORS.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Read');
          }}
          style={{
            width: '100%',
            backgroundColor: theme.colors.cardBackground,
            borderRadius: 14,
            padding: 8,
            borderWidth: 0.3,
            marginBottom: 10,
            borderColor: COLORS.hardBlueSecondary,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '10%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <Icon
              name={'ios-document-sharp'}
              size={20}
              color={COLORS.primary}
            />
          </View>
          <View style={{width: '80%'}}>
            <Text
              style={{
                ...GLOBAL_STYLES.smallTextBold,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              2. Sonido de respiracion
            </Text>
          </View>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 13,
              backgroundColor: COLORS.greenHard,
              ...GLOBAL_STYLES.center,
            }}>
            <Icon name={'ios-checkmark-sharp'} size={18} color={COLORS.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: theme.colors.cardBackground,
            borderRadius: 14,
            padding: 8,
            borderWidth: 0.3,
            marginBottom: 10,
            borderColor: COLORS.hardBlueSecondary,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '10%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <Icon name={'ios-videocam'} size={20} color={COLORS.primary} />
          </View>
          <View style={{width: '80%'}}>
            <Text
              style={{
                ...GLOBAL_STYLES.smallTextBold,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              3. Respiracion liberadora
            </Text>
          </View>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 13,
              backgroundColor: COLORS.greenHard,
              ...GLOBAL_STYLES.center,
            }}>
            <Icon name={'ios-checkmark-sharp'} size={18} color={COLORS.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: theme.colors.cardBackground,
            borderRadius: 14,
            padding: 8,
            borderWidth: 0.3,
            marginBottom: 10,
            borderColor: COLORS.hardBlueSecondary,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '10%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <Icon name={'ios-videocam'} size={20} color={COLORS.primary} />
          </View>
          <View style={{width: '80%'}}>
            <Text
              style={{
                ...GLOBAL_STYLES.smallTextBold,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              3. Respiracion liberadora
            </Text>
          </View>
          <View
            style={{
              width: 22,
              height: 22,
              borderRadius: 13,
              backgroundColor: COLORS.semiBlue,
              ...GLOBAL_STYLES.center,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Course);
