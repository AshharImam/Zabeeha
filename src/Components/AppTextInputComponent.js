import React, {useEffect} from 'react';
import {useRef} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  screenHeight,
} from '../Utils/Dimensions';
import {openSans} from '../Utils/fonts';

const AppTextInputComponent = ({
  placeholder,
  value,
  style,
  onChangeText,
  placeholderTextColor = colors.greyLight,
  borderColor = colors.white,
  icon,
  textInputRef,
  color = colors.white,
  onSubmitEditing = () => {},
  blurOnSubmit = true,
  error = false,
  ...otherProps
}) => {
  const inputRef = useRef();
  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: error ? colors.red : borderColor,
            borderBottomWidth: 2,
            marginVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidth(1.5),
          },
          style,
        ]}>
        {icon && (
          <View
            style={{
              width: responsiveWidth(4),
            }}>
            {icon()}
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          ref={ref => {
            if (textInputRef) {
              textInputRef.current = ref;
            }
            inputRef.current = ref;
          }}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={error ? colors.red : placeholderTextColor}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={onSubmitEditing}
          style={[
            [
              styles.textInput,
              {
                paddingLeft: icon ? responsiveWidth(2) : 0,
                color: error ? colors.red : color,
              },
            ],
          ]}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppTextInputComponent;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    color: colors.white,
    backgroundColor: '#0000',
    paddingVertical: responsiveHeight(1.5),
    fontSize: fontSizeMedium,
    fontFamily: openSans,
  },
  container: {
    marginVertical: screenHeight * 0.005,
    width: '100%',
  },
});
