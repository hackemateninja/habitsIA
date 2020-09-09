// @ts-ignore
import {API} from '@env';
import AsyncStorage from '@react-native-community/async-storage';

export default async (
  method: string,
  body: object,
  endpoint: string,
  query?: string,
) => {
  let token = '';
  try {
    const jsonValue = await AsyncStorage.getItem('@Login');
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    token = data.token;
  } catch (e) {
    token = '';
  }

  const url = `${API}/${endpoint}/${query || ''}`;
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify({
        ...body,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (e) {
    return e;
  }
};
