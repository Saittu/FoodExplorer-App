import { styles } from "./styles";
import { type TouchableOpacityProps, TouchableOpacity, Text } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: Props){
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}