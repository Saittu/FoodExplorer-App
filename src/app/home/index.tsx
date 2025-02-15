import { View, Text, Image, ScrollView, Modal, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { LinearGradient } from "expo-linear-gradient"

import Header from "@/src/components/header";
import BoxRefeicoes from "@/src/components/boxRefeicoes";
import Footer from "@/src/components/footer";
import { pratos } from "@/src/utils/pratos";
import { Input } from "@/src/components/input";
import { colors } from "@/src/styles/colors";
import { router } from "expo-router";
import { useState } from "react";

export default function Home() {
    const pratosFirst = pratos.slice(0, 3)
    const pratosSecond = pratos.slice(3, 6)
    const pratosThird = pratos.slice(6, 8)

    const [showModal, setShowModal] = useState(false)

    const handleDetails = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setTimeout(() => {
            router.replace("/signIn"); 
        }, 100);
        setShowModal(false)
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header onDetails={handleDetails}/>

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
            <Modal  transparent visible={showModal} animationType="fade">
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => {setShowModal(false)}}>
                            <MaterialIcons color={colors.light[100]} size={26} name="close" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Menu</Text>
                    </View>

                    <View style={styles.modalContent}>
                        
                        <Input icon="search" placeholder="Busque por pratos ou ingredientes"/>

                        <View style={styles.containerText}>
                            <TouchableOpacity onPress={handleCloseModal}>
                                <Text  style={styles.contentText} >Sair</Text>
                            </TouchableOpacity>
                        </View>
                    
                    </View>

                    <View style={styles.boxFooter}>
                        <Footer/>
                    </View>       

                </View>
            </Modal>
        </ScrollView>

    )
}