import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { styles } from "./style";
import { Input } from "@/src/components/globais/input";
import { Button } from "@/src/components/globais/button";
import { router } from "expo-router";
import { useCreateUser } from "@/src/storage/addUser";
import { useState } from "react";
import uuid from "react-native-uuid"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function signUp() {
    const { users, addUser } = useCreateUser()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleAddUser = async () => {
        if(!email || !password || !name) return Alert.alert("Preencha todos os campos")

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) 
            return Alert.alert("Digite um e-mail válido!")
        
        if (!email.endsWith(".com")) 
            return Alert.alert("O e-mail deve terminar com .com")

        if(password.length < 6) return Alert.alert("Sua senha não atende a quantidade de caracteres.")

        const newUser = {
            id: uuid.v4(),
            name,
            email,
            password
        }
        try {
            const storedUsers = await AsyncStorage.getItem("users")
            const usersArray = storedUsers ? JSON.parse(storedUsers) : []

            usersArray.push(newUser)

            await AsyncStorage.setItem("users", JSON.stringify(usersArray))

            addUser(newUser)
            setName("")
            setEmail("")
            setPassword("")

            Alert.alert("Usuário cadastrado com sucesso!")
            router.replace("/Auth/signIn")
        } catch (error) {
            console.error("Erro ao salvar o usuário!", error)
        }

        
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("@/src/assets/logo.png")}/>
                
                <Text style={styles.textLogo}>Food Explorer</Text>
            </View>

            <View style={styles.form}>
                <Input 
                    label={"Seu nome"} 
                    placeholder="Exemplo: Maria da Silva" 
                    value={name} 
                    onChangeText={setName}
                />

                <Input 
                    label={"Email"} 
                    placeholder="Exemplo: exemplo@exemplo.com" 
                    autoCorrect={false} 
                    autoCapitalize="none" 
                    value={email} 
                    onChangeText={setEmail}
                />

                <Input 
                    label={"Senha"} 
                    placeholder="No mínimo 6 caracteres" 
                    autoCorrect={false} 
                    value={password} 
                    onChangeText={setPassword}
                    secureTextEntry/>

                <Button title="Cadastrar" onPress={handleAddUser}/>

                <TouchableOpacity onPress={() => router.replace("/Auth/signIn")}>
                    <Text style={styles.textRoute}>Já tenho uma conta</Text>
                </TouchableOpacity>
                    
            </View>
              
           
            
        </View>
    )
}
