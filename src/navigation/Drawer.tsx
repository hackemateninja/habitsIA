/*
 * Menú lateral que sale al presionar un botòn o al hacer swipe
 * */
import React from 'react';
import BottomTab from './BottomTab';
import Animated from 'react-native-reanimated';
// @ts-ignore
import {connect} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {
  About,
  Support,
  Settings,
  Connect,
  Progress,
  Drawer,
  Diet,
  Points,
  History,
} from '../screens';

const DrawerNav = createDrawerNavigator();

const DrawerNavigation = ({theme}: any) => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });

  const backgroundColor = theme.colors.backGroundDrawer;

  const animatedStyle = {
    transform: [{scale}],
  };

  const drawerStyle = {
    backgroundColor: backgroundColor,
    elevation: 0,
    width: '60%',
  };

  const sceneStyle = {
    backgroundColor: backgroundColor,
    elevation: 0,
  };
  return (
    <DrawerNav.Navigator
      initialRouteName="BottomTab"
      drawerType="back"
      drawerStyle={drawerStyle}
      sceneContainerStyle={sceneStyle}
      overlayColor="transparent"
      statusBarAnimation="slide"
      screenOptions={{
        swipeEnabled: false,
      }}
      // @ts-ignore
      drawerContent={(
        props: DrawerContentComponentProps<DrawerContentOptions>,
      ) => {
        // @ts-ignore
        setProgress(props.progress);
        return <Drawer {...props} />;
      }}>
      <DrawerNav.Screen
        name="BottomTab"
        options={{
          swipeEnabled: true,
        }}>
        {(props) => <BottomTab {...props} style={animatedStyle} />}
      </DrawerNav.Screen>
      <DrawerNav.Screen name="Progress" component={Progress} />
      <DrawerNav.Screen name="Diet" component={Diet} />
      <DrawerNav.Screen name="Points" component={Points} />
      <DrawerNav.Screen name="History" component={History} />
      <DrawerNav.Screen name="Connect" component={Connect} />
      <DrawerNav.Screen name="Support" component={Support} />
      <DrawerNav.Screen name="About" component={About} />
      <DrawerNav.Screen name="Settings" component={Settings} />
    </DrawerNav.Navigator>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigation);
