import { View, Text, Image, Pressable, ScrollView } from "react-native"
import { Input } from "@/src/components/globais/input"
import { Button } from "@/src/components/globais/button"
import Header from "@/src/components/componentsUser/header"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/src/styles/colors"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import * as ImagePicker from "expo-image-picker";
import Navigation from "@/src/components/componentsUser/navigation"
import { user } from "@/src/utils/dados"
import { router } from "expo-router"
import { useUpdatedUser } from "@/src/storage/updatedUser"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Profile(){
    const [imageUri, setImageUri] = useState<string | null>(null)



    async function pickImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== "granted") {
                alert("Desculpe, precisamos de permissão para acessar suas fotos!")
                return;
            }
        
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                selectionLimit: 1,
            });
        
        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
    }

    return(
        <View style={styles.main}>
            <Header/>
            <ScrollView style={styles.container}>
                <View style={styles.boxImage}>
                    <Image style={{ width: 200, height: 200, borderRadius: 999}} source={imageUri ? {uri: imageUri} : require("@/src/assets/Images/defaultAvatar.jpg")} />
                    <Pressable style={styles.buttonUpload} onPress={pickImage} >
                        <MaterialIcons color={colors.light[100]} size={24} name="upload"/>
                        <Text style={styles.textButtonUpload}>Alterar foto de perfil</Text>
                    </Pressable>
                </View>
                <View style={styles.box}>
                    <View style={{ gap: 10}}>
                        <Text style={styles.span}>Nome</Text>
                        <Text style={styles.text}>Jean</Text>
                    </View>
                    <View style={styles.alterar}>
                        <Pressable>
                            <MaterialIcons color={colors.light[100]} size={24} name="arrow-right"/>
                        </Pressable> 
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{ gap: 10}}>
                        <Text style={styles.span}>E-mail</Text>
                        <Text style={styles.text}>jean@teste.com</Text>
                    </View>
                    <View style={styles.alterar}>
                        <Pressable>
                            <MaterialIcons color={colors.light[100]} size={24} name="arrow-right"/>
                        </Pressable> 
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{ gap: 10}}>
                        <Text style={styles.span}>Alterar sua senha</Text>
                    </View>
                    <View style={styles.alterar}>
                        <Pressable>
                            <MaterialIcons color={colors.light[100]} size={24} name="arrow-right"/>
                        </Pressable> 
                    </View>
                </View>
                
                <View style={{ paddingTop: 20}}>
                    <Button title="Salvar alterações" />
                </View>
                
            </ScrollView>
            <Navigation/>
            
        </View>
    )
}