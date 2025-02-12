import { styles } from "./styles";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.containerElements}>
                <TouchableOpacity>
                    <MaterialIcons size={24} style={styles.icon} name="menu"/>
                </TouchableOpacity>
                
                <View style={styles.textLogo} >
                    <Image style={styles.logo} source={require("@/src/assets/logo.png")}/>
                    <Text style={styles.text}>Food Explorer</Text>
                </View>

                <TouchableOpacity>
                    <MaterialIcons size={24} style={styles.icon} name="shopping-cart"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}