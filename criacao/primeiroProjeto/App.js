import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
import C1  from './componentes/comp1'
import Estilos from './estilos/Estilos.js';

export default function App1(){
  return(
    <View style={Estilos.conteiner}>
      <C1 dia="segunda" mes="11"  ano="2020" />
      <C1 dia="terca" mes="11" ano="2020" />
      <C1 dia="quarta"  mes="11"ano="2020" />
      <C1 dia="quinta"  mes="11" ano="2020" />
      <Text style={Estilos.textoDia}>vamo que vamo</Text>
      <Text style={Estilos.textoPadrao}>cada dia aprendo mais</Text>
    </View>
  );
};

/* propriedades: style e uma propriedade tambem, 
/* formatacao inline enecessario duas chaves*/
/*Podemos ulilizar tanto o componente de classe como o de função, ma e ncessario faser a importacao do
 componente podemos utilizar os dois dependendo das necessidades do projeto, o babel e o responsvelpela 
traduação do jsx para o conteudo nativo da pratforma do aplicativo nativo ios ou android*/

/* criamos um componente e podemos reaproveila-lo em varios momentos entro do aplicativo*/

/*export default class app1 extends Component{
  render(){
    return(
      <View>
      <View>
        <Text>Vamos la agora eu consegui</Text>
      </View>
     <View>
      <Text>Vamos la agora eu consegui</Text>
      <Text>Vamos la agora eu consegui</Text>
    </View>
    </View>
    );
  }
}*/
