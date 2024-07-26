import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import User from './User/User';
import More from './More/More';
import Cart from './Cart/Cart';
import Menu from './Menu/Menu';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '../../theme/theme';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <AntDesign name={'home'} size={22} color={COLORS.black} />
                    ),
                }} name="Home" component={Home} />


            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name={'user-o'} size={22} color={COLORS.black} />
                    ),
                }}
                name="User" component={User} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Foundation name={'indent-more'} size={22} color={COLORS.black} />
                    ),
                }}
                name="More" component={More} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <AntDesign name={'shoppingcart'} size={22} color={COLORS.black} />
                    ),
                }}
                name="Cart" component={Cart} />


            <Tab.Screen
                options={{
                    tabBarIcon: () => (
                        <Feather name={'menu'} size={22} color={COLORS.black} />
                    ),
                }}
                name="Menu" component={Menu} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})

