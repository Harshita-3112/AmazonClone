import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { BORDERRADIUS, COLORS, SPACING } from '../../theme/theme'
import { Body, SubBody, SubHeading } from '../../common/fonts'
import { useNavigation } from '@react-navigation/native'

const CTAButton = ({ title, style, onpress }) => {



    return (
        <TouchableOpacity style={[styles.container, { ...style }]} onPress={onpress}>
            <Body style={{ fontSize: 16 }}>
                {title}
            </Body>
        </TouchableOpacity>
    )
}

export default CTAButton

const styles = StyleSheet.create({
    container: {
        height: scale(40),
        width: 'auto',
        backgroundColor: COLORS.secondary2,
        borderWidth: 0.3,
        borderColor: 'black',
        borderRadius: BORDERRADIUS.radius_4,
        alignItems: 'center',
        justifyContent: 'center'


    }
})