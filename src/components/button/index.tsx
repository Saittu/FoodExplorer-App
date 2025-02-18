import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { type TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import { colors } from "@/src/styles/colors";

type Props = TouchableOpacityProps & {
    title: string
    icon?: keyof typeof MaterialIcons.glyphMap
}

export function Button({ title, icon, ...rest }: Props){
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            {icon && <MaterialIcons name={icon} size={20} color={colors.light[100]}  />}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}