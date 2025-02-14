import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { LinearGradient } from "expo-linear-gradient"

import Header from "@/src/components/header";


export default function Home() {
    return(
        <View>
            <Header/>

            <View style={styles.containerInfo}>
                <Image style={styles.bannerImage} source={require("@/src/assets/Images/imageBoxInfo.png")}/>
                <LinearGradient colors={["#091E26", "#00131C"]} style={styles.bannerContainer}>
                    <View style={styles.infoBox}>
                        <Text style={styles.title}>Sabores inigualáveis</Text>
                        <Text style={styles.description}>Sinta o cuidado do preparo com ingredientes selecionados.</Text>
                    </View>
                </LinearGradient>
            </View>
            

        </View>
    )
}