import { styles } from "./styles";
import { View, Image, Text, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../input";
import { colors } from "@/src/styles/colors";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useCart } from "@/src/context/carContext";

export default function Header() {

    return (
        <View>
            <View style={styles.containerElements}>
                <View style={styles.textLogo}>
                    <Image style={styles.logo} source={require("@/src/assets/logo.png")} />
                    <Text style={styles.text}>Food Explorer</Text>
                </View>
            </View>
        </View>
    );
}