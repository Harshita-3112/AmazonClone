import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { scale } from 'react-native-size-matters'
import { ModalTransition } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets'
import { Body, Heading, SubBody, SubHeading } from '../../common/fonts'
import CTAButton from '../../components/CTAButton/CTAButton'
import { BORDERRADIUS, COLORS, FONTFAMILY, SPACING } from '../../theme/theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleCondition = () => {
        navigation.navigate('Policy')
    }
    const handlePolicy = () => {
        navigation.navigate('Policy', { showPrivacyPolicy: true })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: "https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png" }} />
            </View>

            <View style={styles.secondContainer}>
                <Heading style={{ marginTop: 10 }} >
                    Sign in to create account
                </Heading>


                <SubHeading style={{ marginTop: 16 }}>
                    Name
                </SubHeading>
                <TextInput style={styles.textInputStyle} placeholder='Enter Your Name'
                    onChangeText={v => setName(v)}
                    value={name}
                />
                <SubHeading style={{ marginTop: 16 }} >
                    Email
                </SubHeading>
                <TextInput style={styles.textInputStyle} placeholder='Enter Your Email' keyboardType='email-address'
                    onChangeText={v => setEmail(v)}
                />
                <SubHeading style={{ marginTop: 16 }}>
                    Password
                </SubHeading>
                <TextInput style={styles.textInputStyle} placeholder='Enter Password' secureTextEntry={true}
                    onChangeText={v => setPassword(v)}
                />
                <CTAButton style={{ marginTop: 50, backgroundColor: COLORS.secondary3, borderRadius: BORDERRADIUS.radius_10, height: scale(50) }} title={'Continue'} />
                <Text style={{ marginTop: 10, }}>
                    By continuing, you agree to Amazon's <Text onPress={handleCondition} style={styles.highlightText}>Conditions of Use</Text> and <Text onPress={handlePolicy} style={styles.highlightText}>Privacy Notice.</Text>
                </Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: scale(50),
        width: 'auto',
        backgroundColor: '#E3E3E3'
    },
    image: {
        height: scale(40),
        width: "60%",
        resizeMode: 'contain',
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 8
    },
    textInputStyle: {
        height: scale(48),
        width: 'auto',
        borderWidth: 0.5,
        borderColor: COLORS.black,
        borderRadius: BORDERRADIUS.radius_4,
        marginTop: scale(8),
        paddingLeft: 14,
        fontFamily: FONTFAMILY.AmazonEmber_regular

    },
    secondContainer: {
        flex: 1,
        paddingHorizontal: SPACING.space_18

    },
    highlightText: {
        color: COLORS.orange,
        // textDecorationStyle: 'dashed'
        textDecorationLine: 'underline'
    }
})