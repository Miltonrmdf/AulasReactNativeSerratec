import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Teste } from './src/components/Teste'; //quando a função do componente esta sem o default eu posso tirar o {} e colocar qualquer nome que vai funcionar. Já sem o defaut obrigatório ter o mesmo nome do componente e estar entre bigode.
import { Perfil } from './src/components/Perfil/Perfil';
import PerfilProfessor from './src/components/PerfilProfessor/PerfilProfessor';

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil/>
      <Teste/>
      <PerfilProfessor nome="Jão Felipe"/>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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