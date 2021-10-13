import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {imageUrl} from '../Axios/axios';
import AppTextComponent from '../Components/AppTextComponent';
import CartComponent from '../Components/CartComponent';
import CategoryProductCard from '../Components/CategoryProductCard';
import LoadingComponent from '../Components/LoadingComponent';
import ProductCard from '../Components/ProductCard';
import ScreenComponent from '../Components/ScreenComponent';
import {setError} from '../features/errorSlice';
import {
  getProducts,
  selectProductLoading,
  selectProducts,
} from '../features/productsSlice';
import {selectHomeData} from '../features/userSlice';
import colors from '../Utils/colors';

const CategoryButton = ({title, onPress, selected = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingHorizontal: responsiveWidth(3),
        marginHorizontal: responsiveWidth(1),
        paddingVertical: responsiveHeight(1),
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: responsiveFontSize(3),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: selected ? colors.redDarkest : null,
      }}>
      <AppTextComponent>{title}</AppTextComponent>
    </TouchableOpacity>
  );
};

const CategoriesScreen = ({route}) => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();
  const {Catlist} = useSelector(selectHomeData);
  const productList = useSelector(selectProducts);
  const productLoading = useSelector(selectProductLoading);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!productList) {
      dispatch(getProducts());
    }
  }, []);

  useEffect(() => {
    if (productList) {
      if (route?.params?.id) {
        selectProductsById(route.params.id);
      }
    }
  }, [productList]);
  const selectProductsById = id => {
    setSelected(id);
    const product = productList.filter(item => {
      if (item.id == id) {
        return item;
      }
    })[0];
    setProducts(product.productlist);
  };
  return (
    <ScreenComponent color={colors.primary}>
      <View
        style={{
          padding: responsiveFontSize(1),
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Catlist.map(item => {
            return (
              <CategoryButton
                key={item.id}
                title={item.title}
                onPress={() => {
                  selectProductsById(item.id);
                }}
                selected={selected == item.id}
              />
            );
          })}
        </ScrollView>
      </View>

      {productLoading && <LoadingComponent />}
      {productList && (
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            {products.map((item, index) => {
              return (
                <CategoryProductCard
                  color={colors.greyDarker}
                  onPress={() =>
                    navigation.navigate('ProductScreen', {item: item})
                  }
                  key={item.name}
                  title={item.name}
                  price={item.price}
                  image={{uri: imageUrl + item.image}}
                  width={responsiveWidth(41.7)}
                />
              );
            })}
          </View>
        </ScrollView>
      )}
      <CartComponent />
    </ScreenComponent>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
