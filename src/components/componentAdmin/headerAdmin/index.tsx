import { styles } from "./styles";
import { View, Image, Text } from "react-native";

export default function HeaderAdmin() {

    return (
        <View>
            <View style={styles.containerElements}>
                <View style={styles.textLogo}>
                    <Image style={styles.logo} source={require("@/src/assets/logo.png")} />
                    <Text style={styles.text}>Food Explorer</Text>
                    <Text style={styles.textAdmin}>Admin</Text>
                </View>
            </View>
        </View>
    );
}