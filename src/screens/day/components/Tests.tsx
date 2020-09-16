import React, {memo} from 'react';
import CardEmptyData from './CardEmptyData';
import CardTest from './CardTest';
import {Text, View} from 'react-native';
import DayStyles from '../styles/DayStyles';
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
      <CardTest
        key={item.title}
        onPress={() => {}}
        background={color.cardBackground}
        colorText={color.mainText}
        circleColor={color.backGroundScreen}
        title={item.title}
        description={item.description}
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
            keyExtractor={(item: any) => item.id}
            renderItem={Item}
          />
        </View>
      </>
    );
  }
};
