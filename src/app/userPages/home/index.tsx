import { View, Text, Image, ScrollView, Platform } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

import Header from "@/src/components/componentsUser/header";
import BoxPratos from "@/src/components/componentsUser/boxPratos";
import { pratos } from "@/src/utils/pratos";
import { useState } from "react";
import { useCart } from "@/src/context/carContext";
import Navigation from "@/src/components/componentsUser/navigation";

export default function Home() {
    const { addToCart } = useCart()

    return(
        <View style={styles.main}>
            <View>
                <Header/>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                    <View style={styles.containerInfo}>
                        <Image style={styles.bannerImage} source={require("@/src/assets/Images/imageBoxInfo.png")}/>
                        <LinearGradient colors={["#091E26", "#00131C"]} style={styles.bannerContainer}>
                            <View style={styles.infoBox}>
                                <Text style={styles.title}>Sabores inigualáveis</Text>
                                <Text style={styles.description}>Sinta o cuidado do preparo com ingredientes selecionados.</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    
                    {["Refeições", "Sobremesas", "Bebidas"].map((category) => (
                        <BoxPratos key={category} category={category} onAddToCart={addToCart} />
                    ))}

                    <View style={{ paddingTop: Platform.OS === "ios" ? 220 : 160}}></View>
                </ScrollView>
            </View>
            <Navigation/>
        </View>


    )
}