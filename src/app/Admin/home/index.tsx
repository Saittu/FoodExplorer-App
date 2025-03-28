import { View, Text, Image, ScrollView, Platform } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import BoxPratos from "@/src/components/componentsUser/boxPratos";
import { pratos } from "@/src/utils/dados";
import { useState } from "react";
import { useCart } from "@/src/context/carContext";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import DishesAdmin from "@/src/components/componentAdmin/DishesAdmin";


export default function Home() {

    return(
        <View style={styles.main}>
            <View>
                <HeaderAdmin/>
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
                        <DishesAdmin key={category} category={category}  />
                    ))}

                    <View style={{ paddingTop: Platform.OS === "ios" ? 220 : 160}}></View>
                </ScrollView>
            </View>
            <NavigationAdmin/>
        </View>


    )
}