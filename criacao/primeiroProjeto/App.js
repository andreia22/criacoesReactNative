import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { Text, View } from 'react-native';
import C1 from 'componentes/comp1.js';


export default function App1(){
  return(
    <View>
      <C1/>
    </View>
  );
};



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
