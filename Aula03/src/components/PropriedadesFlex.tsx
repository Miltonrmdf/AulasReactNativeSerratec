import { View, StyleSheet } from "react-native";

export const PropriedadesFlex = () =>{
return(
    <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
    </View>  
    
)
};

const styles = StyleSheet.create({
    container:{
        flex: 1, // faz a view expandir toda a tela pois ele é a view pai onde vai ficar tudo colocando o widih e hight automaticamente
        flexDirection:"row",//já vem por padrão o eixo principal vem em coluna um item em cima do ourto, flexdirection row muda para linha
        //backgroundColor:"purple", //cor do fundo da view
        //Aqui no justifyContent mudamos tambem onde ficam os itens no eixo principal flex-start no inicio, center no meio e flex-end no final
        justifyContent:"space-around", //alinhamento no eixo vertical dos intens dentro da view pai.  
        alignItems:"center" //alinhamento no eixo cruzado dos intens dentro da view pai, tem baseline,stretch,flex-start e flex-end
        //ainda como o alinhamento temos o espaçamento com space-between, space-around e space-evenly
    },
        //-------------------------------------------------------------
        //as demais estiliizações de view são as filhas que estão dentro do pai
    box1:{
        
        backgroundColor:"cyan",
        height:100,
        width: 100,
        alignSelf:"flex-start"//quando queremos mudar so um elemento do alinhamento do eixo usamos essa proprieda
    },

    box2:{
        backgroundColor:"green",
        height:100,
        width: 100,
    },

    box3:{
        backgroundColor:"yellow",
        height:100,
        width: 100,
    }

})