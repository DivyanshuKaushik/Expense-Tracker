import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  )
}

export default HomeStack