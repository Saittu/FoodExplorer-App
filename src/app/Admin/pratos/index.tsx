import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "@/src/components/globais/button";
import { colors } from "@/src/styles/colors";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { Ingredientes, Pratos, pratos, Pratos_Ingredientes } from "@/src/utils/dados";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabase";

export default function DishesAdminDetails() {
    const { id } = useLocalSearchParams()
    const [prato, setPrato] = useState<Pratos | null>(null);
    const [ingredientes, setIngredientes] = useState<Ingredientes[]>([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            setLoading(true)
            const { data: pratosData, error: pratosError } = await supabase
                .from("pratos")
                .select("*")
                .eq("id", id)
                .single()
            
            if (pratosError) {
                throw pratosError
            }

            setPrato(pratosData)

            const {data: pratosIngredientesData, error: pratosIngredientesError} = await supabase
                .from("pratos_ingredientes")
                .select("*")
                .eq("prato_id", id)
            
            if (pratosIngredientesError) throw pratosIngredientesError

            const ingredientesId = pratosIngredientesData.map((item) => item.ingrediente_id)

            if (ingredientesId.length > 0) {
                const { data: ingredientesData, error: ingredientesError } = await supabase
                    .from("ingredientes")
                    .select("*")
                    .in("id", ingredientesId)
                
                if (ingredientesError) throw ingredientesError

                setIngredientes(ingredientesData)
            }


        } catch (error) {
            console.error("Erro ao buscar pratos", error);
            router.replace("/Admin/home")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(id) {
            fetchData()
        }
    }, [id])

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color={colors.tints.carrot[100]} />
            </View>
        );
    }

    // Se não encontrar o prato, retorna null
    if (!prato) {
        return null;
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
                        <Image style={{ width: 300, height: 300, borderRadius: 999 }} source={typeof prato.image === "string" ? {uri: prato.image} : prato.image} />
                    </View>

                    <View style={styles.boxDescriptionDish}>
                        <Text style={styles.titleDish}>{prato.name}</Text>
                        <Text style={styles.descriptionDish}>{prato.description}</Text>

                        <FlatList
                            data={ingredientes}
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