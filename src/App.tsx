import React from "react"
import { View, Text, SafeAreaView } from "react-native"
import TextoCentral from "./components/TextoCentral"

export default (props: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TextoCentral>App</TextoCentral>
    </SafeAreaView>
  )
}