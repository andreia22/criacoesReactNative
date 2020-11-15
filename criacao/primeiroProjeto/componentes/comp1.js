import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text } from 'react-native';

let an;
let cor;
export default function(props) {
    an= props.ano
    cor=props.cor
    return(
    <Text style={estilo.txt2, {color:cor}}>Eu consegui na {props.dia} mes={props.mes} ano={an} </Text>
    )
}

const estilo = StyleSheet.create({
    txt1:{
        //color: '#f00',
        fontSize: 20,
    },
    txt2:{
        //color: '#00f',
        fontSize: 15,
    }
});




/* Onde eu precisar posso utolizar esse componente inclsive dentro de outro componente ou eviar
 informacao de pai para filhoou de filho para pai*/
