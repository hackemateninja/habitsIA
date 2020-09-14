import React, {memo} from 'react';
import {Text, View} from 'react-native';
import CardActivity from './CardActivity';
import DayStyles from '../styles/DayStyles';
import ScrollComponent from './ScrollComponent';
import CardEmptyData from './CardEmptyData';
import CardChallenge from "./CardChallenge";
import {FlatList} from 'react-native-gesture-handler';

export default ({
  data,
  title,
  color,
}: {
  data: Array<object>;
  title: string;
  color: any;
}) => {
  const titleStyle = {
    color: color.mainText,
    ...DayStyles.scrollTitle,
  };

  const Empty = memo(() => (
    <CardEmptyData
      color={color.cardBackground}
      colorText={color.mainText}
      title={`No hay ${title} aún`}
    />
  ));

  const Item = ({item}: {item: any})=>{
    return (
      <CardChallenge
        key={item.title}
        onPress={() => {}}
        timeToStart={item.timeToStart}
        colorText={color.mainText}
        background={color.cardBackground}
        isGrupal={item.isGrupal}
        started={item.started}
        title={item.title}
        description={item.description}
      />
    );
  }

  if (data.length < 1) {
    return <Empty />;
  } else {
    return (
      <>
        <View style={DayStyles.scrollContainer}>
          <Text style={titleStyle}>{title}</Text>
          <FlatList
            alwaysBounceHorizontal={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            indicatorStyle="black"
            keyExtractor={(item: any) => item.description}
            renderItem={Item}
          />
        </View>
      </>
    );
  }
};
