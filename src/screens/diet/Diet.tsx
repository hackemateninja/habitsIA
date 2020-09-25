import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {Chip, GradientContainer, Header} from '../../components';
import {Image, ScrollView, Text, View} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../../constants';

const Diet = ({navigation, theme}: any) => {
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
        title="Dieta"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <View style={{height: 50, ...GLOBAL_STYLES.rowBetweenCenter}}>
        <Chip width={100} color={COLORS.grey} textColor={COLORS.white} title={"desayuno"} />
        <Chip width={100} color={COLORS.greenPastel} textColor={COLORS.white} title={"desayuno"} />
        <Chip width={100} color={COLORS.red} textColor={COLORS.white} title={"desayuno"} />
        <Chip width={100} color={COLORS.yellow} textColor={COLORS.white} title={"desayuno"} />
        <Chip width={100} color={COLORS.blue} textColor={COLORS.white} title={"desayuno"} />
      </View>

    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Diet);
