import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../Utils/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {screenHeight} from '../Utils/Dimensions';

const ProfilePhotoComponent = ({image, style}) => {
  return (
    <View style={[styles.contianer, style]}>
      <View style={styles.innerContainer}>
        {!image ? (
          <Fontisto
            name="person"
            size={screenHeight * 0.1}
            color={colors.secondary}
          />
        ) : (
          <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="scale"
          />
        )}
      </View>
    </View>
  );
};

export default ProfilePhotoComponent;

const styles = StyleSheet.create({
  contianer: {
    height: screenHeight * 0.175,
    width: screenHeight * 0.175,
    borderRadius: 1000,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  innerContainer: {
    width: '90%',
    height: '90%',
    borderRadius: 1000,
    backgroundColor: colors.primary,
    overflow: 'hidden',

    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
});
