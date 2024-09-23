import React from 'react'
import { Text, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default (props: any) => {
    const route = props.route || { params: { numero: 0 } }
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C = {route.params.numero}
        </TextoCentral>
    )
}