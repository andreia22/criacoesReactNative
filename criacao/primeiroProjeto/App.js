import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,  Image, Button, Alert, ImageBackground } from 'react-native';
import Lp from './componentes/ListaPlana.js'; 
import Estilos from './estilos/Estilos.js';

/*const imgbg1= './assets/imagens/back1.jpg'
const imgbg2= './assets/imagens/back2.jpg'
const imgbg3= './assets/imagens/back3.jpg' para usar com o requeire "source={require('imgbg1')}" */

export default function App1(){
return (
    <View style={Estilos.conteiner}>
      <ImageBackground
      source={{uri:'https://th.bing.com/th/id/OIP.VJ4sDDOOPuX3t1SAhmSClQHaE8?pid=Api&rs=1'}}
      style={estilo.imagemFundo}
      >
      <Text style={Estilos.textoDia}>Vendo</Text>
      <Text style={Estilos.textoPadrao}>Motivo mudança</Text>
      <Lp/>
      </ImageBackground>
   </View>
    );
};

const estilo = StyleSheet.create({
  logo:{
    width:400,
    height:150,
    resizeMode: 'stretch'
 },
 imagemFundo:{
   flex:1,
   resizeMode:"cover",
 }
})

/*function msg(){
 Alert.alert('OI', 'Eu estou chegando')
}

 const dobro=n=>n*2
/* forma maids basica quando ha somente um paramtro ou quando fotr apenas uma linha " const soma=(n1,n2)=>n1+n2" */
/*const soma=(n1,n2)=>{
  return n1+n2 
}
export default function App1(){
  let fExibir= true;
  return(
    <View style={Estilos.conteiner}>
      <Button
        title="Mostrar mensagem"
        onPress={msg}
      />
     <Text> {dobro(2)}</Text>
     <Text> {soma(2,4)}</Text>
      <Image
        source={{uri:'http://marketingdeconteudo.com/wp-content/uploads/2016/08/imagens-gratis-1.jpg'}}
         style={estlilo.logo}
      />
      <Caixas exibir={fExibir}/>
      <Text style={Estilos.textoDia}>vamo que vamo</Text>
      <Text style={Estilos.textoPadrao}>cada dia aprendo mais</Text>
      {fExibir?<Text>RENDERIZAÇÃO MOSTRE</Text>:<Text>NAO MOSTRE</Text>}
      {fExibir && <Text>RENDERIZAÇÃO MOSTRE</Text>}
      <Image 
        source={require('./assets/logo1.jpg')}
      />
    </View>
  )
}*/



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
/* AEROFUNCTION:  (n)=> return n*2 apenas um parametro nao necessita os chaves e ainda posso tirar o return que
nao vai dar erro
 (n1,n2)=>{return n1+n2}
  SINTXE BASICA 
  uso uma variavel constante para referenciar no projetoaoinves de usar ma funcao.
  
  */