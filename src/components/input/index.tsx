import { View, Text, TextInput, type TextInputProps } from "react-native";
import { styles } from "./styles"
import { colors } from "@/src/styles/colors"

type Props = TextInputProps & {
    label: string;
  };

export function Input({ label ,...rest}: Props){
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput returnKeyLabel={label} style={styles.container} placeholderTextColor={colors.light[500]} {...rest}/>
        </View>
        
    )
}