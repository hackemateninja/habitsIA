import React, {useEffect} from 'react';
import Subtitle from './components/Subtitle';
// @ts-ignore
import {connect} from 'react-redux';
import {View} from 'react-native';
import {asyncGetDay} from '../../state/thunks';
import {ActionCreator} from 'redux';
import {GradientContainer} from '../../components';
import Activities from './components/Activities';
import Tests from './components/Tests';
import Challenge from './components/Challenge';

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
        <Activities data={day.activities} color={colors} title="Actividades" />
        <Challenge data={day.challenges} color={colors} title="Retos" />
        <Tests data={day.tests} color={colors} title="Evaluaciones" />
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
