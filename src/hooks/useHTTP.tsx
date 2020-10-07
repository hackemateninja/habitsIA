// @ts-ignore
import {API} from '@env';
import AsyncStorage from '@react-native-community/async-storage';

interface UseHTTPType {
  method: string;
  endpoint: string;
  body?: object;
  query?: string;
}

export default async ({method, endpoint, body, query}: UseHTTPType) => {
  let token = '';
  try {
    const jsonValue = await AsyncStorage.getItem('@Login');
    const data = jsonValue !== null ? JSON.parse(jsonValue) : null;
    token = data.token;
  } catch (e) {
    token = '';
  }

  const url = `${API}/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: method,
      body:
        method === 'GET'
          ? null
          : JSON.stringify({
              ...body,
            }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (e) {
    return e;
  }
};
