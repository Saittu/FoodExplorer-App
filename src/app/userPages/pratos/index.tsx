import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import Header from "@/src/components/componentsUser/header";
import { Button } from "@/src/components/globais/button";
import { colors } from "@/src/styles/colors";
import { router, useLocalSearchParams } from "expo-router";
import { useCart } from "@/src/context/carContext";
import { Pratos, pratos } from "@/src/utils/dados";
import { useState } from "react";
import Navigation from "@/src/components/componentsUser/navigation";

export default function Dishes() {
    const { from, id } = useLocalSearchParams()
    const { addToCart } = useCart();
    const [count, setCount] = useState(1);

    const prato = pratos.find((p) => p.id === String(id));

    if (!prato) {
        router.replace("/userPages/home")
        return null
    }

    const handleCount = (action: "increase" | "decrease") => {
        setCount((prev) => Math.max(1, prev + (action === "increase" ? 1 : -1)))
    };

    const goBack = () => {
        if (from === "home") {
            router.replace("/userPages/home");
        } else if (from === "favorites") {
            router.replace("/userPages/favorites")
        } else {
            router.replace("/userPages/home")
        }
    };

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <View>
                    <View>
                        <TouchableOpacity style={styles.containerBoxBack} onPress={() => { router.replace("/userPages/home") }}>
                            <MaterialIcons style={{ marginTop: 4 }} size={19} color={colors.light[300]} name="arrow-back-ios" />
                            <Text style={styles.textBoxBack}>voltar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Image style={{ width: 300, height: 300, borderRadius: 999 }} source={typeof prato.image === "string" ? {uri: prato.image} : prato.image} />
                    </View>

                    <View style={styles.boxDescriptionDish}>
                        <Text style={styles.titleDish}>{prato.name}</Text>
                        <Text style={styles.descriptionDish}>{prato.description}</Text>

                        <FlatList
                            data={prato.ingredientes}
                            keyExtractor={(item) => item.id}
                            numColumns={3}
                            columnWrapperStyle={{ justifyContent: "center", gap: 36, marginBottom: 24 }}
                            renderItem={({ item }) => (
                                <View style={styles.boxIngredients}>
                                    <Text style={styles.nameIngredients}>{item.name}</Text>
                                </View>
                            )}
                            scrollEnabled={false}
                        />
                    </View>

                    <View style={styles.boxOrder}>
                        <View style={styles.boxCount}>
                            <TouchableOpacity onPress={() => handleCount("decrease")}>
                                <MaterialIcons size={22} color={colors.light[100]} name="remove" />
                            </TouchableOpacity>

                            <Text style={styles.textCount}>{count.toString().padStart(2, "0")}</Text>

                            <TouchableOpacity onPress={() => handleCount("increase")}>
                                <MaterialIcons size={22} color={colors.light[100]} name="add" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Button
                                icon="shopping-cart"
                                title={`pedir ∙ R$ ${(parseFloat(prato.price) * count).toFixed(2)}`}
                                onPress={() => addToCart(prato, count)}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <Navigation/>
        </View>
    );
}