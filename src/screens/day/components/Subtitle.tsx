import React from 'react';
import {Text} from 'react-native';
import {COLORS} from '../../../constants';
import DayStyles from '../styles/DayStyles';

export default ({
  date,
  dayName,
  month,
  day,
}: {
  date: number;
  dayName: string;
  month: string;
  day: string;
}) => {
  const dayTextStyle = {
    color: COLORS.primary,
    ...DayStyles.subTitleDayText,
  };

  return (
    <>
      <Text style={dayTextStyle}>{day}</Text>
      <Text style={DayStyles.subTitleDateText}>
        {dayName} {date} {month}
      </Text>
    </>
  );
};
