import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppTextInputComponent from '../Components/AppTextInputComponent';
import ProfilePhotoComponent from '../Components/ProfilePhotoComponent';
import ScreenComponent from '../Components/ScreenComponent';
import image from '../Assets/images/profile.png';
import {screenHeight} from '../Utils/Dimensions';
import colors from '../Utils/colors';
import {useNavigation} from '@react-navigation/core';

const PersonalProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenComponent>
      <SafeAreaView style={{flex: 1}}>
        {/* <View style={{padding: 10, margin: 5}}> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ProfilePhotoComponent
              image={image}
              style={{
                width: screenHeight * 0.12,
                height: screenHeight * 0.12,
                // alignSelf: 'flex-start',
              }}
            />
            {/* <View> */}
            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                padding: screenHeight * 0.01,
                borderRadius: 5,
                marginTop: screenHeight * 0.01,
              }}
              onPress={() => navigation.navigate('Dependents')}>
              <Text
                style={{
                  color: colors.secondary,
                }}>
                View Dependents
              </Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>

          <AppTextInputComponent
            placeholder="Name"
            value={'Syed Muhammad Ashhar Imam'}
          />
          <AppTextInputComponent
            placeholder="Father's Name"
            value={'Syed Muhammad Asim Imam'}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '48%'}}>
              <AppTextInputComponent placeholder="DOB" value={'15/11/1998'} />
            </View>
            <View style={{width: '48%'}}>
              <AppTextInputComponent placeholder="ITS#" value="312311" />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '48%'}}>
              <AppTextInputComponent
                placeholder="CNIC"
                value={'12321-3123123121-3'}
              />
            </View>
            <View style={{width: '48%'}}>
              <AppTextInputComponent
                placeholder="Email"
                value="adasdsd@faef.com"
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '48%'}}>
              <AppTextInputComponent
                placeholder="Phone#"
                value="012-31231323"
              />
            </View>
            <View style={{width: '48%'}}>
              <AppTextInputComponent
                placeholder="Mobile#"
                value="0312-32131231"
              />
            </View>
          </View>
          <AppTextInputComponent placeholder="Area" value="Sharh-e-faisal" />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '48%'}}>
              <AppTextInputComponent placeholder="District" value="South" />
            </View>
            <View style={{width: '48%'}}>
              <AppTextInputComponent placeholder="City" value="Karachi" />
            </View>
          </View>
          <AppTextInputComponent
            placeholder="Address"
            value="flat no f5,5th floor shahterrace bldg opp zonal office chakiwara no.1"
            multiline
          />
        </ScrollView>
        {/* </View> */}
      </SafeAreaView>
    </ScreenComponent>
  );
};

export default PersonalProfileScreen;

const styles = StyleSheet.create({});
