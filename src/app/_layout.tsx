import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import { colors } from "@/src/styles/colors";
import { CartProvider } from "../context/carContext";

export default function Layout() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function checkAuthentication() {
      setIsMounted(true);

      try {
        const userToken = await AsyncStorage.getItem("userToken");
        const userEmail = await AsyncStorage.getItem("userEmail");

        if (userToken && userEmail) {
          if (userEmail === "admin@admin.com") {
            router.replace("/Admin/home");
          } else {
            router.replace("/userPages/home");
          }
        } else {
          router.replace("/Auth/signIn");
        }
      } catch (error) {
        console.error("Erro ao recuperar dados do AsyncStorage", error);
        router.replace("/Auth/signIn");
      }
    }

    checkAuthentication();
  }, []);

  if (!isMounted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.dark[400] },
        }}
      />
    </CartProvider>
  );
}
