import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Linking,
  Modal,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

import colors from '../Utils/colors';
import AppTextComponent from '../Components/AppTextComponent';
import {
  fontSizeMedium,
  fontSizeSmall,
  screenHeight,
  screenWidth,
} from '../Utils/Dimensions';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const ShopsScreen = () => {
  const navigation = useNavigation();
  const mapRef = useRef(null);

  const [data, setData] = useState([]);
  const [marginBottom, setMarginBottom] = useState(1);
  const [currentLocation, setCurrentLocation] = useState({});

  useEffect(() => {
    // getMerchantsAPI()
    //   .then(res => {
    //     setData(res);
    //     const temp = res.filter(item => item.MerchantID == 16456);
    //     // console.warn('MERCHANTSCREEN | USEEFFECT | 33', temp);
    //   })
    //   .catch(e => console.log(e));
  }, []);
  useEffect(() => {
    checkPermissionForLocation();
  }, []);

  const checkPermissionForLocation = () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        .then(result => {
          if (result === RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
              // 'MERCHANTSCREEN | checkPermissionForLocation | 72';

              if (result === RESULTS.GRANTED) {
                getCurrentLocation();
              }
            });
          }
        })
        .then(e => console.log('ERROR', e));
    } else {
      check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
        .then(res => {
          if (res === RESULTS.GRANTED) {
            RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
              interval: 10000,
              fastInterval: 5000,
            })
              .then(data => {
                setTimeout(() => {
                  getCurrentLocation();
                }, 500);
              })
              .catch(e => console.log(e));
          } else {
            request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION).then(result => {
              if (result === RESULTS.GRANTED) {
                RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                  interval: 10000,
                  fastInterval: 5000,
                })
                  .then(data => {
                    setTimeout(() => {
                      getCurrentLocation();
                    }, 500);
                  })
                  .catch(e => console.log(e));
              }
            });
          }
        })
        .catch(e =>
          console.log(
            'MERCHANTSCREEN | checkPermissionForLocation | ANDROID | ERROR | 82',
            e,
          ),
        );
    }
  };

  const getCurrentLocation = () => {
    try {
      Geolocation.getCurrentPosition(
        ({coords: {latitude, longitude}}) => {
          // console.log('COORDINATES', latitude, longitude);
          const temp = {
            latitude,
            longitude,
            latitudeDelta: 0.12852677962816728,
            longitudeDelta: 0.07270161062477598,
          };
          // console.log('MERCHANTSCREEN | getCurrentLocation | 94', temp);
          setCurrentLocation(temp);
          setTimeout(() => goToInitialLocation(temp), 500);
          // console.log(res);
        },
        e => {
          console.log(
            'MERCHANTSCREEN | checkPermissionForLocation | GETLOCATION | ERROR | 111',
            e,
          );
          if (e.code === 2) {
            if (Platform.OS === 'android') {
              // Linking.openSettings();
            } else {
              Linking.canOpenURL('app-settings:')
                .then(supported => {
                  if (!supported) {
                    console.log("Can't handle settings url");
                  } else {
                    return Linking.openURL('app-settings:');
                  }
                })
                .catch(err => console.error('An error occurred', err));
            }
          }
        },
      );
    } catch (error) {
      console.log(
        'MERCHANTSCREEN | checkPermissionForLocation | GETLOCATION | ERROR | 107',
        error,
      );
    }
  };
  const goToInitialLocation = temp => {
    // console.log('UPDATIUNG REFGIONs');
    let initialRegion = Object.assign({}, temp);
    mapRef.current.animateToRegion(initialRegion, 1000);
  };

  const _onMapReady = () => {
    setMarginBottom(0);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View style={[styles.container]}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={[styles.map, {marginBottom: marginBottom}]}
          onMapReady={_onMapReady}
          initialRegion={{
            latitude: 24.860966,
            longitude: 66.990501,
            latitudeDelta: 0.12852677962816728,
            longitudeDelta: 0.07270161062477598,
          }}
          region={{
            latitude: 24.860966,
            longitude: 66.990501,
            latitudeDelta: 0.12852677962816728,
            longitudeDelta: 0.07270161062477598,
          }}
          showsUserLocation
          showsMyLocationButton={true}>
          <Marker
            coordinate={{latitude: 24.799126, longitude: 67.046607}}
            onCalloutPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=24.799126,67.046607',
              )
            }>
            <Callout tooltip={true}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/search/?api=1&query=24.799126,67.046607',
                  );
                }}
                style={{
                  backgroundColor: colors.redDarkest,
                  width: '100%',
                  borderRadius: 10,
                }}>
                <AppTextComponent style={{fontSize: fontSizeMedium}}>
                  Zabeeha Karachi Branch
                </AppTextComponent>
              </TouchableOpacity>
            </Callout>
          </Marker>
          <Marker
            coordinate={{latitude: 24.8721266, longitude: 67.058495}}
            onCalloutPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=24.8721266,67.058495',
              )
            }>
            <Callout tooltip={true}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/search/?api=1&query=24.8721266,67.058495',
                  );
                }}
                style={{
                  backgroundColor: colors.redDarkest,
                  width: '100%',
                  borderRadius: 10,
                }}>
                <AppTextComponent style={{fontSize: fontSizeMedium}}>
                  Zabeeha Tariq Road Branch
                </AppTextComponent>
              </TouchableOpacity>
            </Callout>
          </Marker>
          <Marker
            coordinate={{latitude: 24.8757184, longitude: 67.0849097}}
            onCalloutPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=24.8757184,67.0849097',
              )
            }>
            <Callout tooltip={true}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/search/?api=1&query=24.8757184,67.0849097',
                  );
                }}
                style={{
                  backgroundColor: colors.redDarkest,
                  width: '100%',
                  borderRadius: 10,
                  padding: responsiveFontSize(1),
                }}>
                <AppTextComponent style={{fontSize: fontSizeMedium}}>
                  Zabeeha Tipu Sultan Branch
                </AppTextComponent>
              </TouchableOpacity>
            </Callout>
          </Marker>
          <Marker
            coordinate={{latitude: 24.9292063, longitude: 67.0399582}}
            onCalloutPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=24.9292063,67.0399582',
              )
            }>
            <Callout tooltip={true}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/search/?api=1&query=24.9292063,67.0399582',
                  );
                }}
                style={{
                  backgroundColor: colors.redDarkest,
                  width: '100%',
                  borderRadius: 10,
                }}>
                <AppTextComponent style={{fontSize: fontSizeMedium}}>
                  Zabeeha Hyderi Branch
                </AppTextComponent>
              </TouchableOpacity>
            </Callout>
          </Marker>
          <Marker
            coordinate={{latitude: 24.9357058, longitude: 67.139433}}
            onCalloutPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=24.9357058,67.139433',
              )
            }>
            <Callout tooltip={true}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/search/?api=1&query=24.9357058,67.139433',
                  );
                }}
                style={{
                  backgroundColor: colors.redDarkest,
                  width: '100%',
                  borderRadius: 10,
                }}>
                <AppTextComponent style={{fontSize: fontSizeMedium}}>
                  Zabeeha Al Jadeed Branch
                </AppTextComponent>
              </TouchableOpacity>
            </Callout>
          </Marker>
          <Marker
            coordinate={{latitude: 24.9723755, longitude: 67.0645105}}
            onCalloutPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=24.9723755,67.0645105',
              )
            }>
            <Callout tooltip={true}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/search/?api=1&query=24.9723755,67.0645105',
                  );
                }}
                style={{
                  backgroundColor: colors.redDarkest,
                  width: '100%',
                  borderRadius: 10,
                }}>
                <AppTextComponent style={{fontSize: fontSizeMedium}}>
                  Zabeeha North Karachi Branch
                </AppTextComponent>
              </TouchableOpacity>
            </Callout>
          </Marker>
          <Marker
            coordinate={{latitude: 24.9380912, longitude: 67.1516052}}
            onCalloutPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=24.9380912,67.1516052',
              )
            }>
            <Callout tooltip={true}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.google.com/maps/search/?api=1&query=24.9380912,67.1516052',
                  );
                }}
                style={{
                  backgroundColor: colors.redDarkest,
                  width: '100%',
                  borderRadius: 10,
                }}>
                <AppTextComponent style={{fontSize: fontSizeMedium}}>
                  Zabeeha Safooraa Branch
                </AppTextComponent>
              </TouchableOpacity>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </View>
  );
};
export default ShopsScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 0,
    backgroundColor: colors.secondary,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapFab: {
    position: 'absolute',
    marginRight: 10,
    marginBottom: Platform.OS === 'ios' ? 80 : 10,
    right: 0,
    bottom: 0,
    backgroundColor: colors.secondary,
  },
});
