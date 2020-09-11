/*
 * Pantalla del oneboarding
 * */
import React, {useState} from 'react';
import OneBoardingItem from './components/OneBoardingItem';
import CareStyles from './styles/CareStyles';
import {GradientContainer} from '../../components';
// @ts-ignore
import {connect} from 'react-redux';
import {Pager, PagerProvider} from '@crowdlinker/react-native-pager';
import {Text, View} from 'react-native';

const CareOneBoarding = ({navigation, theme, auth}: any) => {
  //estado local
  const [activeIndex, setActiveIndex] = useState(0);

  //funcion que selecciona el item actual
  function onChange(nextIndex: number) {
    setActiveIndex(nextIndex);
  }
  const items = auth.login.messageBoarding;
  return (
    <GradientContainer
      topColor={theme.colors.topGradient}
      bottomColor={theme.colors.bottomGradient}>
      <PagerProvider activeIndex={activeIndex} onChange={onChange}>
        <Pager>
          {items.map((i: any) => {
            return (
              <OneBoardingItem
                // @ts-ignore
                key={i.image}
                // @ts-ignore
                image={i.image}
                // @ts-ignore
                title={i.title}
                // @ts-ignore
                description={i.description}
                colorButton={theme.colors.secondaryButton}
                colorButtonText={theme.colors.secondaryButtonText}
                colorDescription={theme.colors.careDescription}
                colorTitle={theme.colors.careTitle}
                itemNumber={activeIndex}
                action={() => navigation.navigate('Drawer')}
              />
            );
          })}
        </Pager>
        <View style={CareStyles.dotPager}>
          {items.map((i: any, idx: number) => {
            const style = {
              fontSize: 70,
              color:
                idx === activeIndex
                  ? theme.colors.pagerSelected
                  : theme.colors.pagerUnselected,
            };
            return (
              <Text key={idx} style={style}>
                .
              </Text>
            );
          })}
        </View>
      </PagerProvider>
    </GradientContainer>
  );
};

//exporta el estado a los props
const mapStateToProps = (state: any) => {
  return state;
};
//exporta las acciones y las pasa por los props
const mapDispatchToProps = () => ({});
//retorna el estado y exporta la pantalla
export default connect(mapStateToProps, mapDispatchToProps)(CareOneBoarding);
