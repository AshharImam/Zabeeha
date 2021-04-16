import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import DependentCardComponent from '../Components/DependentCardComponent';
import ScreenComponent from '../Components/ScreenComponent';

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const DependentsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenComponent>
      {/* <ScrollView> */}
      <FlatList
        data={data}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DependentProfile')}>
            <DependentCardComponent />
          </TouchableOpacity>
        )}
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate('DependentProfile')}>
        <DependentCardComponent />
      </TouchableOpacity>
      <DependentCardComponent />
      <DependentCardComponent />
      <DependentCardComponent />
      <DependentCardComponent />
      <DependentCardComponent />
      <DependentCardComponent />
      <DependentCardComponent />
      <DependentCardComponent /> */}
      {/* </ScrollView> */}
    </ScreenComponent>
  );
};

export default DependentsScreen;
