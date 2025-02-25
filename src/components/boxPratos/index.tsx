import { View, Text, FlatList, TouchableOpacity, Image, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "../button";
import { type Pratos } from "@/src/utils/pratos";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { colors } from "@/src/styles/colors";

type Props = Pratos & {
    categorias: string
    dishes: Pratos[]
    onAddToCart: (prato: Pratos, count: number) => void
}

export default function BoxPratos({ categorias, dishes, onAddToCart }: Props) { 
    const [favorite, setFavorite] = useState<Record<string,boolean>>({})   
    const [countMap, setCountMap] = useState<Record<string, number>>(
        dishes.reduce((acc, dish) => {
            acc[dish.id] = dish.count || 1;
            return acc;
        }, {} as Record<string, number>)
    );
    const [scaleValues, setScaleValues] = useState<Record<string, Animated.Value>>(
        dishes.reduce((acc, dish) => {
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

    function toggleFavorite(id: string) {
        setFavorite((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))

        Animated.sequence([
            Animated.timing(scaleValues[id], { toValue: 1.3, duration: 150, useNativeDriver: true }), 
            Animated.timing(scaleValues[id], { toValue: 1, duration: 150, useNativeDriver: true }) 
        ]).start();
    }

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
                            <TouchableOpacity style={styles.iconHeart} onPress={() => toggleFavorite(item.id)}>
                                <Animated.View style={{ transform: [{ scale: scaleValues[item.id]}]}}>
                                    <MaterialIcons 
                                        size={24} name={favorite[item.id] ? "favorite" : "favorite-border"} 
                                        color={favorite[item.id] ? colors.tints.tomato[300] : colors.light[300]}
                                        />
                                </Animated.View>
                            </TouchableOpacity>
            
                            <Image source={item.imageSmall} />
            
                            <TouchableOpacity style={styles.refeicaoText} onPress={() => {router.push(`/pratos?id=${item.id}`)}}>
                                <Text style={styles.title}>{item.name}</Text>
                                <MaterialIcons style={styles.icon} size={14} name="arrow-forward"/>
                            </TouchableOpacity>
            
                            <Text style={styles.price}>R$ {item.price}</Text>
            
                            <View style={styles.quantity}>
                                <TouchableOpacity onPress={() => {handleCount(item.id, "decrease")}}>
                                    <MaterialIcons style={styles.icon} size={24} name="remove"/>
                                </TouchableOpacity>
            
                                <Text style={styles.quantityText}>
                                    {countMap[item.id]?.toString().padStart(2, "0")}
                                </Text>
            
                                <TouchableOpacity onPress={() => {handleCount(item.id, "increase")}} >
                                    <MaterialIcons style={styles.icon} size={24} name="add"/>
                                </TouchableOpacity>
                            </View>
            
                            <Button title="incluir" onPress={() => onAddToCart(item, countMap[item.id])} />
            
                    </View>
                </View>
                )}
            />
        </View>
    )
}