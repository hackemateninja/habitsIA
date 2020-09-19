import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from '../../components';
import WebView from 'react-native-webview';

const ActivityRead = ({navigation, theme}: any) => {
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
        title="1. Conciencia de respiración"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <WebView
        originWhitelist={['*']}
        source={{
          uri: 'https://hackemate.ninja/welcome/',
        }}
      />
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ActivityRead);
