import { Text, View, StyleSheet } from 'react-native';

export const Desafio = () =>{
    return(
        <View style={styles.cFundo}>
            <View style={styles.cNavbar}/>
            <View style={styles.cBodySup}>
                <View style={styles.cLMaiSup}>
                    <View style={styles.cQMaiLSup}/>
                </View>
                <View style={styles.cLMenSup}>
                    <View style={styles.cQMenLSup}/>
                </View>
            </View>
            <View style={styles.cLinhaPubli}>
                <View style={styles.cPubliEsq}/>
                <View style={styles.cPubliDir}/>
            </View>
            <View style={styles.cBody}>
                <View style={styles.cLinha}>
                    <View style={styles.cNotic}/>
                    <View style={styles.cNotic}/>
                    <View style={styles.cNotic}/>
                </View>
                <View style={styles.cLinha}>
                    <View style={styles.cNotic}/>
                    <View style={styles.cNotic}/>
                    <View style={styles.cNotic}/>
                </View>                                    
            </View>
            <View style={styles.cfooter}/>
        </View>
    )
}

const styles=StyleSheet.create({
    cFundo:{
        flex:1,
        backgroundColor:"white"
    },

    cNavbar:{
        flex:7,
        backgroundColor:"cyan"
    },

    cBodySup:{
        height:"30%",
        justifyContent:"space-around"
    },

    cLMaiSup:{
        height:"65%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    cQMaiLSup:{
        height:"70%",
        width:"30%",
        backgroundColor:"gold"
    },

    cLMenSup:{
        height:"30%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },

    cQMenLSup:{
        height:"55%",
        width:"45%",
        backgroundColor:"gold"
    },
//--------------linha------------
    cLinhaPubli:{
        flex:15,
        backgroundColor:"green",
        flexDirection:"row"
    },

    cPubliEsq:{
        height:"90%",
        width:"50%",
        backgroundColor:"purple"
    },

    cPubliDir:{
        height:"90%",
        width:"50%",
        backgroundColor:"blue"
    },
//------------body infeiror----------
    cBody:{
        flex:35,
        backgroundColor:"#fff"

    },

    cLinha:{
        flex:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },

    cNotic:{
        height:"60%",
        width:"25%",
        backgroundColor:"red"
    },
//------------------footer-----------------
    cfooter:{
        flex:9,
        backgroundColor:"cyan"
    }

})