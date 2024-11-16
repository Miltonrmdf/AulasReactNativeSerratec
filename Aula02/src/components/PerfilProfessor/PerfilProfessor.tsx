// o professor mostrou usando o areo function 

import { StyleSheet, Text, View } from "react-native"

//para deixar dinâmico vamos usar props (acho que é parametro), como estamos usando type script temos de definir o tipo que vamos usar
type PerilProps ={
    nome:string;
}

const PerfilProfessor = ({nome}:PerilProps) => {
    return(
        //solução com props, colocamos entre {} o parametro
        <View style={styles.fundoProf}>
        <Text> {nome} </Text>
        </View>


        //solução do atividade proposta pelo professor
        // <View style={styles.fundoProf}>
        // <Text> Professor João Felipe </Text>
        // </View>
    )
}

export default PerfilProfessor

const styles = StyleSheet.create({
    fundoProf: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });