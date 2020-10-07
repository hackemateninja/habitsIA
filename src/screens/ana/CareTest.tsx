import React, {useEffect, useState} from 'react';
import CareStyles from '../care/styles/CareStyles';
import Chip from './components/Chip';
import Bubble from './components/Bubble';
// @ts-ignore
import {connect} from 'react-redux';
import {GLOBAL_STYLES} from '../../constants';
import {GradientContainer, Header} from '../../components';
import {ScrollView, View} from 'react-native';
import {ActionCreator} from 'redux';
import {asyncGetTest} from '../../state/thunks';

const CareTest = ({navigation, theme, care, getTest}: any) => {
  const [question, setQuestion] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getTest();
  }, []);

  const chips = [
    {
      title: 'Nunca',
      value: 1,
    },
    {
      title: 'Poco',
      value: 2,
    },
    {
      title: 'A veces',
      value: 3,
    },
    {
      title: 'Mucho',
      value: 4,
    },
    {
      title: 'Siempre',
      value: 5,
    },
  ];
  const opts = [
    {
      title: 'Iniciar',
      value: 1,
    },
  ];

  const chipContainerStyle = {
    backgroundColor: theme.colors.bubbleIn,
    ...CareStyles.bottomChipContainer,
  };

  const back = () => {
    navigation.goBack();
  };


  return (
    <GradientContainer
      topColor={theme.colors.topAna}
      bottomColor={theme.colors.backGroundAna}>
      <Header
        title={care.careTest.title}
        textColor={theme.colors.headerTextAna}
        background={theme.colors.topAna}
        hasBack={true}
        leftAction={back}
      />

      <ScrollView
        alwaysBounceVertical={true}
        style={{
          backgroundColor: theme.colors.backGroundAna,
          flexDirection: 'column',
          height: '100%',
          ...GLOBAL_STYLES.screenContainer,
        }}>
        {data.map((i, idx) => {
          return (
            <Bubble
              key={idx.toString()}
              color={theme.colors}
              type={i.type}
              text={i.text}
            />
          );
        })}
      </ScrollView>
      <View style={chipContainerStyle}>
        {data.length === 1
          ? opts.map((i) => {
              return (
                <Chip
                  key={i.title}
                  color={theme.colors.bubbleOut}
                  colorText={theme.colors.bubbleOutText}
                  isLarge={true}
                  title={i.title}
                />
              );
            })
          : chips.map((i) => {
              return (
                <Chip
                  key={i.title}
                  color={theme.colors.bubbleOut}
                  colorText={theme.colors.bubbleOutText}
                  title={i.title}
                />
              );
            })}
      </View>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = (dispatch: ActionCreator<any>) => ({
  getTest: () => dispatch(asyncGetTest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareTest);
