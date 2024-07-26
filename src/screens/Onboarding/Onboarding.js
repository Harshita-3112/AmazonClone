import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { Heading } from '../../common/fonts'
import { COLORS, SPACING } from '../../theme/theme'
import CTAButton from '../../components/CTAButton/CTAButton'
import { useNavigation } from '@react-navigation/native'


const Onboarding = ({ item, index }) => {
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png" }} />
            <Heading style={{ alignSelf: 'center', fontSize: scale(18), marginTop: 10 }}>
                Sign in to your account
            </Heading>
            <CTAButton title={'Already a customer? Sign in'} style={{ marginTop: 18, backgroundColor: COLORS.secondary }} onpress={handleLogin} />
            <CTAButton title={'New to Amazon.in? Create an account'} style={{ marginVertical: 12 }} />
            <CTAButton title={'Skip sign in'} />
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SPACING.space_18,
        // backgroundColor: 'green',
        // marginHorizontal: 20

    },
    image: {
        height: scale(100),
        width: "70%",
        resizeMode: 'contain',
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: '25%'
    },

    CTAButtonStyle: {

    }
})