import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import Header from "@/src/components/componentsUser/header";
import { Button } from "@/src/components/globais/button";
import { colors } from "@/src/styles/colors";
import { router, useLocalSearchParams } from "expo-router";
import { useCart } from "@/src/context/carContext";
import { Pratos, pratos } from "@/src/utils/pratos";
import { useState } from "react";
import Navigation from "@/src/components/componentsUser/navigation";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";

export default function DishesAdminDetails() {
    const { from, id } = useLocalSearchParams()
    const { addToCart } = useCart();
    const [count, setCount] = useState(1);

    const prato = pratos.find((p) => p.id === id)

    if (!prato) {
        router.replace("/userPages/home")
        return null
    }

    return (
        <View style={styles.container}>
            <HeaderAdmin />

            <View style={styles.content}>
                <View>
                    <View>
                        <TouchableOpacity style={styles.containerBoxBack} onPress={() => { router.replace("/Admin/home") }}>
                            <MaterialIcons style={{ marginTop: 4 }} size={19} color={colors.light[300]} name="arrow-back-ios" />
                            <Text style={styles.textBoxBack}>voltar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Image source={prato.imageLarge} />
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

                        <View>
                            <Button
                                title="Editar Prato"
                                onPress={() => addToCart(prato, count)}
                            />
                        </View>

                    </View>

                </View>
            </View>
            <NavigationAdmin/>
        </View>
    );
}