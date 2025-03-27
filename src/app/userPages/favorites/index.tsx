import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, ListRenderItem, Platform } from 'react-native';
import { styles } from './styles';
import Header from '@/src/components/componentsUser/header';
import Navigation from '@/src/components/componentsUser/navigation';
import { pratos, Pratos } from '@/src/utils/dados';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/src/styles/colors';
import { useFavorite } from '@/src/storage/useFavorite';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabase';

export default function Favorites() {
    const { favorites, fetchFavorites, toggleFavorite } = useFavorite();
    const [loading, setLoading] = useState(true);
    const [favoritos, setFavoritos] = useState<Pratos[]>([])


    
    const fetchFavoritos = async () => {
        setLoading(true);

        const favoritosIds = Object.keys(favorites);

        if (favoritosIds.length === 0) {
            setFavoritos([]);
            setLoading(false);
            return;
        }

        const { data, error } = await supabase
            .from("pratos")
            .select("*")
            .in("id", favoritosIds);

        if (error) {
            console.error("Erro ao buscar pratos favoritos:", error);
        } else {
            setFavoritos(data || []);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchFavorites(); 
    }, []);

    useEffect(() => {
        fetchFavoritos(); 
    }, [favorites]);

    return(
        <View style={styles.main}>

            <Header/>

            <ScrollView style={styles.container}>

                <Text style={styles.favoritesText}>Meus Favoritos</Text>

                {favoritos.length === 0 ? (
                    <Text style={styles.emptyText}>Nenhum prato favoritado.</Text>
                    ) : (
                        <FlatList
                            data={favoritos}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Image style={{ width: 100, height: 100, borderRadius: 999 }} source={typeof item.image === "string" ? { uri: item.image} : item.image } />
                                    <View style={styles.itemInfos}>
                                        <TouchableOpacity style={styles.itemDetails} onPress={() => requestAnimationFrame(() => {router.navigate(`/userPages/pratos?id=${item.id}`) })}>
                                            <Text style={styles.name}>{item.name}</Text>
                                            <MaterialIcons color={colors.light[300]} name="arrow-forward" size={24} />
                                        </TouchableOpacity>
                    
                                        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                                            <Text style={styles.span}>Remover dos favoritos</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                    )}
                    <View style={{ paddingTop: Platform.OS === "ios" ? 120 : 100}}></View>
            </ScrollView>

            <Navigation/>

        </View>
    )
}
