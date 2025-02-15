import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Footer(){
    return(
        <View style={styles.box}>
            <View style={styles.container}>
                <View style={styles.contentTextLogo}>
                    <Image source={require("@/src/assets/Images/polygonFooter.png")}/>
                    <Text style={styles.textWork}>Food Explorer</Text>
                </View>

                <View >
                    <Text style={styles.textLicence}>© 2023 - Todos os direitos reservados.</Text>
                </View>
            </View>
        </View>
        
    )
}