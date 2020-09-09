import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer} from '../../components';

const CommunityTeam = ({navigation, theme}: any) => {
  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}
    />
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CommunityTeam);
