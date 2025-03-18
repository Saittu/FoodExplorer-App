import { View, Text, FlatList, TouchableOpacity, Image, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "../../globais/button";
import { pratos, type Pratos } from "@/src/utils/pratos";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { colors } from "@/src/styles/colors";
import { useFavorite } from "@/src/storage/useFavorite";

type Props = {
    category: string
}

export default function DishesAdmin({ category }: Props) { 
    const pratosFilter = pratos.find((cat) => cat.category === category)?.prato || [];

    return (
        <>
            {pratosFilter.length > 0 && (
                <View>
                <Text style={styles.categoria}>{category}</Text>
    
                <FlatList
                    data={pratosFilter}
                    keyExtractor={((item) => item.id)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.containerPratos}>
                            <View style={styles.content}>
                                <TouchableOpacity style={styles.iconEdit} onPress={() => {router.navigate(`/Admin/updatedDishes?id=${item.id}`)}}>
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
            )}
        </>
        
    )
}