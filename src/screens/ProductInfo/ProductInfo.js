import {
  Dimensions,
  ImageBackground,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useOrderStore} from '../../store/orderStore';
import SearchBarHeader from '../../components/CTAButton/SearchBarHeader/SearchBarHeader';

const {height, width} = Dimensions.get('screen');

const ProductInfo = props => {
  const {item} = props.route.params;
  console.log('item here', item.id);
  const setCart = useOrderStore(state => state.setCart);
  const cart = useOrderStore(state => state.cart);
  console.log('cart here', cart.length);

  const isFound = cart.find(product => product.id === item.id);

  console.log('found', isFound);

  const carouselItems = item.carouselImages;

  const handleAddToCartPress = item => {
    setCart(item);
  };
  return (
    <View style={styles.container}>
      <SearchBarHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          style={{flex: 1, backgroundColor: 'red'}}>
          {carouselItems?.map((item, index) => {
            return (
              <ImageBackground
                key={index}
                source={{uri: item}}
                style={styles.imageBackground}>
                <View
                  style={{
                    padding: scale(20),
                    // alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity style={styles.discount}>
                    <Text style={styles.text}>20% off</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.iconContainer}>
                    <Entypo name={'share'} size={20} color={COLORS.black} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.heartIcon}>
                  <AntDesign name={'hearto'} size={20} color={COLORS.black} />
                </TouchableOpacity>
              </ImageBackground>
            );
          })}
        </ScrollView>

        <View style={{padding: scale(10)}}>
          <Text style={styles.textStyle}>{item.title}</Text>
          <Text style={styles.priceStyle}>₹{item.price}</Text>
        </View>
        <View style={styles.border} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: scale(10),
          }}>
          <Text>Color: </Text>
          <Text
            style={{
              fontSize: FONTSIZE.size_14 + 1,
              fontFamily: FONTFAMILY.AmazonEmber_bold,
              color: COLORS.black,
            }}>
            {item.color}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: scale(10),
            // marginBottom: scale(10),
          }}>
          <Text>Size: </Text>
          <Text
            style={{
              fontSize: FONTSIZE.size_14 + 1,
              fontFamily: FONTFAMILY.AmazonEmber_bold,
              color: COLORS.black,
            }}>
            {item.size}
          </Text>
        </View>
        <View style={styles.border} />
        <View style={{padding: scale(10)}}>
          <Text
            style={{
              fontSize: FONTSIZE.size_14 + 1,
              fontFamily: FONTFAMILY.AmazonEmber_bold,
              marginVertical: 5,
              color: COLORS.black,
            }}>
            Total:₹{item.price}
          </Text>
          <Text style={{color: '#00ced1'}}>
            FREE delivery by Tomorrow by 3pm. order within 10hrs 30mins
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: scale(5),
              alignItems: 'center',
              gap: scale(5),
              marginTop: scale(8),
            }}>
            <Entypo name={'location-pin'} size={20} color={COLORS.black} />
            <Text
              style={{
                fontSize: FONTSIZE.size_14 + 1,
                fontFamily: FONTFAMILY.Amazon_Medium,
                color: COLORS.black,
              }}>
              Deliver to Harshita - Bengaluru 560019
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: 'green',
            marginHorizontal: SPACING.space_10,
            fontFamily: FONTFAMILY.Amazon_Medium,
          }}>
          In Stock
        </Text>

        <TouchableOpacity
          disabled={isFound ? true : false}
          onPress={() => handleAddToCartPress(item)}
          style={styles.cartStyle}>
          <Text style={styles.cartText}>
            {isFound ? 'Added To Cart' : 'Add To Cart'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyNowStyle}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: scale(40),
    backgroundColor: COLORS.white,
  },
  searchBar: {
    height: scale(40),
    // width: '90%',
    borderWidth: 1.5,
    borderColor: COLORS.grey,
    borderRadius: BORDERRADIUS.radius_4,
    // marginTop: scale(12),
    flex: 5,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#81D8D0',
    paddingHorizontal: SPACING.space_18,
    height: scale(60),
  },
  scanIcon: {
    flex: 1,
    // backgroundColor: 'cyan',
    // alignSelf: 'center',
    height: scale(40),
    width: '10%',
    // marginTop: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
  },
  searchIcon: {
    paddingLeft: scale(8),
  },
  imageBackground: {
    height: height / 2.2,
    width: width,
  },
  discount: {
    height: scale(40),
    width: scale(40),
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: '#c60c30',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: FONTSIZE.size_12,
    // position: 'absolute',
  },
  iconContainer: {
    height: scale(40),
    width: scale(40),
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  heartIcon: {
    height: scale(40),
    width: scale(40),
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(20),
    marginTop: 'auto',
  },
  textStyle: {
    fontSize: FONTSIZE.size_14 + 1,
    fontFamily: FONTFAMILY.Amazon_Medium,
    color: COLORS.black,
  },
  priceStyle: {
    fontWeight: '500',
    fontSize: FONTSIZE.size_16,
    marginTop: scale(6),
    color: COLORS.black,
  },
  border: {
    height: 1,
    borderWidth: 0.8,
    borderColor: '#D0D0D0',
    // marginTop: scale(10),
  },
  cartStyle: {
    backgroundColor: '#ffc72c',
    padding: scale(10),
    borderRadius: BORDERRADIUS.radius_20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(10),
    marginVertical: scale(10),
  },
  cartText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Amazon_Medium,
  },
  buyNowStyle: {
    backgroundColor: '#ffac1c',
    padding: scale(10),
    borderRadius: BORDERRADIUS.radius_20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(10),
    marginVertical: scale(10),
  },
  buyNowText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Amazon_Medium,
  },
});
