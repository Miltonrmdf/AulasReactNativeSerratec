import { View, Text, StyleSheet } from "react-native"

export const DimensaoPorcentagem = () => {
    return(
      
    <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
    </View>  
    )
   
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1, // faz a view expandir toda a tela pois ele é a view pai onde vai ficar tudo colocando o widih e hight automaticamente
        //já vem por padrão em coluna um item em cima do ourto, flexdirection row muda para linha
        backgroundColor:"purple", //cor do fundo da view
    
        //justifyContent:"center", //alinhamento verticaldos intens dentro da view pai
        alignItems:"center" //alinhamento horizontal dos intens dentro da view pai
    },
        //as demais estiliizações de view são as filhas que estão dentro do pai
    box1:{
        
        backgroundColor:"cyan",
        height:"20%",
        width:"100%",
    },

    box2:{
        backgroundColor:"green",
        height:"30%",
        width:"80%",
    },

    box3:{
        backgroundColor:"yellow",
        height:"40%",
        width:"100%",
    }

})