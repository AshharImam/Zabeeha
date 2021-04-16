import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Easing,
} from 'react-native';
import colors from '../Utils/colors';
import profileImage from '../Assets/images/profile.png';
import ProfilePhotoComponent from './ProfilePhotoComponent';
import {selectUser} from '../features/userSlice';
import {useSelector} from 'react-redux';
import {
  fontSizeSmall,
  fontSizeXLarge,
  screenHeight,
  fontSizeMedium,
} from '../Utils/Dimensions';

const ProfileCardComponenet = () => {
  const user = useSelector(selectUser);
  const animatedTranslation = useState(new Animated.Value(-500))[0];
  // const animatedTranslation = new Animated.Value(-500);
  useEffect(() => {
    Animated.timing(animatedTranslation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
      easing: Easing.elastic(),
    }).start();
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateY: animatedTranslation}]},
      ]}>
      <ProfilePhotoComponent image={profileImage} />
      <View style={styles.right}>
        <Text style={{fontSize: fontSizeSmall, color: colors.white}}>
          Welcome,
        </Text>
        <Text style={{fontSize: fontSizeXLarge, color: colors.white}}>
          {user}
        </Text>
        <View style={styles.textCard}>
          <Text style={styles.cardText}>Card#: SC0001</Text>
          <Text style={styles.cardText}>Membership#: 12312312</Text>
          <Text style={styles.cardText}>No. of Dependent: 13</Text>
          <Text style={[styles.cardText, styles.balance]}>
            Balance: <Text style={{fontWeight: 'bold'}}>2,000</Text>
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ProfileCardComponenet;

const styles = StyleSheet.create({
  container: {
    // flex: 0.3,
    height: Dimensions.get('screen').height * 0.25,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 20,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
  },

  right: {
    flex: 1,
    height: screenHeight * 0.2,

    paddingLeft: 10,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  textCard: {
    backgroundColor: colors.secondary,
    // height: '100%',
    flex: 1,
    borderRadius: 10,
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  cardText: {fontSize: fontSizeSmall, color: colors.darkText},
  balance: {
    fontSize: fontSizeMedium,
    color: colors.primary,
  },

  // box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ),
  // backdrop-filter: blur( 4px ),
  // -webkit-backdrop-filter: blur( 4px ),
  // border-radius: 10px,
  // border: 1px solid rgba( 255, 255, 255, 0.18 ),
});
