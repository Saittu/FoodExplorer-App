import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Input } from "@/src/components/input";
import { Button } from "@/src/components/button";
import { router } from "expo-router";


export default function signUp() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("@/src/assets/logo.png")}/>
                
                <Text style={styles.textLogo}>Food Explorer</Text>
            </View>

            <View style={styles.form}>
                <Input label={"Seu nome"} placeholder="Exemplo: Maria da Silva" autoCorrect={false}  />

                <Input label={"Email"} placeholder="Exemplo: exemplo@exemplo.com.br" autoCorrect={false} autoCapitalize="none" />

                <Input label={"Senha"} placeholder="No mínimo 6 caracteres" autoCorrect={false} secureTextEntry/>

                <Button title="Cadastrar"/>

                <TouchableOpacity onPress={() => router.replace("/signIn")}>
                    <Text style={styles.textRoute}>Já tenho uma conta</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
