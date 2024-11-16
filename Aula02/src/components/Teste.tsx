import { StyleSheet, Text, View } from "react-native";

export function Teste(){
    return(// quando retorna uma linha não precisa do (), mas quando for mais de um elemento precisa do (). o return só retorna um elemento ou usamos o fragmento <></> ou uma <View><View/>
        //se eu precisar estilizar o componente uso a view se não uso o fraguimento, pois não da pra estilizar
       // <>
       <View style={styles.fundoTeste}>
            <Text>Helo</Text>
            <Text>World!</Text>
        </View> 
        //</>
    );
}
//Devemos colocar os estilos direto no componente, mas esse foi o jeito que encontrei de deixar tudo centralizado
const styles = StyleSheet.create({
    fundoTeste: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

// //para criar um componente tem que ter uma das funções abaixo:

// // as duas formas abaixo são similares...
// function Teste(){
//     return();
// }

// const Teste =() =>{
//     return();
// }
  
// //----------------
// export default Teste;// quando tenho o default só dá pra exoportar uma vez, alem de não precisar usar o {}'bigode' na hora de importar, pois se colocar dá erro.
// // ou
// export {Teste}// Quando quero exportar várias coisas dentro do arquivo utiliza o export sem default. E na hora de importar precisa do {} 'bigode'
// é escolhido pelo grupo qual dessas funções usar, pois o grupo é quem cria o padrão


