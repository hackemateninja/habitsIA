import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from '../../components';
import TopTabProfile from './ProfileTopTab';

const Profile = ({navigation, theme}: any) => {
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
        title="Yo"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <TopTabProfile />
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = (dispatch: Event) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
