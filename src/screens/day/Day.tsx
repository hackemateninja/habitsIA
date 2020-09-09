import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header} from '../../components';
import Calendar from './components/Calendar';
import DayResume from './DayResume';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useDaysOfWeek} from '../../hooks/';
import {ScrollView} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Day = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.openDrawer();
  };
  const [week, date, name] = useDaysOfWeek();

  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={false}
        title="Mis actividades"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <ScrollView>
        <Tab.Navigator
          lazy={true}
          swipeEnabled={false}
          removeClippedSubviews={true}
          tabBar={(props) => (
            <Calendar
              state={props.state}
              navigation={props.navigation}
              theme={theme.colors}
            />
          )}
          initialRouteName={`${date} ${name}`}>
          {
            // @ts-ignore
            week.map((i) => {
              return (
                <Tab.Screen key={i.name} name={`${i.date} ${i.name}`}>
                  {() => (
                    <DayResume
                      name={i.name}
                      date={i.date}
                      month={i.month}
                      calendar={i.calendar}
                      full={i.fullDate}
                    />
                  )}
                </Tab.Screen>
              );
            })
          }
        </Tab.Navigator>
      </ScrollView>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Day);
