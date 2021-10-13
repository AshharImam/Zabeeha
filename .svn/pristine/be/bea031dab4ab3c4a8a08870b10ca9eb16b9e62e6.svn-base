import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ScreenComponent from '../Components/ScreenComponent';
import colors from '../Utils/colors';
import {screenHeight, screenWidth} from '../Utils/Dimensions';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';

const QRCodeScreen = () => {
  const handleOnRead = res => {
    alert(`${res.data}`);
    console.log(res);
  };
  return (
    <ScreenComponent>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: screenHeight * 0.3,
            height: screenHeight * 0.3,
            // backgroundColor: 'red',
            overflow: 'hidden',
          }}>
          <QRCodeScanner
            onRead={handleOnRead}
            flashMode={RNCamera.Constants.FlashMode.off}
            cameraStyle={{
              width: screenHeight * 0.3,
              height: screenHeight * 0.3,
            }}
            reactivate
            // reactivateTimeout={5000}
            // showMarker={true}
            // markerStyle={{
            //   borderColor: colors.white,
            // }}
          ></QRCodeScanner>
        </View>
      </View>

      {/* // {/* <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //   <View
    //     style={{
    //       backgroundColor: colors.white,
    //       padding: 10,
    //     }}>
    //     <QRCode
    //       value="HERE IS YOOUR GIFT!"
    //       size={screenWidth * 0.4}
    //       backgroundColor={colors.white}
    //       color={colors.black}
    //     />
    //   </View>
    //   <Button title="Open Camera" onPress={() => {}} />
    // </View> */}
    </ScreenComponent>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({});
