import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { type TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import { colors } from "@/src/styles/colors";

type Props = TouchableOpacityProps & {
    title: string
    icon?: keyof typeof MaterialIcons.glyphMap
    onPress?: () => void
}

export function Button({ title, icon, onPress, ...rest }: Props){
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}  {...rest}>
            {icon && <MaterialIcons name={icon} size={20} color={colors.light[100]}  />}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}