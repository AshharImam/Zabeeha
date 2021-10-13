import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import ScreenComponent from '../Components/ScreenComponent';
import {useDispatch, useSelector} from 'react-redux';
import AppBanner from '../Components/AppBanner';
import AppTextComponent from '../Components/AppTextComponent';
import colors from '../Utils/colors';
import {fontSizeLarge, fontSizeMedium} from '../Utils/Dimensions';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CategoryCard from '../Components/CategoryCard';
import {imageUrl} from '../Axios/axios';
import ProductCard from '../Components/ProductCard';
import {useNavigation} from '@react-navigation/native';
import CartComponent from '../Components/CartComponent';
import {selectHomeData, selectUser} from '../features/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const homeData = useSelector(selectHomeData);

  return (
    <ScreenComponent color={colors.primary}>
      <AppBanner
        images={homeData?.Banner.map(item => ({
          uri: imageUrl + item.banner_img,
        }))}
      />
      <View
        style={{
          paddingHorizontal: responsiveWidth(2),
          paddingTop: responsiveHeight(2),
        }}>
        <AppTextComponent style={styles.subHeading}>
          Explore by Category
        </AppTextComponent>

        <FlatList
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          data={homeData?.Catlist}
          horizontal
          renderItem={({item, index}) => (
            <CategoryCard
              key={index}
              title={item.title}
              image={{uri: imageUrl + item.img}}
              onPress={() =>
                navigation.navigate('CategoriesScreen', {id: item.id})
              }
            />
          )}
        />
        <AppTextComponent style={styles.subHeading}>
          Popular This Week
        </AppTextComponent>

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={homeData?.Productlist}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({item}) => (
            <ProductCard
              title={item.name}
              price={item.price}
              image={{uri: imageUrl + item.image}}
              onPress={() => navigation.navigate('ProductScreen', {item})}
            />
          )}
        />
      </View>
    </ScreenComponent>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  subHeading: {
    color: colors.white,
    fontSize: fontSizeLarge,
    marginBottom: responsiveHeight(1),
    marginTop: responsiveHeight(1),
  },
});
