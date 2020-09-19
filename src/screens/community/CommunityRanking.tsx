import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer} from '../../components';
import {ScrollView} from 'react-native';
import RankingResume from './components/RankingResume';

const CommunityRanking = ({navigation, theme}: any) => {
  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <ScrollView style={{padding: 24}}>
        <RankingResume color={theme.colors.mainText} title="Global" />
        <RankingResume color={theme.colors.mainText} title="Mensual" />
      </ScrollView>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CommunityRanking);
