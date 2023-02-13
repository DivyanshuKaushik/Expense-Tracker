import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import HomeStack from "./navigation/HomeStack";
import RootNavigation from "./navigation/RootNavigation";

// amplify setup
// Amplify.configure({
//     ...awsconfig,
//     Analytics: {
//         disabled: true,
//     },
// });

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <RootNavigation />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
