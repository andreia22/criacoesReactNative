import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View } from 'react-native';



export default function(props) {

    return(
    <View style={{width:'100%',height:300, 
    flexDirection:'row',alignItems:'center', 
    justifyContent:'space-between',
    backgroundColor:'#6cf' }}>
        <View style={{width:50, height:50, backgroundColor:'#00f'}}></View>
        <View style={{width:50, height:50, backgroundColor:'#00a'}}></View>
        <View style={{width:50, height:50, backgroundColor:'#005'}}></View>
    </View>
    )
}
/* CONTEINERS: flexiveis flexDirection controla a direcao dos componetes, row, colum reverse*/
/* react native nao usa unidades de medidas*/
/* flex conteiner e o pai, e os flex item sao os filhos, flex box tem dois eixos 'x', e 'y'
 transversal e ertical* /
/* flex direction row e em linha se mudar para flex directon colun e em coluna */
/* justfYcontnt define como os elementos sao distribuidos no eixo principal que epende de ser alinhados em
row ou colun se for row o eixo principale o x se for colun e o y* main axis ou ceoss axis*/ 
/* alingItens e mais uma opcao de alinhamento  e o eixo secundario  e o judyfycontent e o eixo primarios*/
