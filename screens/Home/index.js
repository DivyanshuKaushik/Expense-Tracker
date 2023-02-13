import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Header from '../../components/layouts/Header';
import { Box } from 'native-base';
const Home = () => {
  const navigation = useNavigation();
  const [gestureName,setGestureName] = useState('none');

    function onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        setGestureName(gestureName)
        switch (gestureName) {
        //   case SWIPE_UP:
        //     this.setState({backgroundColor: 'red'});
        //     break;
        //   case SWIPE_DOWN:
        //     this.setState({backgroundColor: 'green'});
        //     break;
          case SWIPE_LEFT:
            return navigation.navigate('AddContact')
          case SWIPE_RIGHT:
            return navigation.navigate('HomeScreen')
        }
      }
      const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };
   
  return (
    // <GestureRecognizer
    //     onSwipe={(direction, state) => onSwipe(direction, state)}
    //     config={config}
    //     style={{
    //       flex: 1,
    //     }}
    //     >
        <SafeAreaView>
        <Header />
         <Box>Hello</Box>
          <Pressable onPress={() => navigation.navigate('AddContact')}>
            <Text>Add Contact</Text>
          </Pressable>
        </SafeAreaView>

        // </GestureRecognizer>
  )
}

export default Home