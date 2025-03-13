import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/components/globais/input";
import { Button } from "@/src/components/globais/button";
import { useRouter } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function signIn() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin() {
        if(!email || !password) {
            Alert.alert("Erro", "Preencha todos os campos")
            return
        }

        if(
            (email === "admin@admin.com" && password === "123456") ||
            (email === "teste@teste.com" && password === "123456")
        ) {
            const token = "meu_token"

            await AsyncStorage.setItem("userToken", token)
            await AsyncStorage.setItem("userEmail", email)

            if (email === "admin@admin.com") {
                router.replace("/Admin/home")
            } else {
                router.replace("/userPages/home")
            }
        } else {
            Alert.alert("Erro", "Credenciais inválidas.")
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
