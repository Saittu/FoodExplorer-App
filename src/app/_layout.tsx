import { Stack,useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { View, ActivityIndicator, Button } from "react-native";
import { colors } from "@/src/styles/colors";

export default function Layout(){
  const [isMounted, setIsMounted] = useState(false); // Verifica se o layout está pronto
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();


    

    const backgroundColor = colors.dark[400]

    useEffect(() => {
      setIsMounted(true); // Marca o layout como montado
    }, []);
  
    useEffect(() => {
      if (isMounted) {
        // Simula a checagem de autenticação
        setTimeout(() => {
          const userToken = null; // Substituir pelo token real no futuro
          setIsAuthenticated(!!userToken);
  
          if (userToken) {
            router.replace("/home");
          } else {
            router.replace("/signIn");
          }
        }, 1500);
      }
    }, [isMounted]);
  
    if (!isMounted) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return(
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor }
            }}
        />
    )
}