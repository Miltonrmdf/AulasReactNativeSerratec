import { View, Text, StyleSheet } from "react-native";

export function Perfil(){
    return(
        <View style={styles.fundoPerfil}>
            <Text> Milton Maridão! </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    fundoPerfil: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoPerfil:{
        flex:1
    }
  });
  