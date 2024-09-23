import React from 'react'
import { Button, Text, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default (props: any) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button title='Abrir' onPress={() => {
                    props.navigation.openDrawer()
                    setTimeout(s => {
                        props.navigation.closeDrawer()
                    }, 7000)
                }} />
            </View>
            <View style={{flex: 1}}>
                <TextoCentral corFundo='#006400'>
                    Tela D
                </TextoCentral>
            </View>
        </View>
    )
}

//props.navigation.toggleDrawer()