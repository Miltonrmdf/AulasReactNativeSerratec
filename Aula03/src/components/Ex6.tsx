import { View, StyleSheet } from "react-native";

export const Ex6 = () => {
    return (
        <View style={styles.cprincipal}>
            <View style={styles.linha}>
                <View style={[styles.box, styles.cfilho1]} />   {/*para usar dois ou mais estilos é só fazer um array de objetos igual a estas views de exemplo*/}
                <View style={[styles.box, styles.cfilho2]} />
                <View style={[styles.box, styles.cfilho3]} />
            </View>
            <View style={styles.linha}>
                <View style={[styles.box, styles.cfilho1]} />   {/*para usar dois ou mais estilos é só fazer um array de objetos igual a estas views de exemplo*/}
                <View style={[styles.box, styles.cfilho2]} />
                <View style={[styles.box, styles.cfilho3]} />
            </View>
            <View style={styles.linha}>
                <View style={[styles.box, styles.cfilho1]} />   {/*para usar dois ou mais estilos é só fazer um array de objetos igual a estas views de exemplo*/}
                <View style={[styles.box, styles.cfilho2]} />
                <View style={[styles.box, styles.cfilho3]} />
            </View>
            <View style={styles.linha}>
                <View style={[styles.box, styles.cfilho1]} />   {/*para usar dois ou mais estilos é só fazer um array de objetos igual a estas views de exemplo*/}
                <View style={[styles.box, styles.cfilho2]} />
                <View style={[styles.box, styles.cfilho3]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cprincipal: {
        backgroundColor: "green",
        flex: 1,
        flexDirection: "column",
    },

    linha: {
        width:"100%",
        height:"25%",
        alignItems: "center",
        flexDirection:"row",
       justifyContent: "space-around"
    },

    box: {
        width: "25%",
        height: "50%",
    },

    cfilho1: {
        backgroundColor: "yellow",
    },

    cfilho2: {
        backgroundColor: "blue",
    },

    cfilho3: {
        backgroundColor: "white",
    }
})