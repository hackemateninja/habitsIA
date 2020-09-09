import React from 'react';
import {GradientContainer, Header} from '../../components';
// @ts-ignore
import {connect} from 'react-redux';

const AnaDescription = ({navigation, theme}: any) => {
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
        title="ANA description"
        background={theme.colors.topAna}
        leftAction={leftAction}
      />
    </GradientContainer>
  );
};
const mapToStateProps = (state: any) => {
  return state;
};

export default connect(mapToStateProps)(AnaDescription);
