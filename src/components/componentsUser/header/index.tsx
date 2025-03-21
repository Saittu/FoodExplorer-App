import { styles } from "./styles";
import { View, Image, Text, TouchableOpacity, Modal, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../../globais/input";
import { colors } from "@/src/styles/colors";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useCart } from "@/src/context/carContext";

export default function Header() {

    return (
        <View>
            <View style={styles.containerElements}>
                <View style={{flex: 1}}/>
                <View style={styles.textLogo}>
                    <Image style={styles.logo} source={require("@/src/assets/logo.png")} />
                    <Text style={styles.text}>Food Explorer</Text>
                </View>
                
                <Pressable onPress={() => {router.replace("/userPages/profile")}}>
                    <Image 
                        style={{ 
                            width: 25, 
                            height: 25, 
                            borderRadius: 999, 
                            marginLeft: 70,
                            marginRight: 20
                        }} 
                        source={require("@/src/assets/Images/defaultAvatar.jpg")}/>
                </Pressable>
                
            </View>
        </View>
    );
}