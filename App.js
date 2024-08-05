import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import { SubHeading } from './src/common/fonts';
import Onboarding from './src/screens/Onboarding/Onboarding';
import Policy from './src/screens/Policy/Policy';
import BottomTabNavigator from './src/screens/BottomTabNavigator/BottomTabNavigator';
import User from './src/screens/BottomTabNavigator/User/User';
import More from './src/screens/BottomTabNavigator/More/More';
import Cart from './src/screens/BottomTabNavigator/Cart/Cart';
import Menu from './src/screens/BottomTabNavigator/Menu/Menu';
import { COLORS } from './src/theme/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }} >

        {/* {/* <Stack.Screen name='Home' component={Home} /> */}

        {/* <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Policy' component={Policy} /> */}
        <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='User' component={User} />
        <Stack.Screen name='More' component={More} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='Menu' component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})