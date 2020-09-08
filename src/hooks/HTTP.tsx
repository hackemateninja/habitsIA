// @ts-ignore
import {API, AUDIENCE} from '@env';
import AsyncStorage from '@react-native-community/async-storage';

export default async (
  method: string,
  body: object,
  endpoint: string,
  query?: string,
) => {
  //TODO hacerlo hook real para reiniciar login y obtener queries
  let token = '';
  try {
    const jsonValue = await AsyncStorage.getItem('@login');
    const data = jsonValue != null ? JSON.parse(jsonValue) : null;
    token = data.token;
  } catch (e) {
    token = '';
  }

  const url = `${API}/${endpoint}/${query || ''}`;
  const audience = AUDIENCE;
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify({
        audience: audience,
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
