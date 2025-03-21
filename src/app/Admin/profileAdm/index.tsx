import { View, Text, Image, Pressable, ScrollView, Platform } from "react-native"
import { Input } from "@/src/components/globais/input"
import { Button } from "@/src/components/globais/button"
import Header from "@/src/components/componentsUser/header"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/src/styles/colors"
import { styles } from "./style"
import { useEffect, useState } from "react"
import * as ImagePicker from "expo-image-picker";
import Navigation from "@/src/components/componentsUser/navigation"
import { user } from "@/src/utils/dados"
import { router, useLocalSearchParams } from "expo-router"
import { useUpdatedUser } from "@/src/storage/updatedUser"
import AsyncStorage from "@react-native-async-storage/async-storage"
import ProfileOption from "@/src/components/globais/profileOptions"
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin"
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin"

export default function Profile(){
    const { user, updatedUser } = useUpdatedUser()
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
            const newImageUri = result.assets[0].uri
            setImageUri(newImageUri); 
            updatedUser({ image: newImageUri }); 

            
            await AsyncStorage.setItem("userImage", newImageUri)
        }
    }

    useEffect(() => {
        async function loadImage() {
            const storedImageUri = await AsyncStorage.getItem("userImage");
            if (storedImageUri) {
                setImageUri(storedImageUri);
                updatedUser({ image: storedImageUri });  
            }
        }

        loadImage();
    }, []);
    
    async function saveProfile() {
        await AsyncStorage.setItem("userData", JSON.stringify(user));
        alert("Perfil atualizado!");
    }

    return(
        <View style={styles.main}>
            <HeaderAdmin/>
            <ScrollView style={styles.container}>
                <View style={styles.boxImage}>
                    <Image style={{ width: 200, height: 200, borderRadius: 999}} source={imageUri ? {uri: imageUri} : require("@/src/assets/Images/defaultAvatar.jpg")} />
                    <Pressable style={styles.buttonUpload} onPress={pickImage} >
                        <MaterialIcons color={colors.light[100]} size={24} name="upload"/>
                        <Text style={styles.textButtonUpload}>Alterar foto de perfil</Text>
                    </Pressable>
                </View>
                
                <ProfileOption label="Nome" value="Admin" placeholder="Alterar nome"/>

                <ProfileOption label="E-mail" value="admin@admin.com" placeholder="Alterar E-mail" secondInput="Confirme sua senha"/>

                <ProfileOption label="Alterar sua senha" placeholder="Senha Atual" secondInput="Nova senha" thirdInput="Confirme nova senha"/>
                
                <ProfileOption label="Criar novo Administrador" placeholder="Nome" secondInput="E-mail" thirdInput="Crie uma senha min 6 digitos"/>

                <View style={{ paddingTop: Platform.OS === "ios" ? 220 : 160}}></View>

            </ScrollView>
            <NavigationAdmin/>
            
        </View>
    )
}