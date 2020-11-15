import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text } from 'react-native';
import Estilos from '../estilos/estilos.js';

let an;

export default function(props) {
    an= props.ano
    cor=props.cor
    return(
    <Text style={estilos.textotDia}>Eu consegui na {props.dia} mes={props.mes} ano={an} </Text>
    )
}





/* Onde eu precisar posso utolizar esse componente inclsive dentro de outro componente ou eviar
 informacao de pai para filhoou de filho para pai*/
