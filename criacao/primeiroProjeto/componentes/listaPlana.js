import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native'; 

const produtos= [
    {
        id:'001',
        desc: ['TV','2.000']
    },
    {
        id:'002',
        desc: ['Maquina de lava','2.000']
    },
    {
        id:'03',
        desc: ['Mesa de centro de imbuia','600']
    },
    {
        id:'04',
        desc: ['Mesa de centro de imbuia','600']
    },
    {
        id:'05',
        desc: ['Mesa de centro de imbuia','600']
    }
]
export default function(){
    return(
        <View>
                <FlatList 
                    data={produtos}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><View style={estilos2.item}><Text style={estilos2.prod}>Descrição: {item.desc[0]} - Valor: {item.desc[1]}</Text></View>}
                />
        </View>
    )
}
const estilos2 = StyleSheet.create({
    item:{
        backgroundColor:'#008',
        padding: 15,
        marginVertical:8,
        marginHorizontal:16
    },
    prod:{
       fontSize:15,
       color:'#fff' 
    }
})