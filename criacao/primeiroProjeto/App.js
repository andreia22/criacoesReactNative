import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native'; 
import C1  from './componentes/comp1'
import Estilos from './estilos/Estilos.js';
import Caixas  from './componentes/Caixas';


export default function App1(){
  let fExibir= true
  return(
    <View style={Estilos.conteiner}>
      <Caixas exibir={fExibir}/>
      <Text style={Estilos.textoDia}>vamo que vamo</Text>
      <Text style={Estilos.textoPadrao}>cada dia aprendo mais</Text>
      {fExibir?<Text>RENDERIZAÇÃO MOSTRE</Text>:<Text>NAO MOSTRE</Text>}
      {fExibir && <Text>RENDERIZAÇÃO MOSTRE</Text>}
    </View>
  );
};

/*(AEROFUNCTION )
const fExibir = (valor1)=> {
  if(valor1){
    return(<Text>RENDERIZAÇÃO MOSTRE</Text>)
  }else{
return(<Text>NAO MOSTRE</Text>)
  }  
}*/
/*RENDERIZAÇÃO CONDICIONAL: podeser usado apartir de uma funcao apenas uma varivel que ja e inicializade como TRUE
 ou FALSE e podemos usar aerofunction aerofunction.
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
