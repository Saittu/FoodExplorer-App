import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Button } from "../button";
import { type Pratos, pratos } from "@/src/utils/pratos";
import { router } from "expo-router";

type Props = Pratos & {
    categorias: string
    dishes: Pratos[]
}

export default function BoxPratos({ categorias, dishes }: Props) {
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
                            <TouchableOpacity style={styles.iconHeart}>
                                <MaterialIcons style={styles.icon} size={24} name="favorite-border" />
                            </TouchableOpacity>
            
                            <Image source={item.image} />
            
                            <TouchableOpacity style={styles.refeicaoText} onPress={() => {router.navigate("/pratos")}}>
                                <Text style={styles.title}>{item.name}</Text>
                                <MaterialIcons style={styles.icon} size={14} name="arrow-forward"/>
                            </TouchableOpacity>
            
                            <Text style={styles.price}>R$ {item.price}</Text>
            
                            <View style={styles.quantity}>
                                <TouchableOpacity >
                                    <MaterialIcons style={styles.icon} size={24} name="remove"/>
                                </TouchableOpacity>
            
                                <Text style={styles.quantityText}>01</Text>
            
                                <TouchableOpacity>
                                    <MaterialIcons style={styles.icon} size={24} name="add"/>
                                </TouchableOpacity>
                            </View>
            
                            <Button title="incluir" />
            
                    </View>
                </View>
                )}
            />
        </View>
    )
}