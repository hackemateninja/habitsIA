// @ts-ignore
import Mailer from 'react-native-mail';
import {Alert} from 'react-native';

export default () => {
  Mailer.mail(
    {
      recipients: ['hola@habits.ai'],
      subject: 'No sé cuál es mi Código',
      body: 'Hola, mi nombre es __, de la empresa __  y no sé mi código',
    },
    (error: any, event: any) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {
            text: 'Cancel',
            onPress: () => console.log('CANCEL: Email Error Response'),
          },
        ],
        {cancelable: true},
      );
    },
  );
};
