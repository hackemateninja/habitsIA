/*
 * Grafico progressivo circular que va en los resultados de la encuesta care
 * y en la pantalla de perfil
 * */

//importaciones múltiples al final
import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {Text, View} from 'react-native';
import {COLORS, LAYOUT, GLOBAL_STYLES} from '../constants';
import styles from './styles';

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
    <View style={styles.chartContainer}>
      <View style={styles.chartLeft}>
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
      <View style={styles.chartRight}>
        {CARE_RESULT_LOCAL.map((item: any) => {
          return (
            <View style={styles.chartRightItem} key={item.id}>
              <View style={styles.chartRightTextContainer}>
                <View
                  style={{
                    backgroundColor: item.color,
                    ...styles.chartRightTextLabel,
                  }}
                />
                <Text style={GLOBAL_STYLES.smallTextBold}>{item.label}</Text>
              </View>
              <View style={styles.chartRightTextContainerPercentage}>
                <Text
                  style={{
                    color: min === item.porcent ? COLORS.red : COLORS.black,
                    ...styles.chartRightTextPercentage,
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
