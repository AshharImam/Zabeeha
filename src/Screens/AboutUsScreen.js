import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppTextComponent from '../Components/AppTextComponent';
import LogoComponent from '../Components/LogoComponent';
import ScreenComponent from '../Components/ScreenComponent';
import colors from '../Utils/colors';
import {fontSizeLarge} from '../Utils/Dimensions';

const AboutUsScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: colors.greyLightest,
      }}>
      <StatusBar
        backgroundColor={colors.greyLightest}
        barStyle="dark-content"
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: responsiveWidth(3),
        }}>
        <LogoComponent
          style={{
            alignSelf: 'center',
          }}
        />
        <AppTextComponent
          style={{
            fontSize: fontSizeLarge,
            paddingTop: responsiveHeight(2),
            alignSelf: 'center',
            fontWeight: 'bold',
            color: colors.red,
          }}>
          About Us
        </AppTextComponent>
        <AppTextComponent style={{color: colors.greyDarkest}}>
          Zabeeha, a brand of Fauji Meat Limited entered the domestic arena on
          4th April 2018 with the promise to deliver the best flavor of the meat
          while ensuring that the food brings hygiene and freshness in every
          bite. Named after the Islamic method of slaughtering decreed in the
          Quran and Sunnah as the most humane, Zabeeha believes in striving to
          incorporate 100% halal slaughtering and meat handling techniques.
          Whether it’s Beef, Mutton, Chicken, or Fish, only Zabeeha offers the
          best in freshness, convenience, and healthy nutrition. Above all, the
          offerings are organic, natural, and healthy with zero additional
          additives to fulfill the vows of delivering fresh meat and health
          coupled with taste.
        </AppTextComponent>
        <AppTextComponent
          style={{
            fontSize: fontSizeLarge,
            paddingTop: responsiveHeight(2),
            alignSelf: 'center',
            fontWeight: 'bold',
            color: colors.red,
          }}>
          Our Vision
        </AppTextComponent>
        <AppTextComponent style={{color: colors.greyDarkest}}>
          It is built with the aim is to provide premium customized meat cuts
          through a one-stop meat shop, which brings delight to the taste buds
          of a health-conscious consumer looking for a quick nutritious re-fill.
          The meat is derived from healthy farm-raised animals and is processed
          at the largest halal meat processing plant in South Asia which
          operates in compliance with the International standards. Throughout
          the process, cleanliness is a priority. Proper temperature is
          maintained to prevent the degradation of meat. Detailed postmortem
          coupled with microbiological testing and constant quality checks at
          each step is carried out to preserve the quality of meat. The meat is
          processed and packaged in line with the highest international safety
          standards. The well-trained workforce sees to it that the
          international practices are not only met but outdone to win the hearts
          of non-vegetarians all around. True one-stop for all your meat
          cravings!
        </AppTextComponent>
      </View>
      <AppTextComponent
        style={{
          fontSize: fontSizeLarge,
          paddingTop: responsiveHeight(2),
          alignSelf: 'center',
          fontWeight: 'bold',
          color: colors.red,
        }}>
        Our Certifications
      </AppTextComponent>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 35,
          marginTop: 10,
          alignSelf: 'center',
        }}>
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer1.png')}
        />
        <Image
          style={{width: 75, height: 85, margin: 10}}
          source={require('../Assets/images/Cer9.png')}
        />
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer2.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 35,
          marginTop: 10,
          alignSelf: 'center',
        }}>
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer3.png')}
        />
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer4.png')}
        />
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer5.png')}
        />
      </View>
      <View
        style={{flexDirection: 'row', marginBottom: 35, alignSelf: 'center'}}>
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer6.png')}
        />
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer7.png')}
        />
        <Image
          style={{width: 75, height: 75, margin: 10}}
          source={require('../Assets/images/Cer8.png')}
        />
      </View>
    </ScrollView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({});
