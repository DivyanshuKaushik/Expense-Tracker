import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    const user = false;
    return (
        <>
            {/* <Stack.Navigator screenOptions={{headerShown:false}}> */}
            {user ? <HomeStack /> : <AuthStack />}
            {/* </Stack.Navigator> */}
        </>
    );
}
