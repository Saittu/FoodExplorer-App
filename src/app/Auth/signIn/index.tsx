import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Input } from "@/src/components/componentsUser/input";
import { Button } from "@/src/components/componentsUser/button";
import { useRouter } from "expo-router";


export default function signIn() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("@/src/assets/logo.png")}/>
                
                <Text style={styles.textLogo}>Food Explorer</Text>
            </View>

            <View style={styles.form}>
                <Input label={"Email"} placeholder="Exemplo: exemplo@exemplo.com.br" autoCorrect={false} autoCapitalize="none" />

                <Input label={"Senha"} placeholder="No mínimo 6 caracteres" autoCorrect={false} secureTextEntry/>

                <Button title="Entrar" onPress={() => router.replace("/home")}/>

                <TouchableOpacity onPress={() => router.navigate("/signUp")}>
                    <Text style={styles.textRoute}>Criar uma conta</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
