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

const ScreenComponent = ({children, style}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
        backgroundColor={colors.primary}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {/* <SafeAreaView style={{flex: 1}}> */}
        <View style={[styles.screen, styles]}>{children}</View>
        {/* </SafeAreaView> */}
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScreenComponent;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    // padding: 10,
    // backgroundColor: 'rgb(230,230,230)',
    height: screenHeight,
    backgroundColor: colors.secondary,
    padding: 10,
  },
});
