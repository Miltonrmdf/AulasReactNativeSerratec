import { View, StyleSheet } from  "react-native";

export const Ex2 = () => {
    return(
        <View style={styles.cprincipal}>
        <View style={styles.cfilho}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    
    cprincipal:{
        backgroundColor:"red",
        alignContent:"center",
        flexDirection:"column",
        justifyContent:"center",

        flex: 1,

    },

    cfilho:{
        backgroundColor:"black",
        height:"15%",
        width:"100%"
    }

});