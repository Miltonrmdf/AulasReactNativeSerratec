import { View, Text, StyleSheet } from "react-native"

export const DimensaoFixa = () => {
    return(
       <View style={styles.container}>
        {/* <Text> Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</Text> */}
        <View style={styles.fixo}/>
       </View> 
    )
   
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1, // faz a view expandir toda a tela
        backgroundColor:"purple", //cor do fundo da view
        justifyContent:"center", //alinhamento vertical
        alignItems:"center" //alinhamento horizontal
    },
    fixo:{
        width:150, //largura em medida fixa dp (densidade de pixels)
        height:150, //autura em medida fixa dp (densidade de pixels)
        backgroundColor:"red" //cor do fundo da view
    }
})