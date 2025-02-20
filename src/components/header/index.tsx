import { styles } from "./styles";
import { View, Image, Text, TouchableOpacity, Modal,  } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../input";
import Footer from "../footer";
import { colors } from "@/src/styles/colors";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useCart } from "@/src/context/carContext";

export default function Header(){
    const { cart } = useCart();
    const { cartCount } = useCart()
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

    useEffect(() => {
        console.log("Carrinho global:", cart); 
    }, [cart]); 



    return(
        <View>
            <View style={styles.containerElements}>
                <TouchableOpacity onPress={handleDetails}>
                    <MaterialIcons size={24} style={styles.icon} name="menu"/>
                </TouchableOpacity>
                
                <View style={styles.textLogo} >
                    <Image style={styles.logo} source={require("@/src/assets/logo.png")}/>
                    <Text style={styles.text}>Food Explorer</Text>
                </View>

                <TouchableOpacity>
                    <MaterialIcons size={24} style={styles.icon} name="shopping-cart"/>
                    <View style={styles.badgeContainer}>
                        <Text style={styles.span}>{cartCount}</Text>
                    </View>
                </TouchableOpacity>
            </View>

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
        </View>
    )
}