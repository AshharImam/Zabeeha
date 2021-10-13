import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeXLarge,
  screenHeight,
} from '../Utils/Dimensions';
import ScreenComponent from './ScreenComponent';

const HomeScreenPickerComponent = ({onValueChange, selectedChart, data}) => {
  const [showModal, setShowModal] = useState(false);
  const gearAnimation = useState(new Animated.Value(100))[0];
  useEffect(() => {
    Animated.timing(gearAnimation, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  }, []);

  const renderItem = ({item, index}) => (
    <TouchableHighlight
      onPress={() => {
        setShowModal(false);
        onValueChange(item.title, index);
      }}
      underlayColor={colors.touchUnderlay}
      style={{
        padding: 10,
        marginVertical: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
          selectedChart === item.title ? colors.primary : colors.secondary,
      }}>
      <Text
        style={
          selectedChart === item.title && {
            color: colors.secondary,
            fontSize: fontSizeMedium,
            fontWeight: '500',
          }
        }>
        {item.title}
      </Text>
    </TouchableHighlight>
  );

  return (
    <View>
      <Animated.View style={{transform: [{translateX: gearAnimation}]}}>
        <TouchableHighlight
          onPress={() => setShowModal(true)}
          underlayColor={colors.touchUnderlay}
          style={{
            alignSelf: 'flex-end',
            padding: 5,
            borderRadius: 100,
            marginBottom: 5,
          }}>
          <Ionicons
            name="settings"
            size={screenHeight * 0.025}
            color={colors.primary}
          />
        </TouchableHighlight>
      </Animated.View>

      <Modal
        visible={showModal}
        animationType="slide"
        transparent
        onDismiss={() => setShowModal(false)}>
        <View
          style={{
            backgroundColor: colors.secondary,
            bottom: 0,
            height: screenHeight * 0.4,
            position: 'absolute',
            alignSelf: 'center',
            width: '100%',
            // elevation: 15,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowColorc: colors.black,
            shadowOpacity: 0.7,
            shadowRadius: 20,
            paddingVertical: 10,
          }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // extraData={selectedId}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setShowModal(false)}>
            <Text style={{color: colors.primary, fontSize: fontSizeLarge}}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreenPickerComponent;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.secondary,
    bottom: 20,
    width: '90%',
    marginVertical: 10,
    height: screenHeight * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
