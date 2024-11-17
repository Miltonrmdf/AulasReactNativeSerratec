import { View, StyleSheet } from "react-native"

export const Ex1 =() =>{
    return(
        <View style={styles.principal}>
            <View style={styles.box1}/>
        </View>
    )
}

const styles = StyleSheet.create({ // () parenteses função e {} chaves objeto de estilo
    principal:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"black",
        alignItems:"center"
    },

    box1:{
        width:"30%",
        height:"100%",
        backgroundColor:"red"

    }

});