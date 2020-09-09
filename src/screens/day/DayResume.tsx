import React, {useEffect} from 'react';
import Subtitle from './components/Subtitle';
import ScrollComponent from './components/ScrollComponent';
import CardActivity from './components/CardActivity';
// @ts-ignore
import {connect} from 'react-redux';
import {View} from 'react-native';
import {asyncGetDay} from '../../state/thunks/day';
import {ActionCreator} from 'redux';
import {GradientContainer} from '../../components';
import CardChallenge from './components/CardChallenge';
import CardTest from './components/CardTest';

const DayResume = (props: any) => {
  const {theme, name, calendar, month, date, full, getData, day} = props;

  const {colors} = theme;
  useEffect(() => {
    getData(full);
  }, []);

  return (
    <GradientContainer
      topColor={colors.backGroundScreen}
      bottomColor={colors.backGroundScreen}>
      <View style={{paddingLeft: 24}}>
        <Subtitle date={date} month={month} day={calendar} dayName={name} />
        <ScrollComponent title="Actividades" color={colors.mainText}>
          {day.activities.map((i: any) => {
            return (
              <CardActivity
                key={i.description}
                onPress={() => {}}
                isHabit={i.isHabit}
                completed={i.completed}
                description={i.description}
                points={i.points}
                background={colors.cardBackground}
                colorText={colors.mainText}
              />
            );
          })}
        </ScrollComponent>
        <ScrollComponent title="Retos" color={colors.mainText}>
          {day.challenges.map((i: any) => {
            return (
              <CardChallenge
                key={i.title}
                onPress={() => {}}
                timeToStart={i.timeToStart}
                colorText={colors.mainText}
                background={colors.cardBackground}
                isGrupal={i.isGrupal}
                started={i.started}
                title={i.title}
                description={i.description}
              />
            );
          })}
        </ScrollComponent>
        <ScrollComponent title="Evaluaciones" color={colors.mainText}>
          {day.challenges.map((i: any) => {
            return (
              <CardTest
                key={i.title}
                onPress={() => {}}
                background={colors.cardBackground}
                colorText={colors.mainText}
                circleColor={colors.backGroundScreen}
                title={i.title}
                description={i.description}
              />
            );
          })}
        </ScrollComponent>
      </View>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getData: (date: string) => dispatch(asyncGetDay(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DayResume);
