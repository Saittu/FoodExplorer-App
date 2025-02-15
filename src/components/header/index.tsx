import { styles } from "./styles";
import { View, Image, Text, TouchableOpacity,  } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    onDetails: () => void
}

export default function Header({ onDetails }: Props){
    return(
        <View>
            <View style={styles.containerElements}>
                <TouchableOpacity onPress={onDetails}>
                    <MaterialIcons size={24} style={styles.icon} name="menu"/>
                </TouchableOpacity>
                
                <View style={styles.textLogo} >
                    <Image style={styles.logo} source={require("@/src/assets/logo.png")}/>
                    <Text style={styles.text}>Food Explorer</Text>
                </View>

                <TouchableOpacity>
                    <MaterialIcons size={24} style={styles.icon} name="shopping-cart"/>
                    <View style={styles.badgeContainer}>
                        <Text style={styles.span}>0</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}