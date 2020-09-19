import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {GradientContainer, Header, IconButton} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, GLOBAL_STYLES} from '../../constants';
import {Image, Text, View} from 'react-native';
// @ts-ignore

const Courses = ({navigation, theme}: any) => {
  const leftAction = () => {
    navigation.goBack();
  };

  const scrollStyle = {
    paddingHorizontal: 20,
    ...GLOBAL_STYLES.screen,
  };
  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={true}
        title="Cursos"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <ScrollView style={scrollStyle}>
        <Text
          style={{
            color: theme.colors.mainText,
            marginBottom: 20,
            ...GLOBAL_STYLES.h5,
          }}>
          Categoría del curso
        </Text>
        <View
          style={{
            width: '100%',
            backgroundColor: theme.colors.cardBackground,
            borderRadius: 14,
            padding: 8,
            borderWidth: 0.3,
            marginBottom: 10,
            borderColor: COLORS.hardBlueSecondary,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '20%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.primary,
              }}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode={'cover'}
                source={{
                  uri:
                    'https://static.elcomercio.es/www/multimedia/202002/10/media/cortadas/respiracion-ku8B-U100111390748A1G-1248x770@El%20Comercio.jpg',
                }}
              />
            </View>
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.p,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              Respiracion
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                color: COLORS.grey,
                textAlign: 'left',
              }}>
              Aprenda a respirar sino se muere
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.primary,
                  marginRight: '45%',
                }}>
                3/10
              </Text>
            </View>
          </View>
          <View style={GLOBAL_STYLES.columnBetweenCenter}>
            <IconButton
              onPress={() => {navigation.navigate('Course')}}
              size={26}
              icon="ios-chevron-forward-outline"
              iconColor={COLORS.hardPrimary}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: theme.colors.cardBackground,
            borderRadius: 14,
            padding: 8,
            borderWidth: 0.3,
            marginBottom: 10,
            borderColor: COLORS.hardBlueSecondary,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '20%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.primary,
              }}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode={'cover'}
                source={{
                  uri:
                    'https://cdn.kiwilimon.com/recetaimagen/34016/39654.jpg',
                }}
              />
            </View>
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.p,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              Comer saludable
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                color: COLORS.grey,
                textAlign: 'left',
              }}>
              Aprenda a comer saludable sino se muere
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.primary,
                  marginRight: '45%',
                }}>
                3/10
              </Text>
            </View>
          </View>
          <View style={GLOBAL_STYLES.columnBetweenCenter}>
            <IconButton
              onPress={() => {}}
              size={26}
              icon="ios-chevron-forward-outline"
              iconColor={COLORS.hardPrimary}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: theme.colors.cardBackground,
            borderRadius: 14,
            padding: 8,
            borderWidth: 0.3,
            marginBottom: 10,
            borderColor: COLORS.hardBlueSecondary,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '20%', ...GLOBAL_STYLES.columnBetweenCenter}}>
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.primary,
              }}>
              <Image
                style={{width: '100%', height: '100%'}}
                resizeMode={'cover'}
                source={{
                  uri:
                    'https://tendencybook.com/wp-content/uploads/2020/01/115760-15.jpg',
                }}
              />
            </View>
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.p,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              Rutina de ejercicio
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                color: COLORS.grey,
                textAlign: 'left',
              }}>
              Aprenda a correr sino se muere
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.primary,
                  marginRight: '45%',
                }}>
                3/10
              </Text>
            </View>
          </View>
          <View style={GLOBAL_STYLES.columnBetweenCenter}>
            <IconButton
              onPress={() => {}}
              size={26}
              icon="ios-chevron-forward-outline"
              iconColor={COLORS.hardPrimary}
            />
          </View>
        </View>
      </ScrollView>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
