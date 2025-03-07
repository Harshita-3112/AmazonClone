import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-reanimated-carousel';
import {Body, Heading} from '../../common/fonts';
import {ModalTransition} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import axios from 'axios';
import ProductItem from '../../components/ProductItem';
import DropDownPicker from 'react-native-dropdown-picker';
import ProductInfo from '../ProductInfo/ProductInfo';
import {useNavigation} from '@react-navigation/native';
// import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import SearchBarHeader from '../../components/CTAButton/SearchBarHeader/SearchBarHeader';

// import { SliderBox } from "react-native-image-slider-box";

const Home = () => {
  const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const {height, width} = Dimensions.get('screen');

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('jewelery');
  const [items, setItems] = useState([
    {label: "Men's clothing", value: "men's clothing"},
    {label: 'jewelry', value: 'jewelery'},
    {label: 'electronics', value: 'electronics'},
    {label: "women's clothing", value: "women's clothing"},
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (error) {
        console.log('error message', error);
      }
    };
    fetchData();
  }, []);
  //   console.log('products', products);

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index);
  }, []);

  const handleSheetOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const handleSheetClose = () => {
    bottomSheetRef.current?.close();
  };

  const list = [
    {
      id: '0',
      image: 'https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg',
      name: 'Home',
    },
    {
      id: '1',
      image:
        'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg',
      name: 'Deals',
    },
    {
      id: '3',
      image:
        'https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg',
      name: 'Electronics',
    },
    {
      id: '4',
      image:
        'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
      name: 'Mobiles',
    },
    {
      id: '5',
      image:
        'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg',
      name: 'Music',
    },
    {
      id: '6',
      image: 'https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg',
      name: 'Fashion',
    },
  ];

  const images = [
    'https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg',
  ];

  const deals = [
    {
      id: '20',
      title: 'OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)',
      oldPrice: 25000,
      price: 19000,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg',
        'https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg',
      ],
      color: 'Stellar Green',
      size: '6 GB RAM 128GB Storage',
    },
    {
      id: '30',
      title:
        'Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers',
      oldPrice: 74000,
      price: 26000,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg',
        'https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg',
      ],
      color: 'Cloud Navy',
      size: '8 GB RAM 128GB Storage',
    },
    {
      id: '40',
      title:
        'Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger',
      oldPrice: 16000,
      price: 14000,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg',
        'https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg',
      ],
      color: 'Icy Silver',
      size: '6 GB RAM 64GB Storage',
    },
    {
      id: '40',
      title:
        'realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera',
      oldPrice: 12999,
      price: 10999,
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg',
      ],
    },
  ];

  const offers = [
    {
      id: '0',
      title:
        'Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)',
      offer: '72% off',
      oldPrice: 7500,
      price: 4500,
      image:
        'https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg',
      ],
      color: 'Green',
      size: 'Normal',
    },
    {
      id: '1',
      title:
        'Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery',
      offer: '40%',
      oldPrice: 7955,
      price: 3495,
      image: 'https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg',
      ],
      color: 'black',
      size: 'Normal',
    },
    {
      id: '2',
      title: 'Aishwariya System On Ear Wireless On Ear Bluetooth Headphones',
      offer: '40%',
      oldPrice: 7955,
      price: 3495,
      image: 'https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg',
      carouselImages: ['https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg'],
      color: 'black',
      size: 'Normal',
    },
    {
      id: '3',
      title:
        'Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery',
      offer: '40%',
      oldPrice: 24999,
      price: 19999,
      image: 'https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg',
      carouselImages: [
        'https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg',
        'https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg',
      ],
      color: 'Norway Blue',
      size: '8GB RAM, 128GB Storage',
    },
  ];

  const bottomSheetList = [
    {
      id: 0,
      icon: <Entypo name="location-pin" size={20} color={COLORS.blue} />,
      title: 'Enter an Indian pincode',
    },
    {
      id: 1,
      icon: (
        <MaterialIcons
          name="location-searching"
          size={20}
          color={COLORS.blue}
        />
      ),
      title: 'Use my current location',
    },
    {
      id: 2,
      icon: <Ionicons name="globe-outline" size={20} color={COLORS.blue} />,
      title: 'Deliver outside India',
    },
  ];

  const renderOffers = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductInfo', {
            item: item,
          })
        }
        style={{
          // alignItems: 'center',
          // marginLeft: scale(20),
          // backgroundColor: 'red',
          width: '48%',
        }}>
        <Image style={styles.offerCardStyle} source={{uri: item.image}} />

        <View
          style={{
            backgroundColor: '#e31837',
            width: scale(130),
            justifyContent: 'center',
            borderRadius: BORDERRADIUS.radius_4,
            height: scale(20),
            alignItems: 'center',
            marginTop: scale(8),
          }}>
          <Text style={styles.offerText}>Upto {item?.offer} </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderDeals = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {item: item})}
        style={{
          alignItems: 'center',
          marginRight: scale(20),
          // backgroundColor: 'red',
          width: '48%',
        }}>
        <Image style={styles.dealsCardStyle} source={{uri: item.image}} />
      </TouchableOpacity>
    );
  };

  const renderItem = () => {
    return (
      <View style={{backgroundColor: 'red'}}>
        <Image
          source={require('../../assets/images/image1.jpg')}
          style={{resizeMode: 'contain', height: '100%', width: '100%'}}
        />
        {/* <Image source={require('../../assets/images/image1.jpg')} style={{ resizeMode: 'contain', height: '70%', width: '100%' }} /> */}
      </View>
    );
  };
  const renderCategories = ({item, index}) => {
    return (
      <View style={styles.products}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productText}>{item.name}</Text>
      </View>
    );
  };

  const filteredProducts = products?.filter(
    item => item?.category === category,
  );

  return (
    <View style={styles.container}>
      {/* SEARCHBAR & SCANNIG */}

      <SearchBarHeader />

      {/* SECOND HEADER */}

      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => handleSheetOpen()}
          style={styles.secondHeader}>
          <Ionicons name="location-outline" size={22} color={COLORS.black} />

          <Text style={styles.text}>Delivering to Bengaluru 560022</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={24}
            color={COLORS.black}
            style={{left: 20}}
          />
        </TouchableOpacity>

        <View>
          <FlatList
            horizontal
            data={list}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
            contentContainerStyle={{padding: 10, backgroundColor: 'white'}}
          />
        </View>

        <View
          style={{
            backgroundColor: 'red',
            marginHorizontal: scale(18),
            height: scale(200),
            width: '100%',
          }}>
          <Carousel
            loop={true}
            width={width / 1.15}
            height={scale(200)}
            data={images}
            // style={{ overflow: 'hidden' }}
            scrollAnimationDuration={1000}
            renderItem={renderItem}
            withAnimation={{
              type: 'timing',
            }}
          />
        </View>
        <Heading style={{marginTop: scale(10), marginHorizontal: scale(18)}}>
          Trending Deals of the week
        </Heading>
        <View>
          <FlatList
            data={deals}
            renderItem={renderDeals}
            numColumns={2}
            contentContainerStyle={{
              //   marginHorizontal: scale(18),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: scale(10),
            }}
          />
        </View>
        <View
          style={{
            height: 1,
            borderWidth: 2,
            borderColor: '#d0d0d0',
            marginTop: scale(14),
          }}></View>
        <Heading style={{marginTop: scale(10), marginHorizontal: scale(18)}}>
          Today's Deals
        </Heading>
        <View>
          <FlatList
            data={offers}
            renderItem={renderOffers}
            horizontal
            style={{marginHorizontal: SPACING.space_18}}
          />
        </View>

        <View
          style={{
            height: 1,
            borderWidth: 2,
            borderColor: '#d0d0d0',
            marginTop: scale(14),
          }}></View>

        <View
          style={{
            marginHorizontal: scale(10),
            width: '45%',
            marginTop: scale(20),
          }}>
          <DropDownPicker
            style={{borderColor: '#b7b7b7', height: scale(30)}}
            open={open}
            value={category}
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            placeholder="choose category"
            placeholderStyle={styles.placeholderStyles}
            zIndex={3000}
            zIndexInverse={1000}
            onOpen={onGenderOpen}
          />
        </View>

        <View>
          <FlatList
            data={filteredProducts}
            numColumns={2}
            renderItem={({item, index}) => (
              <ProductItem item={item} key={index} />
            )}
          />
        </View>
      </ScrollView>
      <BottomSheet
        index={-1}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['50%']}>
        <BottomSheetView style={{flex: 1, marginHorizontal: scale(18)}}>
          <Text
            onPress={handleSheetClose}
            style={{
              fontSize: FONTSIZE.size_16,
              fontFamily: FONTFAMILY.Amazon_Medium,
              color: COLORS.black,
            }}>
            Choose your Location
          </Text>
          <Text style={{marginTop: scale(4)}}>
            Select a delivery location to see product availability and delivery
            options
          </Text>
          <View>
            <ScrollView
              horizontal
              style={{
                marginTop: scale(16),
              }}
              contentContainerStyle={{height: scale(120)}}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AddAddress');
                }}
                style={{
                  height: scale(120),
                  width: scale(120),
                  borderColor: '#D0D0D0',
                  borderWidth: 1,

                  padding: scale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.blue,
                    fontFamily: FONTFAMILY.AmazonEmber_regular,
                  }}>
                  Add an address or pick-up point
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {bottomSheetList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{flexDirection: 'row', gap: 6, marginTop: scale(10)}}>
                {item.icon}
                <Body style={{color: COLORS.blue}}>{item.title}</Body>
              </TouchableOpacity>
            );
          })}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: COLORS.white,
  },

  secondHeader: {
    height: scale(50),
    width: '100%',
    backgroundColor: '#AFEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(10),
    // marginTop: scale(10)
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2,
  },
  text: {
    // fontSize: scale(13),
    fontWeight: '500',
    color: COLORS.black,
    left: 10,
  },
  products: {
    marginRight: scale(18),
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImage: {
    height: scale(44),
    width: scale(44),
    resizeMode: 'contain',
  },
  productText: {
    textAlign: 'center',
    fontWeight: '500',
    marginTop: scale(5),
    fontSize: FONTSIZE.size_12,
    color: COLORS.black,
  },
  imageBackgroundStyle: {
    height: scale(150),
    width: 'auto',
    // backgroundColor: 'red',
  },
  dealsCardStyle: {
    height: scale(150),
    width: '100%',
    // margin: scale(5),
    marginTop: scale(10),
  },
  offerCardStyle: {
    height: scale(150),
    // width: '100%',
    // marginHorizontal: scale(18),
    // marginRight: scale(10),
  },
  offerText: {
    color: COLORS.white,
    fontFamily: FONTFAMILY.AmazonEmber_bold,
    fontSize: FONTSIZE.size_12,
  },
});
