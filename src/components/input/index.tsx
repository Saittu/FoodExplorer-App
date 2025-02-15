import { View, Text, TextInput, type TextInputProps } from "react-native";
import { styles } from "./styles"
import { colors } from "@/src/styles/colors"
import { MaterialIcons } from "@expo/vector-icons";

type Props = TextInputProps & {
    label?: string;
    icon?: keyof typeof MaterialIcons.glyphMap 
  };

export function Input({ icon, label ,...rest}: Props){
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View>
                {icon && <MaterialIcons name={icon} size={22} color={colors.light[500]} style={styles.icon} />}
                <TextInput  returnKeyLabel={label} style={[styles.container, icon && { paddingLeft: 40 }]} placeholderTextColor={colors.light[500]} {...rest}/>
            </View>
        </View>
        
    )
}