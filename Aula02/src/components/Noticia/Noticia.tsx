import { View, Text, StyleSheet, Image } from "react-native";

type Noticia = {
    titulo: string;
    descricao: string;
    autor: string;
    imagem: string;
};

export const Noticia = ({ imagem, titulo, descricao, autor }: Noticia) => {
    return(
        <View style={styles.quadroNotica}>
            <Image style={styles.imagem} source={{uri:imagem}} />
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
    },

    imagem:{
        width:300, 
        height:200
    }
})