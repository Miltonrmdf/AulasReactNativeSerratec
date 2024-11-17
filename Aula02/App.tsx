import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, StyleSheet,Image } from 'react-native';
import { Teste } from './src/components/Teste'; //quando a função do componente esta sem o default eu posso tirar o {} e colocar qualquer nome que vai funcionar. Já sem o defaut obrigatório ter o mesmo nome do componente e estar entre bigode.
import { Perfil } from './src/components/Perfil/Perfil';
import PerfilProfessor from './src/components/PerfilProfessor/PerfilProfessor';
import { Noticia } from './src/components/Noticia/Noticia';
import { Dados } from './src/components/Dados/Dados';

export default function App() {
  return (
    
    <View style={styles.container}>
      <ScrollView>
      {/* <Perfil/>
      <Teste/>
      <PerfilProfessor nome="Jão Felipe"/> */}
      {/* exercicio propos pedido pelo professor */}
      {/* <Noticia titulo={Dados[0].titulo} descricao={Dados[0].descricao} autor={Dados[0].autor} /> 
      <Noticia titulo={Dados[1].titulo} descricao={Dados[1].descricao} autor={Dados[1].autor} />  
       <Noticia titulo={Dados[2].titulo} descricao={Dados[2].descricao} autor={Dados[2].autor} />  */}
      
      <View style={styles.topo}>
        </View>

        {/* <Image 
          source={{  // quando a imgem esta local so abrir um par de {} "bigode". Quando é externa precisa de dois pares de {{uri:"aqui o endereço"}} bigodes
            uri:"https://picsum.photos/200/300"
            }}
            style={{width:300, height:200}} //sempre tem que definir o tamnho da imagem para ela aparecer e usando style. Aqui a invés de trazer de uma variavel externa o segundo {{}} bigode ja cria o objeto aqui na linha
        /> */}

      {Dados.map((noticia) =>( //dentro do parenteses é uma variavel não aceitou letra maiuscula
      <Noticia //aqui já estamos chamando o metodo 
        imagem={noticia.imagem}
        titulo={noticia.titulo}
        descricao={noticia.descricao} 
        autor={noticia.autor}
        />
      ))}   
      </ScrollView>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
     alignItems: "center",
        justifyContent:"center"
    
  },
  topo:{
flex:1
    }
});


{/* //---------exemplo usado no inicio da aula com o scrollview--------------------
    // <View style={styles.container}>
    //   <ScrollView>
    //       Dá pra fazer estilização in line 
    //   <Text style={{fontSize:200}}>Open up App.tsx to start working on your app!</Text>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   </ScrollView>
    // </View> */}