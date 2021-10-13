import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import AppTextComponent from '../Components/AppTextComponent';
import LogoComponent from '../Components/LogoComponent';
import ScreenComponent from '../Components/ScreenComponent';
import colors from '../Utils/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSizeLarge, fontSizeMedium} from '../Utils/Dimensions';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ContactUsScreen = () => {
  const sendMail = email => {
    Linking.canOpenURL('mailto:' + email).then(supported => {
      if (!supported) {
        Alert.alert('Email is not available');
      } else {
        return Linking.openURL('mailto:' + email);
      }
    });
  };

  return (
    <View style={{backgroundColor: colors.primary}}>
      <SafeAreaView>
        <ScrollView
          style={{
            paddingHorizontal: responsiveFontSize(2),
          }}>
          <LogoComponent
            style={{
              alignSelf: 'center',
            }}
          />

          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL('tel:+923319223342');
              }}
              underlayColor={colors.greyLight}>
              <View>
                <AppTextComponent
                  style={{fontSize: fontSizeLarge, color: colors.redDarkest}}>
                  Phone
                </AppTextComponent>
                <View style={styles.contactContainer}>
                  <AntDesign
                    name="phone"
                    size={fontSizeMedium}
                    color={colors.white}
                  />
                  <AppTextComponent style={{marginLeft: responsiveWidth(2)}}>
                    0331-9223342
                  </AppTextComponent>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                sendMail('complaints@fml.com.pk');
              }}
              underlayColor={colors.greyLight}>
              <View style={{paddingVertical: responsiveFontSize(2)}}>
                <AppTextComponent
                  style={{fontSize: fontSizeLarge, color: colors.redDarkest}}>
                  Email
                </AppTextComponent>
                <View style={styles.contactContainer}>
                  <Fontisto
                    name="email"
                    size={fontSizeMedium}
                    color={colors.white}
                  />
                  <AppTextComponent style={{marginLeft: responsiveWidth(2)}}>
                    complaints@fml.com.pk
                  </AppTextComponent>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                Linking.openURL('https://goo.gl/maps/K1HoBiteVXFvgHqJ7');
                // 24.7988372,66.976502
              }}
              underlayColor={colors.greyLight}>
              <View>
                <AppTextComponent
                  style={{fontSize: fontSizeLarge, color: colors.redDarkest}}>
                  Address
                </AppTextComponent>
                <View
                  style={[
                    styles.contactContainer,
                    {
                      alignItems: 'flex-start',
                    },
                  ]}>
                  <Ionicons
                    name="location-outline"
                    size={fontSizeMedium}
                    color={colors.white}
                    style={{
                      top: responsiveHeight(0.3),
                    }}
                  />
                  <AppTextComponent
                    style={{marginLeft: responsiveWidth(2), flex: 1}}>
                    15-C, Street II, Badar Commercial Phase 5, DHA Extension,
                    Karachi Tel: 0213-516-1291 upto 93
                  </AppTextComponent>
                </View>
              </View>
            </TouchableHighlight>
            <View style={{paddingVertical: responsiveFontSize(2)}}>
              <AppTextComponent
                style={{fontSize: fontSizeLarge, color: colors.redDarkest}}>
                For Commercial Slaughtering Orders
              </AppTextComponent>
              <View>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Lt. Col. Ashraf Haider (Retd)
                </AppTextComponent>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Resident Manager{' '}
                </AppTextComponent>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    Linking.openURL('tel:+92336232066');
                  }}>
                  <View style={styles.contactContainer}>
                    <AntDesign
                      name="phone"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent
                      style={{marginLeft: responsiveWidth(2), flex: 1}}>
                      +92 336 232066
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    sendMail('ashraf.haider@fml.com.pk');
                  }}>
                  <View style={styles.contactContainer}>
                    <Fontisto
                      name="email"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent style={{marginLeft: responsiveWidth(2)}}>
                      ashraf.haider@fml.com.pk
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{paddingVertical: responsiveFontSize(2)}}>
              <AppTextComponent
                style={{fontSize: fontSizeLarge, color: colors.redDarkest}}>
                For International Orders & Franchising
              </AppTextComponent>
              <View>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Mr. Rizwan Khan
                </AppTextComponent>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Manager Exports{' '}
                </AppTextComponent>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    Linking.openURL('tel:+923215181915');
                  }}>
                  <View style={styles.contactContainer}>
                    <AntDesign
                      name="phone"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent
                      style={{marginLeft: responsiveWidth(2), flex: 1}}>
                      +92 321 5181915
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    sendMail('rizwan.khan@fml.com.pk');
                  }}>
                  <View style={styles.contactContainer}>
                    <Fontisto
                      name="email"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent style={{marginLeft: responsiveWidth(2)}}>
                      rizwan.khan@fml.com.pk
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{paddingVertical: responsiveFontSize(2)}}>
              <AppTextComponent
                style={{fontSize: fontSizeLarge, color: colors.redDarkest}}>
                For Domestic Orders & Franchising
              </AppTextComponent>
              <View>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Mr. Faran Sadiq{' '}
                </AppTextComponent>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Manager Domestic – Retail{' '}
                </AppTextComponent>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    Linking.openURL('tel:+923000390905');
                  }}>
                  <View style={styles.contactContainer}>
                    <AntDesign
                      name="phone"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent
                      style={{marginLeft: responsiveWidth(2), flex: 1}}>
                      +92 300 0390905
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    sendMail('faran.sadiq@fml.com.pk');
                  }}>
                  <View style={styles.contactContainer}>
                    <Fontisto
                      name="email"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent style={{marginLeft: responsiveWidth(2)}}>
                      faran.sadiq@fml.com.pk
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{paddingVertical: responsiveFontSize(2)}}>
              <AppTextComponent
                style={{fontSize: fontSizeLarge, color: colors.redDarkest}}>
                For Animal Supply & Purchase
              </AppTextComponent>
              <View>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Maj. Hamid Hussain (Retd){' '}
                </AppTextComponent>
                <AppTextComponent
                  style={{
                    marginLeft: fontSizeMedium + responsiveWidth(2),
                  }}>
                  Manager Animal Sourcing
                </AppTextComponent>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    Linking.openURL('tel:+923332236843');
                  }}>
                  <View style={styles.contactContainer}>
                    <AntDesign
                      name="phone"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent
                      style={{marginLeft: responsiveWidth(2), flex: 1}}>
                      +92 333 2236843
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={colors.greyLight}
                  onPress={() => {
                    sendMail('hamid.hussain@fml.com.pk');
                  }}>
                  <View style={styles.contactContainer}>
                    <Fontisto
                      name="email"
                      size={fontSizeMedium}
                      color={colors.white}
                    />
                    <AppTextComponent style={{marginLeft: responsiveWidth(2)}}>
                      hamid.hussain@fml.com.pk
                    </AppTextComponent>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
});
