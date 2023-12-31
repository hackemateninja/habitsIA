import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from '../../components';

const Points = ({navigation, theme}: any) => {
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
        title="Mis Puntos"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Points);
