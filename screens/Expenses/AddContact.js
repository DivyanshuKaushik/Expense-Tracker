import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/layouts/Header'

const AddContact = () => {
  return (
    <SafeAreaView>
    <Header />
      <Text>AddContact</Text>
    </SafeAreaView>
  )
}

export default AddContact