import { View, Text } from "react-native";
import { styles } from "./styles"
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";


export default function updatedDishes() {
    return (
        <View style={styles.main}>
            <HeaderAdmin/>
            
            <View style={styles.content}>

            </View>

            <NavigationAdmin/>
        </View>
    )
}