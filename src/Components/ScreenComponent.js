import React from 'react';
import {
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../Utils/colors';
import {screenHeight} from '../Utils/Dimensions';

const ScreenComponent = ({
  children,
  style,
  color = colors.white,
  statusBarContentStyle = 'light-content',
}) => {
  return (
    <View style={{flex: 1, backgroundColor: color}}>
      <StatusBar barStyle={statusBarContentStyle} backgroundColor={color} />
      <SafeAreaView style={{flex: 1, backgroundColor: color}}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {/* <SafeAreaView style={{flex: 1}}> */}
          <View style={[{flex: 1}, style]}>{children}</View>
          {/* </SafeAreaView> */}
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </View>
  );
};

export default ScreenComponent;
