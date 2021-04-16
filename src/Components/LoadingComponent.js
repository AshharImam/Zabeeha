import React from 'react';
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  screenWidth,
} from '../Utils/Dimensions';

const LoadingComponent = props => {
  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator
          size={Platform.OS === 'ios' ? 'large' : screenWidth * 0.15}
          color={colors.secondary}
        />
        {props.text && (
          <Text
            style={{
              color: colors.secondary,
              marginTop: 20,
              fontSize: fontSizeSmall,
            }}>
            {props.text}
          </Text>
        )}
      </SafeAreaView>
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({});
