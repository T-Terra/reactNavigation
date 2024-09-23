import React from "react"
import { View, Text,  Button } from "react-native"


export default (props: any) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                {props.voltar 
                    ?   <Button 
                            title="Voltar"
                            onPress={() => {
                                props.navigation.goBack()
                            }}
                        />
                    : false
                }
                {props.avancar 
                    ?   <Button 
                            title="Avançar"
                            onPress={() => {
                                props.navigation.navigate(props.avancar)
                            }}
                        />
                    : false
                }
            </View>
            <View style={{flex: 1}}>
                {props.children}
            </View>
        </View>
    )
}

// props.navigation.navigate(props.avancar)
// props.navigation.push(props.avancar) Adicionar a tela na stack mesmo a tela já estando nela