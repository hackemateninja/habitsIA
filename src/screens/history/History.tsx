import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {Chip, GradientContainer, Header, IconButton} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS, GLOBAL_STYLES} from '../../constants';
import {Text, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';

const History = ({navigation, theme}: any) => {
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
        title="Mi historial"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <ScrollView style={scrollStyle}>
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
            <Text style={{color: COLORS.hardPrimary, ...GLOBAL_STYLES.h4}}>
              3
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.hardGrey,
                marginBottom: 5,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos ganados
            </Text>
            <Chip
              color={COLORS.primary}
              width="80%"
              title="Habito"
              textColor={COLORS.white}
            />
          </View>
          <View style={{width: '70%', ...GLOBAL_STYLES.columnBetweenStart}}>
            <Text
              style={{
                ...GLOBAL_STYLES.h6,
                color: theme.colors.mainText,
                textAlign: 'left',
              }}>
              La clave es el exito
            </Text>
            <Text
              style={{
                ...GLOBAL_STYLES.smallText,
                marginVertical: 12,
                color: COLORS.hardGrey,
                textAlign: 'left',
              }}>
              realizar un agradecimiento al dia
            </Text>
            <View
              style={{
                marginTop: 2,
                paddingTop: 8,
                borderTopWidth: 0.3,
                borderTopColor: COLORS.softGrey,
                width: '100%',
                ...GLOBAL_STYLES.rowStartCenter,
              }}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.green,
                }}
              />
              <Text
                style={{
                  ...GLOBAL_STYLES.smallText,
                  color: COLORS.hardGrey,
                  marginRight: '45%',
                }}>
                COMPLETADA
              </Text>
              <Icon name={'ios-star'} size={18} color={COLORS.yellow} />
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
export default connect(mapStateToProps, mapDispatchToProps)(History);
