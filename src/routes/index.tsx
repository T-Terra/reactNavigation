import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

//import Stack from './Stack'
import Tab from './Tab'
//mport Drawer from './Drawer'

export default (props: any) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Tab />
                {/*
                    <Drawer />
                    <Stack />
                    <Tab />
                */}
            </NavigationContainer>
        </SafeAreaView>
    )
}