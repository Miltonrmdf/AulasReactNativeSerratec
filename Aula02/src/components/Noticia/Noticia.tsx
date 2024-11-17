import { View, Text, StyleSheet } from "react-native";

type Noticia = {
    titulo: string;
    descricao: string;
    autor: string;
};

export const Noticia = ({ titulo, descricao, autor }: Noticia) => {
    return(
        <View style={styles.quadroNotica}>
            <Text style={styles.tituloNoticia}>{titulo}</Text>
            <Text style={styles.descricacaoNoticia}>{descricao}</Text>
            <Text style={styles.autorNoticia}>{autor}</Text>
        </View>   
        )
}



const styles = StyleSheet.create({
    quadroNotica:{
        flex:1,
        backgroundColor:"green",
        alignItems: "center",
        justifyContent:"center"
    },

    tituloNoticia:{
        fontSize:45,
        color:"white"
    },

    descricacaoNoticia:{
        fontSize:35,
        color:"pink"
    },

    autorNoticia:{
        fontSize:15,
        color:"cyan"
    }

})