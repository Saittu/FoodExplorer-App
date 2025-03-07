import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, ListRenderItem, Platform } from 'react-native';
import { styles } from './styles';
import Header from '@/src/components/componentsUser/header';
import Navigation from '@/src/components/componentsUser/navigation';
import { pratos, Pratos } from '@/src/utils/pratos';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/src/styles/colors';
import { useFavorite } from '@/src/storage/useFavorite';
import { router } from 'expo-router';

export default function Favorites() {
    const { favorites, toggleFavorite } = useFavorite();

    const favoritos = pratos.filter(prato => favorites[prato.id]);

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
                            keyExtractor={item => item.id}
                            scrollEnabled={false}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Image source={item.imageSmall} />
                                    <View style={styles.itemInfos}>
                                        <TouchableOpacity style={styles.itemDetails} onPress={() => router.navigate(`/userPages/pratos?id=${item.id}`)}>
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