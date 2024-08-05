import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {BORDERRADIUS, COLORS, FONTFAMILY, SPACING} from '../theme/theme';

const ProductItem = ({item, index}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: scale(18), marginVertical: scale(25)}}>
      <Image style={styles.imageStyle} source={{uri: item?.image}} />
      <Text style={styles.textStyle} numberOfLines={2}>
        {item?.title}
      </Text>

      <View
        style={{
          marginTop: scale(5),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: scale(15),
            fontFamily: FONTFAMILY.AmazonEmber_bold,
            color: COLORS.black,
          }}>
          ₹{item?.price}
        </Text>
        <Text style={{color: '#ffc72c', fontWeight: '500'}}>
          {item?.rating?.rate} ratings
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#ffc72c',
          padding: scale(5),
          borderRadius: BORDERRADIUS.radius_20,
          marginHorizontal: SPACING.space_18,
          marginTop: scale(10),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.black,
            fontFamily: FONTFAMILY.AmazonEmber_regular,
          }}>
          Add To Cart
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: scale(150),
    height: scale(150),
    resizeMode: 'contain',
  },
  textStyle: {
    width: scale(150),
    marginTop: scale(10),
  },
});
