import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { router } from "expo-router";
import { useCart } from "@/src/context/carContext";

export default function Navigation() {
    const { cartCount } = useCart();

    return (
        <View style={styles.navigationContainer}>
            <TouchableOpacity onPress={() => { router.replace("/home") }}>
                <MaterialIcons size={24} style={styles.icon} name="home"/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => { router.navigate("/cart") }}>
                <MaterialIcons size={24} style={styles.icon} name="shopping-cart" />
                <View style={styles.badgeContainer}>
                    <Text style={styles.span}>
                        {cartCount}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons size={24} style={styles.icon} name="favorite-border"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { router.navigate("/requested") }}>
                <MaterialIcons size={24} style={styles.icon} name="shopping-basket" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { router.replace("/signIn") }}>
                <MaterialIcons size={24} style={styles.icon} name="logout"/>
            </TouchableOpacity>
        </View>
    );
}