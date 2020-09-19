import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer} from '../../components';
import {ScrollView} from 'react-native';
import CardTeam from "./components/CardTeam";

const CommunityRanking = ({navigation, theme}: any) => {
  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <ScrollView style={{padding: 24}}>
        <CardTeam textColor={theme.colors.mainText}/>
        <CardTeam textColor={theme.colors.mainText}/>
        <CardTeam textColor={theme.colors.mainText}/>
        <CardTeam textColor={theme.colors.mainText}/>
        <CardTeam textColor={theme.colors.mainText}/>
        <CardTeam textColor={theme.colors.mainText}/>
        <CardTeam textColor={theme.colors.mainText}/>
      </ScrollView>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CommunityRanking);
