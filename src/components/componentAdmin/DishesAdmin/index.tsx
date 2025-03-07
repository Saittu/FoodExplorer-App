import { View, Text, FlatList, TouchableOpacity, Image, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "../../globais/button";
import { type Pratos } from "@/src/utils/pratos";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { colors } from "@/src/styles/colors";
import { useFavorite } from "@/src/storage/useFavorite";

type Props = Pratos & {
    categorias: string
    dishes: Pratos[]
    onAddToCart: (prato: Pratos, count: number) => void
    onToggleFavorite: (id: string) => void
}

export default function DishesAdmin({ categorias, dishes, onAddToCart, onToggleFavorite }: Props) { 
    return (
        <View>
            <Text style={styles.categoria}>{categorias}</Text>

            <FlatList
                data={dishes}
                keyExtractor={((item) => item.id)}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.containerPratos}>
                        <View style={styles.content}>
                            <TouchableOpacity style={styles.iconEdit} onPress={() => {router.navigate("/Admin/updatedDishes")}}>
                                    <MaterialIcons 
                                        size={30} name="edit" 
                                        color={colors.light[300]}
                                    />
                            </TouchableOpacity>
            
                            <Image source={item.imageSmall} />
            
                            <TouchableOpacity style={styles.refeicaoText} onPress={() => {router.push(`/Admin/pratos?id=${item.id}`)}}>
                                <Text style={styles.title}>{item.name}</Text>
                                <MaterialIcons style={styles.icon} size={14} name="arrow-forward"/>
                            </TouchableOpacity>
            
                            <Text style={styles.price}>R$ {item.price}</Text>

                    </View>
                </View>
                )}
            />
        </View>
    )
}