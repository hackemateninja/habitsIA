import {ActionCreator} from 'redux';
import {getDay} from '../actions/day';

const activities = [
  {
    id: '1',
    isHabit: true,
    completed: true,
    description: 'Hacer ejercicio en la mañana',
    points: 100,
  },
  {
    id: '2',
    isHabit: false,
    completed: false,
    description: 'Hacer ejercicio en la tarde',
    points: 200,
  },
  {
    id: '3',
    isHabit: true,
    completed: true,
    description: 'Hacer ejercicio en la noche',
    points: 300,
  },
  {
    id: '4',
    isHabit: true,
    completed: true,
    description: 'Hacer karate en la mañana',
    points: 100,
  },
  {
    id: '5',
    isHabit: false,
    completed: false,
    description: 'Hacer MMA en la tarde',
    points: 200,
  },
  {
    id: '6',
    isHabit: true,
    completed: true,
    description: 'Hacer jujitsu en la noche',
    points: 300,
  },
];
const challenges = [
  {
    id: '1',
    isGrupal: false,
    started: false,
    title: 'Nombre largo de un reto',
    description: 'Lorem Ipsum is simply dummy text of the mañana',
    timeToStart: '2 DIAS',
  },
  {
    id: '2',
    isGrupal: true,
    started: true,
    title: 'Nombre largo de un reto 1',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
    timeToStart: '2 DIAS',
  },
  {
    id: '3',
    isGrupal: true,
    started: true,
    title: 'Nombre largo de un reto 2',
    description: 'Lorem Ipsum is simply dummy text of mañana',
    timeToStart: '2 DIAS',
  },
];

const tests = [
  {
    id: '1',
    title: 'Nombre de la evaluación',
    description: 'Lorem Ipsum is simply dummy text of the mañana',
  },
  {
    id: '2',
    title: 'Nombre de la evaluación',
    description: 'Lorem Ipsum is simply dummy text of the…mañana',
  },
  {
    id: '3',
    title: 'Nombre de la evaluación',
    description: 'Lorem Ipsum is simply dummy text of mañana',
  },
];

export function asyncGetDay(date: string) {
  return async (dispatch: ActionCreator<any>) => {
    dispatch(getDay('200', activities, challenges, tests));
  };
}
