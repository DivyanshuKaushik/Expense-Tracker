import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddContact from '../screens/Expenses/AddContact';
import { useState } from 'react';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    const navigation = useNavigation()
    
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={Home} />
        <Tab.Screen name="AddContact" component={AddContact} />
    </Tab.Navigator>
  )
}

export default HomeTab