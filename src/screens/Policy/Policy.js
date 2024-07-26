import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { scale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { SubHeading } from '../../common/fonts'

const Policy = (props) => {
    const showPrivacyPolicy = props.route.params?.showPrivacyPolicy
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
                <Ionicons name='chevron-back' size={30} color={COLORS.white} />
                <SubHeading style={{ color: COLORS.white, fontSize: scale(16) }}>
                    Back
                </SubHeading>
            </TouchableOpacity>

            <WebView source={{ uri: 'https://www.amazon.in/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ' }} />
        </View>
    )
}

export default Policy

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        height: scale(50),
        width: 'auto',
        backgroundColor: COLORS.primary,
        // justifyContent: 'center',
        paddingLeft: scale(8),
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    }
})