import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import colors from '../Utils/colors';
import {fontSizeSmall, screenHeight} from '../Utils/Dimensions';

const TabBarContentComponent = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: colors.primary}}>
      <View
        style={{
          flexDirection: 'row',
          //   height: screenHeight * 0.05,
          justifyContent: 'center',
          alignItems: 'flex-end',
          backgroundColor: colors.primary,
          paddingBottom:
            Platform.OS === 'ios' ? screenHeight * 0.03 : screenHeight * 0.02,
          paddingTop:
            Platform.OS === 'ios' ? screenHeight * 0.01 : screenHeight * 0.01,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const icon = options.tabBarIcon;

          const isFocused = state.index === index;

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
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {icon({
                color: colors.secondary,
                focused: isFocused,
                route: route,
                options: {
                  onPress: onPress,
                },
              })}
              {/* <Text
                style={{
                  color: isFocused ? '#673ab7' : '#222',
                  fontSize: fontSizeSmall,
                }}>
                {label} here
              </Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBarContentComponent;
