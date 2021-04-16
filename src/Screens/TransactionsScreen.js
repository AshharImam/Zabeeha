import React from 'react';
import {ScrollView} from 'react-native';

import ScreenComponent from '../Components/ScreenComponent';
import TransactionComponent from '../Components/TransactionComponent';

const TransactionScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenComponent>
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
        <TransactionComponent />
      </ScreenComponent>
    </ScrollView>
  );
};

export default TransactionScreen;
