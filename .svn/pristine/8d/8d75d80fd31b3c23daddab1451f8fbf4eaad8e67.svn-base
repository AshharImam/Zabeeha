import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  screenHeight,
} from '../Utils/Dimensions';

const AppTextInputComponent = ({placeholder, value, style, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <Text style={{color: colors.darkText, fontSize: fontSizeSmall}}>
        {placeholder}
      </Text>
      <TextInput
        value={value}
        // placeholder={placeholder}
        placeholderTextColor={colors.darkText}
        style={[styles.textInput]}
        {...otherProps}
        editable={false}
      />
    </View>
  );
};

export default AppTextInputComponent;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    color: colors.darkText,
    backgroundColor: colors.grey,
    borderRadius: 5,
    padding: Platform.OS === 'ios' ? screenHeight * 0.01 : screenHeight * 0.005,
    marginVertical: screenHeight * 0.002,
    fontSize: fontSizeSmall * 1.2,
  },
  container: {
    marginVertical: screenHeight * 0.005,
    width: '100%',
    flex: 1,
  },
});
