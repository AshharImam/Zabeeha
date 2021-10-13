import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSelector} from 'react-redux';
import {selectTypeOfAddress} from '../features/addressSlice';
import colors from '../Utils/colors';
import {fontSizeLarge} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const AddressComponent = ({item, onPress}) => {
  const typeOfAddress = useSelector(selectTypeOfAddress); // HOME, OFFICE etc

  const getTitle = () => {
    const title = typeOfAddress.filter(types => types.id == item.type)[0];
    return title?.title;
  };
  return (
    <TouchableHighlight underlayColor={colors.greyDarkest} onPress={onPress}>
      <View
        style={{
          backgroundColor: colors.greyLighter,
          marginVertical: responsiveHeight(0.5),
          paddingHorizontal: responsiveWidth(2),
        }}>
        <AppTextComponent
          style={{
            fontSize: fontSizeLarge,
            color: colors.greyDarker,
            fontWeight: 'bold',
          }}>
          {getTitle()}
        </AppTextComponent>
        {item.add1 && (
          <AppTextComponent
            style={{
              color: colors.greyDarker,
            }}>
            Address#01: {item.add1}
          </AppTextComponent>
        )}
        {item.add2 && (
          <AppTextComponent
            style={{
              color: colors.greyDarker,
            }}>
            Address#02: {item.add2}
          </AppTextComponent>
        )}
        {item.pincode && (
          <AppTextComponent
            style={{
              color: colors.greyDarker,
            }}>
            Pincode: {item.pincode}
          </AppTextComponent>
        )}
        {item.city && (
          <AppTextComponent
            style={{
              color: colors.greyDarker,
            }}>
            City: {item.city}{' '}
            {item.mobile && (
              <AppTextComponent
                style={{
                  color: colors.greyDarker,
                }}>
                Mobile#: {item.mobile}
              </AppTextComponent>
            )}
          </AppTextComponent>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default AddressComponent;

const styles = StyleSheet.create({});
