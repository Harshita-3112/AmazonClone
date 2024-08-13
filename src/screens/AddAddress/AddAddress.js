import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SearchBarHeader from '../../components/CTAButton/SearchBarHeader/SearchBarHeader';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {Body, Heading, SubHeading} from '../../common/fonts';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {scale} from 'react-native-size-matters';
import AddressComponent from '../../components/AddressComponent/AddressComponent';

const AddAddress = () => {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [userId, setUserId] = useState('');

  return (
    <View style={styles.container}>
      <SearchBarHeader />
      <View>
        <AddressComponent title="Add a new Address" placeholderText="India" />
        <AddressComponent
          title="Full name(First and last name)"
          placeholderText="enter your name"
          value={name}
          onChangeText={setName}
        />
        <AddressComponent
          title="Mobile No"
          placeholderText="mobile no"
          value={mobileNo}
          onChangeText={setMobileNo}
        />
        <AddressComponent
          title="Flat,House No,Building,Company"
          placeholderText="India"
          value={house}
          onChangeText={setHouse}
        />
        <AddressComponent
          title="Area,Street,Sector,Village"
          placeholderText="India"
          value={street}
          onChangeText={setStreet}
        />
        <AddressComponent
          title="Landmark"
          placeholderText="eg near Appollo hospital"
          value={landmark}
          onChangeText={setLandmark}
        />
        <AddressComponent
          title="Pincode"
          placeholderText="enter pincode"
          value={postalCode}
          onChangeText={setPostalCode}
        />

        <TouchableOpacity activeOpacity={0.4} style={styles.addressButton}>
          <Body
            style={{
              fontFamily: FONTFAMILY.Amazon_Medium,
              fontSize: FONTSIZE.size_14,
            }}>
            Add Address
          </Body>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressButton: {
    height: scale(40),
    width: 'auto',
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.secondary,
    marginHorizontal: SPACING.space_12,
    marginTop: SPACING.space_24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
