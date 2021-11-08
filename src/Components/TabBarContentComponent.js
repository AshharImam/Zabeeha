import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import colors from '../Utils/colors';
import {fontSizeLarge, fontSizeSmall, screenHeight} from '../Utils/Dimensions';
import CartComponent from './CartComponent';

const TabBarContentComponent = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.primary}}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: responsiveFontSize(1),
          // alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            //   height: screenHeight * 0.05,
            width: '60%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.greyLightest,
            marginHorizontal: responsiveWidth(4),
            height: responsiveHeight(8),
            // paddingBottom: responsiveHeight(2),
            // paddingTop: responsiveHeight(2),

            borderRadius: responsiveFontSize(3),
          }}>
          {[0, 1, 2].map((i, index) => {
            if (index === 2) {
              return (
                <TouchableOpacity
                  key={index}
                  accessibilityRole="button"
                  onPress={() => navigation.navigate('ShopsScreen')}
                  onLongPress={() => navigation.navigate('ShopsScreen')}
                  style={{
                    width: responsiveWidth(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.greyLightest,
                    borderRadius: responsiveFontSize(2),
                    height: '70%',
                  }}>
                  <View
                    style={{
                      // backgroundColor: focused ? colors.secondary : colors.primary,
                      borderRadius: 100,
                      padding: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Fontisto
                      name="shopping-store"
                      color={colors.grey}
                      size={responsiveHeight(3.5)}
                    />
                  </View>
                </TouchableOpacity>
              );
            } else if (index != 2) {
              const route = state.routes[i];
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;
              const icon = options.tabBarIcon;

              const isFocused = state.index === i;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              return (
                <TouchableOpacity
                  key={i}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{
                    width: responsiveWidth(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isFocused
                      ? colors.greyLightest
                      : colors.greyLightest,
                    borderRadius: responsiveFontSize(2),
                    height: '70%',
                  }}>
                  {icon({
                    color: colors.grey,
                    focused: isFocused,
                    route: route,
                    options: {
                      onPress: onPress,
                    },
                  })}
                </TouchableOpacity>
              );
            }
          })}
        </View>
        <CartComponent />
      </View>
    </SafeAreaView>
  );
};

export default TabBarContentComponent;
