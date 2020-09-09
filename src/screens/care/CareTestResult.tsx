import React from 'react';
import {Button, Chart, GradientContainer, Header} from '../../components';
import {StatusBar, Text, View} from 'react-native';
import {COLORS, GLOBAL_STYLES} from '../../constants';
import CARE_RESULT from './mocks/CARE';

const CARE_RESULT_LOCAL = [
  {
    id: '1',
    label: CARE_RESULT[0].result[1].type,
    porcent: CARE_RESULT[0].result[1].porcent,
    level: '',
    color: COLORS.black,
  },
  {
    id: '2',
    label: CARE_RESULT[0].result[2].type,
    porcent: CARE_RESULT[0].result[2].porcent,
    level: '',
    color: COLORS.yellow,
  },
  {
    id: '3',
    label: CARE_RESULT[0].result[3].type,
    porcent: CARE_RESULT[0].result[3].porcent,
    level: '',
    color: COLORS.primary,
  },
  {
    id: '4',
    label: CARE_RESULT[0].result[0].type,
    porcent: CARE_RESULT[0].result[0].porcent,
    level: '',
    color: COLORS.green,
  },
];

export default ({navigation}: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  const nav = () => {
    navigation.navigate('Activate');
  };
  // @ts-ignore
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.softGrey}
        animated={false}
      />
      <GradientContainer
        topColor={COLORS.secondaryTransparent}
        bottomColor={COLORS.white}>
        <View style={[GLOBAL_STYLES.screenContainer, {marginTop: '10%'}]}>
          <Chart data={CARE_RESULT_LOCAL} />
        </View>

        <View
          style={[
            GLOBAL_STYLES.screenContainer,
            {position: 'absolute', bottom: '10%'},
          ]}>
          <Text style={[GLOBAL_STYLES.p, {marginBottom: 20}]}>
            Los resultados de esta evaluación nos ayudan a brindarte un plan
            balanceado de bienestar y a asignarte uno de los pilares del modelo
            C.A.R.E. que trabajarás cada mes.
          </Text>

          <Text style={[GLOBAL_STYLES.p, {marginBottom: 30}]}>
            Este mes reforzaremos tus conocimientos y hábitos sobre ACTIVATE.
          </Text>

          <Text style={[GLOBAL_STYLES.h4, {marginBottom: 25}]}>
            ¡Comencemos juntos a mejorar tu calidad de vida!
          </Text>
        </View>
      </GradientContainer>
    </>
  );
};
