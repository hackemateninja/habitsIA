import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header, IconButton} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, GLOBAL_STYLES} from '../../constants';
import {Image, Text, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

const Notifications = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.openDrawer();
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
        hasBack={false}
        title="Notifications"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <ScrollView style={scrollStyle}>
        <View
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
          <View style={{width: '20%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.primary,
                borderRadius: 20,
                padding: 5,
              }}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode={'contain'}
                source={require('../../../assets/images/anatrans.png')}
              />
            </View>
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.p,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              descripcion de notificacion con mensaje personalizado
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.primary,
                  marginRight: '45%',
                }}>
                Hace una hora
              </Text>
            </View>
          </View>
          <View style={GLOBAL_STYLES.columnBetweenCenter}>
            <IconButton
              onPress={() => {}}
              size={26}
              icon="ios-chevron-forward-outline"
              iconColor={COLORS.hardPrimary}
            />
          </View>
        </View>
        <View
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
          <View style={{width: '20%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <Icon name={'ios-videocam'} size={26} color={COLORS.primary} />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.p,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              descripcion de notificacion con mensaje personalizado
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.primary,
                  marginRight: '45%',
                }}>
                Hace una hora
              </Text>
            </View>
          </View>
          <View style={GLOBAL_STYLES.columnBetweenCenter}>
            <IconButton
              onPress={() => {}}
              size={26}
              icon="ios-chevron-forward-outline"
              iconColor={COLORS.hardPrimary}
            />
          </View>
        </View>
        <View
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
          <View style={{width: '20%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <Icon
              name={'ios-document-sharp'}
              size={26}
              color={COLORS.primary}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.p,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              descripcion de notificacion con mensaje personalizado
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.primary,
                  marginRight: '45%',
                }}>
                Hace una hora
              </Text>
            </View>
          </View>
          <View style={GLOBAL_STYLES.columnBetweenCenter}>
            <IconButton
              onPress={() => {}}
              size={26}
              icon="ios-chevron-forward-outline"
              iconColor={COLORS.hardPrimary}
            />
          </View>
        </View>
        <View
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
          <View style={{width: '20%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <Icon name={'ios-headset'} size={26} color={COLORS.primary} />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.p,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              descripcion de notificacion con mensaje personalizado
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.primary,
                  marginRight: '45%',
                }}>
                Hace una hora
              </Text>
            </View>
          </View>
          <View style={GLOBAL_STYLES.columnBetweenCenter}>
            <IconButton
              onPress={() => {}}
              size={26}
              icon="ios-chevron-forward-outline"
              iconColor={COLORS.hardPrimary}
            />
          </View>
        </View>
      </ScrollView>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
