import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {Button, GradientContainer, Header, IconButton} from '../../components';
import {Image, Text, View} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

const ActivityMedia = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.goBack();
  };

  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={true}
        title="2. Sonido de respiracion"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <Image
        style={{width: '100%', height: 200, marginBottom: 30}}
        source={{
          uri:
            'https://www.blogadsl.com/images/2018/04/cual-es-el-mejor-reproductor-de-video-para-windows-01-e1523969935213.png',
        }}
        resizeMode={'cover'}
      />
      <View
        style={{
          paddingHorizontal: 20,
          ...GLOBAL_STYLES.columnBetweenCenter,
          height: '50%',
        }}>
        <Text
          style={{color: theme.colors.mainText, ...GLOBAL_STYLES.smallText}}>
          Aprende a relajarte y respirar de forma adecuada. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s
        </Text>

        <View style={{width: '80%', ...GLOBAL_STYLES.rowAroundCenter}}>
          <IconButton
            onPress={() => {}}
            icon={'ios-play-back-sharp'}
            size={40}
            iconColor={COLORS.primary}
          />
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: COLORS.primary,
              ...GLOBAL_STYLES.center,
            }}>
            <Icon name={'ios-pause'} size={30} color={COLORS.white} />
          </TouchableOpacity>
          <IconButton
            onPress={() => {}}
            icon={'ios-play-forward'}
            size={40}
            iconColor={COLORS.primary}
          />
        </View>

        <View style={GLOBAL_STYLES.rowAroundCenter}>
          <IconButton
            onPress={() => {}}
            iconColor={COLORS.semiBlue}
            size={35}
            icon={'ios-star'}
          />
          <IconButton
            onPress={() => {}}
            iconColor={COLORS.semiBlue}
            size={35}
            icon={'ios-star'}
          />
          <IconButton
            onPress={() => {}}
            iconColor={COLORS.semiBlue}
            size={35}
            icon={'ios-star'}
          />
          <IconButton
            onPress={() => {}}
            iconColor={COLORS.semiBlue}
            size={35}
            icon={'ios-star'}
          />
          <IconButton
            onPress={() => {}}
            iconColor={COLORS.semiBlue}
            size={35}
            icon={'ios-star'}
          />
        </View>

        <Button
          title="Terminar"
          color={COLORS.primary}
          colorText={COLORS.black}
          action={() => {}}
        />
      </View>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ActivityMedia);
