import { View, Text, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { LinearGradient } from "expo-linear-gradient"

import Header from "@/src/components/header";
import BoxRefeicoes from "@/src/components/boxRefeicoes";
import Footer from "@/src/components/footer";
import { pratos } from "@/src/utils/pratos";

export default function Home() {
    const pratosFirst = pratos.slice(0, 3)
    const pratosSecond = pratos.slice(3, 6)
    const pratosThird = pratos.slice(6, 8)

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
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
            
            <BoxRefeicoes categorias="Refeições" dishes={pratosFirst}/>
            <BoxRefeicoes categorias="Entradas" dishes={pratosSecond}/>
            <BoxRefeicoes categorias="Outros" dishes={pratosThird}/>

            <Footer/>
        </ScrollView>

    )
}