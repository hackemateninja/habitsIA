import moment from 'moment';

interface CalendarType {
  name: string,
  date: number,
  calendar: string,
  month: string,
  fullDate: string,
}

const calendar: Array<CalendarType> = new Array(7);

export default () => {
  const weekStart = moment().startOf('week');
  const date = moment().date();
  const name = moment().format('dddd');

  for (let i = 1; i <= 7; i++) {
    const count = i - 1;
    calendar[count].name = moment(weekStart).add(i, 'days').format('dddd');
    calendar[count].date = moment(weekStart).add(i, 'days').date();
    calendar[count].month = moment(weekStart).add(i, 'days').format('MMMM');
    calendar[count].fullDate = moment(weekStart).add(i, 'days').format();
    calendar[count].calendar = moment(weekStart).add(i, 'days').calendar(null, {
      lastDay: '[Ayer]',
      sameDay: '[Hoy]',
      nextDay: '[Mañana]',
    });
  }

  return [calendar, date, name];
};
