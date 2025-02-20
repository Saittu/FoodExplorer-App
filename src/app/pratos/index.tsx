import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { Button } from "@/src/components/button";
import { colors } from "@/src/styles/colors";
import { type Ingredientes, ingredientes } from "@/src/utils/pratos";
import { router } from "expo-router";
import { useCart } from "@/src/context/carContext";



export default function Pratos() {
    const { addToCart } = useCart()

    return (
        <View style={styles.container}>
            <Header />

            <View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                    <View >
                        <TouchableOpacity style={styles.containerBoxBack} onPress={() => {router.replace("/home")}}>
                            <MaterialIcons style={{ marginTop: 4 }} size={19} color={colors.light[300]} name="arrow-back-ios"/>
                            <Text style={styles.textBoxBack}>voltar</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ alignItems: "center"}}>
                        <Image  source={require("../../assets/pratos-300/salada.png")} />
                    </View>

                    <View style={styles.boxDescriptionDish}>
                        <Text style={styles.titleDish}>Salada Ravanello</Text>

                        <Text style={styles.descriptionDish}>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</Text>
                        

                        <FlatList 
                            data={ingredientes}
                            keyExtractor={(item) => item.id}
                            numColumns={3}
                            columnWrapperStyle={{ justifyContent: "center", gap: 36, marginBottom: 24}}
                            renderItem={({ item }) => (
                                <View style={styles.boxIngredients}>
                                    <Text style={styles.nameIngredients}>{item.name}</Text>
                                </View>
                            )}
                            scrollEnabled={false}
                        />

                    </View>

                    <View style={styles.boxOrder}>
                        <View style={styles.boxCount}>
                            <TouchableOpacity>
                                <MaterialIcons size={22} color={colors.light[100]} name="remove"/>
                            </TouchableOpacity>             
                            
                            <Text style={styles.textCount}>01</Text>

                            <TouchableOpacity>
                                <MaterialIcons size={22} color={colors.light[100]} name="add" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Button icon="shopping-cart" title="pedir ∙ R$ 25,00" />
                        </View>
                        
                    </View>

                </ScrollView>
            </View>
            
            <Footer/>
        </View>
    )
}