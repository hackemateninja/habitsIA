import {ActionCreator} from 'redux';
import {getDay} from '../actions/day';

const activities = [
  {
    isHabit: true,
    completed: true,
    description: 'Hacer ejercicio en la mañana',
    points: 100,
  },
  {
    isHabit: false,
    completed: false,
    description: 'Hacer ejercicio en la tarde',
    points: 200,
  },
  {
    isHabit: true,
    completed: true,
    description: 'Hacer ejercicio en la noche',
    points: 300,
  },
  {
    isHabit: true,
    completed: true,
    description: 'Hacer karate en la mañana',
    points: 100,
  },
  {
    isHabit: false,
    completed: false,
    description: 'Hacer MMA en la tarde',
    points: 200,
  },
  {
    isHabit: true,
    completed: true,
    description: 'Hacer jujitsu en la noche',
    points: 300,
  },
];
const challenges = [
  {
    isGrupal: false,
    started: false,
    title: 'Nombre largo de un reto',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
    timeToStart: '2 DIAS',
  },
  {
    isGrupal: true,
    started: true,
    title: 'Nombre largo de un reto 1',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
    timeToStart: '2 DIAS',
  },
  {
    isGrupal: true,
    started: true,
    title: 'Nombre largo de un reto 2',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
    timeToStart: '2 DIAS',
  },
];

const tests = [
  {
    title: 'Nombre de la evaluación',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
  },
  {
    title: 'Nombre de la evaluación',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
  },
  {
    title: 'Nombre de la evaluación',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
  },
];

export function asyncGetDay(date: string) {
  return async (dispatch: ActionCreator<any>) => {
    dispatch(getDay('200', activities, challenges, tests));
  };
}
