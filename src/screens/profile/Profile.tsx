import React from 'react';
// @ts-ignore
import {connect} from 'react-redux';
import {Chip, GradientContainer, Header} from '../../components';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Activities from '../day/components/Activities';
import {Image, Text, View} from 'react-native';
import {COLORS, GLOBAL_STYLES, LAYOUT} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
const image =
  'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg';
const Profile = ({navigation, theme, day, auth}: any) => {
  const leftAction = () => {
    navigation.openDrawer();
  };

  return (
    <GradientContainer
      topColor={theme.colors.backGroundScreen}
      bottomColor={theme.colors.backGroundScreen}>
      <Header
        textColor={theme.colors.mainText}
        hasBack={false}
        title="Mi perfil"
        background={theme.colors.backGroundScreen}
        leftAction={leftAction}
      />
      <ScrollView>
        <View style={GLOBAL_STYLES.rowAroundCenter}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              padding: 2,
              marginRight: 5,
            }}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 20}}
              resizeMode="cover"
              source={{uri: auth.login.avatar || image}}
            />
          </View>
          <Text
            style={{
              color: theme.colors.mainText,
              ...GLOBAL_STYLES.h6,
              textAlign: 'center',
            }}>
            {auth.login.user}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 10,
            ...GLOBAL_STYLES.rowBetweenCenter,
          }}>
          <View style={{width: '48%', ...GLOBAL_STYLES.rowAroundCenter}}>
            <Text
              style={{
                color: theme.colors.mainText,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos Totales
            </Text>
            <Chip
              textColor={COLORS.black}
              width={50}
              color={COLORS.primary}
              title="450"
            />
          </View>
          <View style={{width: '48%', ...GLOBAL_STYLES.rowAroundCenter}}>
            <Text
              style={{
                color: theme.colors.mainText,
                ...GLOBAL_STYLES.smallText,
              }}>
              Puntos Mensuales
            </Text>
            <Chip
              textColor={COLORS.white}
              width={50}
              color={COLORS.hardBlueSecondary}
              title="450"
            />
          </View>
        </View>
        <View style={{padding: 20}}>
          <View
            style={{
              backgroundColor: theme.colors.cardBackground,
              width: '100%',
              padding: 10,
              height: LAYOUT.window.height * 0.2,
              borderRadius: 8,
              ...GLOBAL_STYLES.columnBetweenCenter,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: theme.colors.mainText,
                ...GLOBAL_STYLES.smallTextBold,
              }}>
              RACHA
            </Text>
            <View style={{...GLOBAL_STYLES.rowAroundCenter, width: '100%'}}>
              <View style={{...GLOBAL_STYLES.columnBetweenCenter}}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                  }}>
                  8 días
                </Text>
                <Text style={{...GLOBAL_STYLES.smallText, color: COLORS.grey}}>
                  Racha actual
                </Text>
              </View>
              <View style={{...GLOBAL_STYLES.columnBetweenCenter}}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.primary,
                  }}>
                  16 días
                </Text>
                <Text style={{...GLOBAL_STYLES.smallText, color: COLORS.grey}}>
                  Racha más larga
                </Text>
              </View>
            </View>
            <View
              style={{
                borderTopColor: COLORS.grey,
                borderTopWidth: 0.3,
                width: '100%',
                paddingVertical: 10,
                ...GLOBAL_STYLES.rowBetweenCenter,
              }}>
              <View style={GLOBAL_STYLES.columnBetweenCenter}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.grey,
                    marginBottom: 10,
                  }}>
                  Lu
                </Text>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                    marginBottom: 10,
                  }}>
                  11
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.greenHard,
                  }}
                />
              </View>
              <View style={GLOBAL_STYLES.columnBetweenCenter}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.grey,
                    marginBottom: 10,
                  }}>
                  Ma
                </Text>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                    marginBottom: 10,
                  }}>
                  12
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.greenHard,
                  }}
                />
              </View>
              <View style={GLOBAL_STYLES.columnBetweenCenter}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.grey,
                    marginBottom: 10,
                  }}>
                  Mi
                </Text>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                    marginBottom: 10,
                  }}>
                  13
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.greenHard,
                  }}
                />
              </View>
              <View style={GLOBAL_STYLES.columnBetweenCenter}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.grey,
                    marginBottom: 10,
                  }}>
                  Ju
                </Text>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                    marginBottom: 10,
                  }}>
                  14
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.greenHard,
                  }}
                />
              </View>
              <View style={GLOBAL_STYLES.columnBetweenCenter}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.grey,
                    marginBottom: 10,
                  }}>
                  Vi
                </Text>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                    marginBottom: 10,
                  }}>
                  15
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.greenHard,
                  }}
                />
              </View>
              <View style={GLOBAL_STYLES.columnBetweenCenter}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.grey,
                    marginBottom: 10,
                  }}>
                  Sa
                </Text>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                    marginBottom: 10,
                  }}>
                  16
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.greenHard,
                  }}
                />
              </View>
              <View style={GLOBAL_STYLES.columnBetweenCenter}>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: COLORS.grey,
                    marginBottom: 10,
                  }}>
                  Do
                </Text>
                <Text
                  style={{
                    ...GLOBAL_STYLES.smallTextBold,
                    color: theme.colors.mainText,
                    marginBottom: 10,
                  }}>
                  17
                </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.greenHard,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{marginLeft: 15}}>
          <Activities
            data={day.activities}
            color={theme.colors}
            title="Actividades"
          />
        </View>
        <View
          style={{paddingHorizontal: 20, marginTop:10, ...GLOBAL_STYLES.rowBetweenCenter}}>
          <View
            style={{
              width: '30%',
              height: LAYOUT.window.height * 0.18,
              borderRadius: 8,
              backgroundColor: theme.colors.cardBackground,
              ...GLOBAL_STYLES.columnEvenlyCenter,
            }}>
            <TouchableOpacity
              style={{width: '70%', ...GLOBAL_STYLES.rowBetweenCenter}}>
              <Text
                style={{
                  ...GLOBAL_STYLES.superSmallText,
                  color: COLORS.primary,
                  marginRight: 25,
                }}>
                VER MAS
              </Text>
              <Icon
                name="ios-chevron-forward"
                size={18}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.h1}}>
              540
            </Text>
            <Text style={{color: COLORS.grey, ...GLOBAL_STYLES.smallText}}>
              pasos de hoy
            </Text>
            <Icon
              name="ios-walk-outline"
              size={40}
              color={COLORS.greenPastel}
            />
          </View>
          <View
            style={{
              width: '30%',
              height: LAYOUT.window.height * 0.18,
              borderRadius: 8,
              backgroundColor: theme.colors.cardBackground,
              ...GLOBAL_STYLES.columnEvenlyCenter,
            }}>
            <TouchableOpacity
              style={{width: '70%', ...GLOBAL_STYLES.rowBetweenCenter}}>
              <Text
                style={{
                  ...GLOBAL_STYLES.superSmallText,
                  color: COLORS.primary,
                  marginRight: 25,
                }}>
                VER MAS
              </Text>
              <Icon
                name="ios-chevron-forward"
                size={18}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.h1}}>
              35
            </Text>
            <Text style={{color: COLORS.grey, ...GLOBAL_STYLES.smallText}}>
              Minutos cardio
            </Text>
            <Icon name="ios-fitness-outline" size={40} color={COLORS.red} />
          </View>
          <View
            style={{
              width: '30%',
              height: LAYOUT.window.height * 0.18,
              borderRadius: 8,
              backgroundColor: theme.colors.cardBackground,
              ...GLOBAL_STYLES.columnEvenlyCenter,
            }}>
            <TouchableOpacity
              style={{width: '70%', ...GLOBAL_STYLES.rowBetweenCenter}}>
              <Text
                style={{
                  ...GLOBAL_STYLES.superSmallText,
                  color: COLORS.primary,
                  marginRight: 25,
                }}>
                VER MAS
              </Text>
              <Icon
                name="ios-chevron-forward"
                size={18}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.h1}}>
              65
            </Text>
            <Text style={{color: COLORS.grey, ...GLOBAL_STYLES.smallText}}>
              Horas sueño
            </Text>
            <Icon name="ios-moon-outline" size={40} color={COLORS.primary} />
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginVertical: 20,...GLOBAL_STYLES.rowBetweenCenter}}>
          <View
            style={{
              width: '48%',
              height: LAYOUT.window.height * 0.15,
              borderRadius: 8,
              padding: 8,
              backgroundColor: theme.colors.cardBackground,
              ...GLOBAL_STYLES.columnBetweenStart,
            }}>
            <TouchableOpacity
              style={{width: '100%', ...GLOBAL_STYLES.rowBetweenCenter}}>
              <Text
                style={{
                  ...GLOBAL_STYLES.superSmallText,
                  color: COLORS.primary,
                }}>
                VER MAS
              </Text>
              <Icon
                name="ios-chevron-forward"
                size={18}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.smallTextBold}}>
              Screen time
            </Text>
            <View style={{width: '100%', ...GLOBAL_STYLES.rowBetweenCenter}}>
              <Icon name="ios-timer-outline" size={40} color={COLORS.blue} />
              <View style={{width: '50%', ...GLOBAL_STYLES.columnBetweenCenter}}>
                <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.h1}}>
                  12
                </Text>
                <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.smallTextBold}}>
                  horas
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '48%',
              height: LAYOUT.window.height * 0.15,
              borderRadius: 8,
              padding: 8,
              backgroundColor: theme.colors.cardBackground,
              ...GLOBAL_STYLES.columnBetweenStart,
            }}>
            <TouchableOpacity
              style={{width: '100%', ...GLOBAL_STYLES.rowBetweenCenter}}>
              <Text
                style={{
                  ...GLOBAL_STYLES.superSmallText,
                  color: COLORS.primary,
                }}>
                VER MAS
              </Text>
              <Icon
                name="ios-chevron-forward"
                size={18}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.smallTextBold}}>
              Factor de stress
            </Text>
            <View style={{width: '100%', ...GLOBAL_STYLES.rowBetweenCenter}}>
              <Icon name="ios-happy" size={40} color={COLORS.yellow} />
              <View style={{width: '50%', ...GLOBAL_STYLES.columnBetweenCenter}}>
                <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.h1}}>
                  62
                </Text>
                <Text style={{color: theme.colors.mainText, ...GLOBAL_STYLES.smallTextBold}}>
                  media
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </GradientContainer>
  );
};
const mapStateToProps = (state: object) => {
  return state;
};
const mapDispatchToProps = (dispatch: Event) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
