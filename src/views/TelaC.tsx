import React from 'react'
import { Text, View } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default (props: any) => {
    const r = props.route
    const numero = r.route 
        && r.route.params 
        && r.route.params.numero 
        ? r.route.params.numero 
        : 0
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C = {numero}
        </TextoCentral>
    )
}