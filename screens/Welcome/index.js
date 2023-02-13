import { View, Text ,TouchableOpacity} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Button, VStack } from "native-base";

const carouselItems = [
    {
        title: "Gain total control of your money",
        desc: "Become your own money manager and make every cent count",
        img: "../../assets/welcome/1.png",
    },
    {
        title: "Know where your money goes",
        desc: "Track your transaction easily, with categories and financial report ",
        img: "../../assets/welcome/2.png",
    },
    {
        title: "Planning ahead",
        desc: "Setup your budget for each category so you in control",
        img: "../../assets/welcome/3.png",
    }
];

export default function Welcome() {
    return (
        <Box flex="1" safeArea>
            {/* corousel  */}
            <Text>Welcome</Text>
            {/* login/ signup  */}
            <VStack space={2} alignItems="center">
                <TouchableOpacity>
                    <Button size="md" width="100%" justifyItems="center" alignItems="center">Login</Button>
                </TouchableOpacity>
            </VStack>
        </Box>
    );
}
