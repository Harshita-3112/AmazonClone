import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import { SubHeading } from './src/common/fonts';
import Onboarding from './src/screens/Onboarding/Onboarding';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} /> */}
        <Stack.Screen name='Onboarding' component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})