/*
 * Menú lateral que sale al presionar un botòn o al hacer swipe
 * */
import React, {useState} from 'react';
import BottomTab from './BottomTab';
import Animated, {Extrapolate} from 'react-native-reanimated';
// @ts-ignore
import {connect} from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {
  About,
  Connect, Courses,
  Diet,
  Drawer,
  History,
  Points,
  Progress,
  Settings,
  Support,
} from '../screens';

const DrawerNav = createDrawerNavigator();

const DrawerNavigation = ({theme}: any) => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
    extrapolate: Extrapolate.CLAMP,
  });

  const backgroundColor = theme.colors.backGroundDrawer;

  const drawerStyle = {
    backgroundColor: backgroundColor,
    elevation: 0,
    width: '60%',
  };

  const sceneStyle = {
    backgroundColor: backgroundColor,
    elevation: 0,
  };

  const animatedStyle = {
    transform: [{scale}],
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
        {(props) => {
          return <BottomTab {...props} style={animatedStyle} />;
        }}
      </DrawerNav.Screen>
      <DrawerNav.Screen name="Progress" component={Progress} />
      <DrawerNav.Screen name="Courses" component={Courses} />
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
