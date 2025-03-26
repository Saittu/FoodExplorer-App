import { View, Text, FlatList, TouchableOpacity, Image, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "../../globais/button";
import { Category, pratos, type Pratos } from "@/src/utils/dados";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { colors } from "@/src/styles/colors";
import { useFavorite } from "@/src/storage/useFavorite";
import { supabase } from "@/src/lib/supabase";

type Props = {
    category: string
}

export default function DishesAdmin({ category }: Props) { 
        const [categories, setCategories] = useState<Category[]>([]);
        const [pratosFilter, setPratosFilter] = useState<Pratos[]>([]);
        
    
        const fetchData = async () => {
            try {
                if (!category) {
                    console.error("Categoria não definida");
                    return;
                }
                
                const { data: categoryData, error: categoryError } = await supabase
                    .from("categories")
                    .select("*");
        
                if (categoryError) throw categoryError;
                setCategories(categoryData);
        
                const categoryId = categoryData.find((cat) => {
                    return cat.category.trim().toLowerCase() === category.trim().toLowerCase();
                })?.id;
    
                if (!categoryId) {
                    console.error("Categoria não encontrada:", category);
                    return;
                }
        
                const { data: pratoData, error: pratoError } = await supabase
                    .from('pratos')
                    .select('*')
                    .eq('category_id', categoryId);
                    
                if (pratoError) throw pratoError;
                setPratosFilter(pratoData);
    
            } catch (error) {
                console.error("Erro ao buscar pratos", error);
            }
        };
    
        
        useFocusEffect(
            useCallback(() => {
                fetchData();
                return () => {
              
                };
            }, [category]) 
        );
    
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
                
                                <Image style={{ width: 100, height: 100, borderRadius: 12 }} source={typeof item.image === "string" ? { uri: item.image} : item.image } />
                
                                <TouchableOpacity style={styles.refeicaoText} onPress={() => { requestAnimationFrame(() => router.push(`/Admin/pratos?id=${item.id}`)) }}>
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