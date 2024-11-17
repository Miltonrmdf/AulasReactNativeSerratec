import {View, StyleSheet} from "react-native";

export const Ex3 = () => {
    return(
        <View style={styles.cprincipal}>
        <View style={[styles.box, styles.cfilho1]}/>   {/*para usar dois ou mais estilos é só fazer um array de objetos igual a estas views de exemplo*/}
        <View style={[styles.box, styles.cfilho2]}/>
        <View style={[styles.box, styles.cfilho3]}/>
        </View>        
    )
}

const styles = StyleSheet.create ({
    cprincipal:{
        backgroundColor:"green",
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
    },

    box:{
        
        width:"20%",
        height:"10%"
    },

    cfilho1:{
        backgroundColor:"yellow",
    },

    cfilho2:{
        backgroundColor:"blue",
    },

    cfilho3:{
        backgroundColor:"white",
    }
})