import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "@/src/components/globais/button";
import { colors } from "@/src/styles/colors";
import { router, useLocalSearchParams } from "expo-router";
import { pratos } from "@/src/utils/pratos";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";

export default function DishesAdminDetails() {
    const { id } = useLocalSearchParams()

    const prato = pratos.find((p) => p.id === String(id))

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
                        <Image style={{ width: 300, height: 300, borderRadius: 999 }} source={typeof prato.imageLarge === "string" ? {uri: prato.imageLarge} : prato.imageLarge} />
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
                                onPress={() => {router.navigate(`/Admin/updatedDishes?id=${prato.id}`)}}
                            />
                        </View>

                    </View>

                </View>
            </View>
            <NavigationAdmin/>
        </View>
    );
}