import React from 'react';
import TopTabCommunity from './CommunityTopTab';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from '../../components';

const Community = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.openDrawer();
  };

  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={false}
        title="Comunidad"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <TopTabCommunity />
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = (dispatch: Event) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Community);
