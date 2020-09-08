/*
 * Grafico progressivo circular que va en los resultados de la encuesta care
 * y en la pantalla de perfil
 * */

//importaciones múltiples al final
import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, LAYOUT, GLOBAL_STYLES} from '../constants';

const styles = StyleSheet.create({
  careTestResultChartContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  careTestResultLeft: {
    width: '50%',
  },
  careTestResultRight: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
  },
  careTestResultRightItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  careTestResultRightTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
  },
});

export default ({data}: any) => {
  //constante que almacena los los tados que vienen por props
  const CARE_RESULT_LOCAL = data;

  // función que calcula el nñumero más pequeño que viene en los props
  const less = (): number => {
    let min = CARE_RESULT_LOCAL[0].porcent;
    for (let i = 0; i < CARE_RESULT_LOCAL.length; i++) {
      if (CARE_RESULT_LOCAL[i].porcent < min) {
        min = CARE_RESULT_LOCAL[i].porcent;
      }
    }
    return min;
  };

  //configuración del gráfico
  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(10, 25, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0,
    useShadowColorFromDataset: false, // optional
  };

  // variable que recibe el número que devuelve la función less
  const min = less();

  //etiquetas del gráfico
  const d = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };
  return (
    <View style={styles.careTestResultChartContainer}>
      <View style={styles.careTestResultLeft}>
        <ProgressChart
          data={d}
          width={LAYOUT.window.width / 2}
          height={170}
          strokeWidth={7}
          radius={20}
          chartConfig={chartConfig}
          hideLegend={true}
          accessor={''}
          backgroundColor={''}
          paddingLeft={''}
        />
      </View>
      <View style={styles.careTestResultRight}>
        {CARE_RESULT_LOCAL.map((item: any) => {
          return (
            <View style={styles.careTestResultRightItem} key={item.id}>
              <View style={styles.careTestResultRightTextContainer}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: item.color,
                    marginRight: 5,
                  }}
                />
                <Text style={GLOBAL_STYLES.smallTextBold}>{item.label}</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontFamily: 'roboto',
                    fontSize: 12,
                    color: min === item.porcent ? COLORS.red : COLORS.black,
                  }}>
                  {`${item.porcent.toFixed()}%`}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
