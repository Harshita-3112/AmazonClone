import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, COLORS, SPACING} from '../../../theme/theme';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBarHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.searchBar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign
            name="search1"
            size={22}
            color={COLORS.black}
            style={styles.searchIcon}
          />

          <TextInput
            placeholder="Search Amazon.in"
            style={{fontSize: 16, paddingLeft: 8}}
          />
        </View>
        <View>
          <AntDesign
            name="scan1"
            size={22}
            color={COLORS.black}
            style={{paddingRight: 6}}
          />
        </View>
      </View>

      <View style={styles.scanIcon}>
        <MaterialCommunityIcons
          name="magnify-scan"
          size={22}
          color={COLORS.black}
        />
      </View>
    </View>
  );
};

export default SearchBarHeader;

const styles = StyleSheet.create({
  searchBar: {
    height: scale(40),
    width: '90%',
    borderWidth: 1.5,
    borderColor: COLORS.grey,
    borderRadius: BORDERRADIUS.radius_4,
    marginTop: scale(20),
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
    height: scale(70),
  },
  scanIcon: {
    flex: 1,
    // backgroundColor: 'cyan',
    // alignSelf: 'center',
    height: scale(40),
    width: '10%',
    marginTop: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    paddingLeft: scale(8),
  },
});
