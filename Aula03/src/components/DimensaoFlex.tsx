import { View, Text, StyleSheet } from "react-native"

export const DimensaoFlex = () => {
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
        backgroundColor:"purple", //cor do fundo da view
    
        //justifyContent:"center", //alinhamento vertical
        //alignItems:"center" //alinhamento horizontal
    },
        //as demais estiliizações de view são as filhas que estão dentro do pai
    box1:{
        flex:3,
        backgroundColor:"cyan",  
    },

    box2:{
        flex:30,
        backgroundColor:"green",
    },

    box3:{
        flex:3,
        backgroundColor:"seteelpink",
    }

})