import {useHTTP} from '../../hooks';
import {ActionCreator} from 'redux';
import {getTest} from '../actions/care';
import {asyncLogout} from './auth';

interface Answer {
  _id: string;
  text: string;
  description: string;
  value: number;
  unit_points: number;
}

interface QuestionType {
  _id: string;
  name: string;
  key: number;
  order: number;
  has_file: boolean;
}

interface Question {
  answers: Answer[];
  _id: string;
  name: string;
  description: string;
  question_type: QuestionType;
  group: number;
}

interface KindOfActivity {
  question_types: string[];
  iso_language_code: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  key: number;
  order: number;
  createdBy: string;
  __v: number;
}

interface Data {
  questions: Question[];
  evalue_by_group: boolean;
  get_percents: boolean;
  level: number;
  is_recursive: boolean;
  recursive_days: any[];
  retry: number;
  include_in_pool: boolean;
  iso_language_code: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  instructions: string;
  kind_of_activity: KindOfActivity;
  points: number;
  is_global: boolean;
  createdBy: string;
  __v: number;
}

interface Global {
  es_MX: string;
  pt_BR: string;
  en_US: string;
}

interface CareTest {
  code: number;
  message: string;
  success: boolean;
  data: Data;
  i18n: string;
  global: Global;
}

export function asyncGetTest() {
  return async (dispatch: ActionCreator<any>) => {
    const [success, response] = await useHTTP({
      method: 'GET',
      endpoint: 'api/survey/one/',
      query: '?where[name]=Encuesta care',
    });
    if (response.code === 403 || !success) {
      asyncLogout();
    } else {
      dispatch(getTest(response.data.name, response.data.questions));
    }
  };
}
