import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from '../../components';
import WebView from 'react-native-webview';

const Support = ({navigation, theme}: any) => {
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
        title="Soporte"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <WebView
        removeClippedSubviews={true}
        originWhitelist={['*']}
        source={{
          uri: 'https://habitsai.atlassian.net/servicedesk/customer/portal/2',
        }}
      />
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Support);
