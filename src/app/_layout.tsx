import { Stack,useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { View, ActivityIndicator, Button } from "react-native";
import { colors } from "@/src/styles/colors";

export default function Layout(){
  const [isMounted, setIsMounted] = useState(false); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

    const backgroundColor = colors.dark[400]

    useEffect(() => {
      setIsMounted(true); 
    }, []);
  
    useEffect(() => {
      if (isMounted) {
        setTimeout(() => {
          const userToken = null; 
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