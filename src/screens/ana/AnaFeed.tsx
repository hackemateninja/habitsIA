import React from 'react';
import {GradientContainer, Header} from '../../components';
// @ts-ignore
import {connect} from 'react-redux';

const AnaFeed = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.goBack();
  };

  navigation.setOptions();

  return (
    <GradientContainer
      topColor={theme.colors.topAna}
      bottomColor={theme.colors.backGroundAna}>
      <Header
        textColor={theme.colors.headerTextAna}
        hasBack={true}
        title="Feed ana"
        background={theme.colors.topAna}
        leftAction={leftAction}
      />
    </GradientContainer>
  );
};
const mapToStateProps = (state: any) => {
  return state;
};

export default connect(mapToStateProps)(AnaFeed);
