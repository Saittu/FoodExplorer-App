import { View, Text, FlatList, TouchableOpacity, Image, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "../../globais/button";
import { type Category, pratos, type Pratos } from "@/src/utils/dados";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { colors } from "@/src/styles/colors";
import { useFavorite } from "@/src/storage/useFavorite";

type Props =  {
    category: string
    onAddToCart: (prato: Pratos, count: number) => void
}

export default function BoxPratos({ category,  onAddToCart }: Props) { 
    const { favorites, toggleFavorite } = useFavorite();

    const categoryMap: Record<string, string> = {
        "Refeições": "1",
        "Sobremesas": "2",
        "Bebidas": "3"
    };

    const pratosFilter = pratos.filter(prato => prato.categoryId === categoryMap[category]);
    
    const [countMap, setCountMap] = useState<Record<string, number>>(
        pratosFilter.reduce((acc, dish) => {
            acc[dish.id] = dish.count || 1;
            return acc;
        }, {} as Record<string, number>)
    );
    const [scaleValues, setScaleValues] = useState<Record<string, Animated.Value>>(
        pratosFilter.reduce((acc, dish) => {
            acc[dish.id] = new Animated.Value(1);
            return acc;
        }, {} as Record<string, Animated.Value>)
    );

    function handleCount(id: string, action: "increase" | "decrease") {
        setCountMap((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + (action === "increase" ? 1 : -1))
        }))
    }

    return (
        <>
            {pratosFilter.length > 0 && (
                <View>

                    <Text style={styles.categoria}>{category}</Text>
                    <FlatList
                        data={pratosFilter}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.containerPratos}>
                                <View style={styles.content}>
                                    <TouchableOpacity style={styles.iconHeart} onPress={() => toggleFavorite(item.id)}>
                                        <Animated.View style={{ transform: [{ scale: scaleValues[item.id]}] }}>
                                            <MaterialIcons 
                                                size={24} 
                                                name={favorites[item.id] ? "favorite" : "favorite-border"} 
                                                color={favorites[item.id] ? colors.tints.tomato[300] : colors.light[300]}
                                            />
                                        </Animated.View>
                                    </TouchableOpacity>
                    
                                    <Image style={{ width: 100, height: 100, borderRadius: 12 }} source={typeof item.image === "string" ? {uri: item.image} : item.image} />
                    
                                    <TouchableOpacity 
                                        style={styles.refeicaoText} 
                                        onPress={() => router.push(`/userPages/pratos?id=${item.id}`)}
                                    >
                                        <Text style={styles.title}>{item.name}</Text>
                                        <MaterialIcons style={styles.icon} size={14} name="arrow-forward"/>
                                    </TouchableOpacity>
                    
                                    <Text style={styles.price}>R$ {item.price}</Text>
                    
                                    <View style={styles.quantity}>
                                        <TouchableOpacity onPress={() => handleCount(item.id, "decrease")}>
                                            <MaterialIcons style={styles.icon} size={24} name="remove"/>
                                        </TouchableOpacity>
                    
                                        <Text style={styles.quantityText}>
                                            {countMap[item.id]?.toString().padStart(2, "0")}
                                        </Text>
                    
                                        <TouchableOpacity onPress={() => handleCount(item.id, "increase")}>
                                            <MaterialIcons style={styles.icon} size={24} name="add"/>
                                        </TouchableOpacity>
                                    </View>
                    
                                    <Button title="incluir" onPress={() => onAddToCart(item, countMap[item.id])} />
                                </View>
                            </View>
                        )}
                    />
                </View>
            )}
        </>
    )
}