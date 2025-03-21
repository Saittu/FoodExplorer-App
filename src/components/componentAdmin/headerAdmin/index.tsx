import { router, useLocalSearchParams, useRouter } from "expo-router";
import { styles } from "./styles";
import { View, Image, Text, Pressable, ActivityIndicator } from "react-native";
import { user, Users } from "@/src/utils/dados";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUpdatedUser } from "@/src/storage/updatedUser";

export default function HeaderAdmin() {
    const { user } = useUpdatedUser();
    const [loggedInUser, setLoggedInUser] = useState<Users | null>(null);
    const router = useRouter();

    // Recuperar o ID do usuário logado
    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await AsyncStorage.getItem("userData");
            if (userData) {
                const currentUser = JSON.parse(userData);

                // Caso o usuário logado seja um admin, busque seus dados
                if (currentUser.manager === "admin") {
                    setLoggedInUser(currentUser);
                }
            }
        };

        fetchUserData();
    }, []);

    // Navegar para o perfil do admin
    const navigateToProfile = () => {
        if (loggedInUser) {
            // Serializar o objeto para passar como parâmetro
            const serializedUser = JSON.stringify(loggedInUser);

            // Passar o parâmetro serializado
            router.push({
                pathname: "/Admin/profileAdm",
                params: { userData: serializedUser } // Passa como string
            });
        }
    };

    

    return (
        <View>
            <View style={styles.containerElements}>
                <View style={styles.textLogo}>
                    <Image style={styles.logo} source={require("@/src/assets/logo.png")} />
                    <Text style={styles.text}>Food Explorer</Text>
                    <Text style={styles.textAdmin}>Admin</Text>
                </View>
                <Pressable onPress={navigateToProfile}>
                    <Image 
                        style={{ 
                            width: 30, 
                            height: 30, 
                            borderRadius: 999, 
                            marginRight: 20 
                        }} 
                        source={user.image ? {uri: user.image} : require("@/src/assets/Images/defaultAvatar.jpg")} 
                    />
                </Pressable>
            </View>
        </View>
    );
}