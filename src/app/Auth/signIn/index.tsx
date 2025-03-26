import { View, Text, Image, TouchableOpacity, Alert, AppState } from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/components/globais/input";
import { Button } from "@/src/components/globais/button";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { user, Users } from "@/src/utils/dados";
import React, { useState } from 'react'
import { supabase } from "@/src/lib/supabase";

export default function signIn() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        if(!email || !password) {
            Alert.alert("Erro", "Preencha todos os campos")
            return
        }

        try {
            const storedUsers = await AsyncStorage.getItem("users");
            let usersArray: { id: string; name: string; email: string; password: string, manager: "admin" | "user" }[] = [];

            
            if (storedUsers) {
                usersArray = JSON.parse(storedUsers);
            }
            const allUsers = [...usersArray, ...user]

            console.log("Usuários armazenados no AsyncStorage:", allUsers)

            const foundUser = allUsers.find((user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password)

            console.log("Usuário encontrado:", foundUser);

            if(foundUser){
                const token = "meu_token"
        
                await AsyncStorage.setItem("userToken", token)
                await AsyncStorage.setItem("userData", JSON.stringify(foundUser))
        
                if (foundUser.manager === "admin") {
                    router.replace("/Admin/home")
                } else {
                    router.replace("/userPages/home")
                }
                console.log(foundUser)
            } else {
                Alert.alert("Erro", "Credenciais inválidas.")
            }
        } catch (error) {
            console.error("Erro ao buscar usuários cadastrados", error);
            Alert.alert("Erro", "Ocorreu um erro ao fazer login.");
        }
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image  source={require("@/src/assets/logo.png")}/>
                
                <Text style={styles.textLogo}>Food Explorer</Text>  
            </View>

            <View style={styles.form}>
                <Input value={email} onChangeText={setEmail} label={"Email"} placeholder="Exemplo: exemplo@exemplo.com.br" autoCorrect={false} autoCapitalize="none" />

                <Input value={password} onChangeText={setPassword} label={"Senha"} placeholder="No mínimo 6 caracteres" autoCorrect={false} secureTextEntry/>

                <Button title="Entrar" onPress={handleLogin}/>

                <TouchableOpacity onPress={() => router.navigate("/Auth/signUp")}>
                    <Text style={styles.textRoute}>Criar uma conta</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
