import { colors } from "@/src/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Button } from "../button";
import { styles } from "./styles";
import { Input } from "../input";

interface ProfileBoxProps {
    label: string
    value?: string
    placeholder: string
    secondInput?: string
    thirdInput?: string
}


export default function ProfileOption({label, value, placeholder, secondInput, thirdInput}: ProfileBoxProps){
    const [isEditing, setIsEditing] = useState(false)
    
    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{ gap: 10}}>
                    <Text style={styles.span}>{label}</Text>
                    {value && <Text style={styles.text}>{value}</Text>}
                </View>
                <View style={styles.alterar}>
                    <Pressable onPress={toggleEditing}>
                        <MaterialIcons color={colors.light[100]} size={24} name={isEditing ? "keyboard-arrow-down" : "keyboard-arrow-right"}/>
                    </Pressable> 
                </View>
            </View>
            
            {isEditing && (
                <View>
                    <View>
                        <Input placeholder={placeholder}/>
                        {secondInput && <Input placeholder={secondInput}/>}
                        {thirdInput && <Input placeholder={thirdInput}/>}
                    </View>
                    <View style={{paddingVertical: 25}}>
                        <Button title="Salvar alterações"/>
                    </View>
                </View>
                
            )}
        </View>
    )
}