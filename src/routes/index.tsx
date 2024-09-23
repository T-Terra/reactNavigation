import { enableScreens } from 'react-native-screens'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

//import Stack from './Stack'
import Tab from './Tab'

enableScreens()

export default (props: any) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab />
                {/*<Stack />*/}
            </NavigationContainer>
        </SafeAreaView>
    )
}