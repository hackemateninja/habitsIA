import React, {memo} from 'react';
import CardActivity from './CardActivity';
import CardEmptyData from './CardEmptyData';
import DayStyles from '../styles/DayStyles';
import {Text, View} from 'react-native';
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

  const Item = ({item}: {item: any}) => {
    return (
      <CardActivity
        key={item.description}
        onPress={() => {}}
        isHabit={item.isHabit}
        completed={item.completed}
        description={item.description}
        points={item.points}
        background={color.cardBackground}
        colorText={color.mainText}
      />
    );
  };

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
