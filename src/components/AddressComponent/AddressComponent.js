import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {Heading, SubHeading} from '../../common/fonts';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {scale} from 'react-native-size-matters';

const AddressComponent = ({title, placeholderText, value, onChangeText}) => {
  return (
    <View style={{marginHorizontal: SPACING.space_12}}>
      <SubHeading
        style={{marginTop: SPACING.space_10, fontSize: FONTSIZE.size_14}}>
        {title}
      </SubHeading>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholderText}
        placeholderTextColor={COLORS.grey}
        style={styles.textInput}
      />
    </View>
  );
};

export default AddressComponent;

const styles = StyleSheet.create({
  textInput: {
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_4 + 1,
    padding: SPACING.space_12,
    marginTop: SPACING.space_10 - 4,
    height: scale(40),
  },
});
