import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import TelaD from '../views/TelaD'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default (props: any) => {
    return (
       <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: string = "";
                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                        ? 'chatbubble-ellipses-sharp'
                        : 'chatbubble-ellipses-outline'
                        break;
                    case 'TelaB':
                        iconName = focused
                        ? 'cloud-download-sharp'
                        : 'cloud-download-outline'
                        break;
                    case 'TelaC':
                        iconName = focused ? 'document' : 'document-outline';
                        break;
                    case 'TelaD':
                        iconName = focused ? 'game-controller' : 'game-controller-outline';
                        break;
                    default:
                        break;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarShowLabel: false,
            //tabBarLabelStyle: { fontSize: 30 },
            headerShown: false,
        })} initialRouteName='TelaB'>
            <Tab.Screen name="TelaA" component={TelaA}/>
            <Tab.Screen name="TelaB" component={TelaB}/>
            <Tab.Screen name="TelaC" component={TelaC}/>
            <Tab.Screen name="TelaD" component={TelaD}/>
       </Tab.Navigator>
    )
}