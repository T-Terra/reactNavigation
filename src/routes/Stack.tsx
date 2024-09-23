import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default (props: any) => {
    return (
        <Stack.Navigator initialRouteName="TelaA" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TelaA" 
                options={{ title: "Info Iniciais" }}
            >
                {(props: any) => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA/>
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaB" >
                {(props: any) => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <TelaB/>
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen name="TelaC" >
                {(props: any) => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <TelaC/>
                    </PassoStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}