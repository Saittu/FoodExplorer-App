import { View, Text, Image, TouchableOpacity, FlatList, ListRenderItem, ScrollView, Platform } from "react-native";
import Header from "@/src/components/componentsUser/header";
import { Button } from "@/src/components/globais/button";
import { styles } from "./styles";
import { useCart } from "@/src/context/carContext";
import { Pratos } from "@/src/utils/dados";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { router } from "expo-router";
import Navigation from "@/src/components/componentsUser/navigation";

export default function Cart() {
    const { cart, removeFromCart } = useCart();

    const renderItem: ListRenderItem<Pratos> = ({ item }) => (
        <View style={styles.item}>
            <Image style={{ width: 100, height: 100, borderRadius: 999 }} source={typeof item.image === "string" ? { uri: item.image} : item.image } />
            <View style={styles.itemDetails}>
                <Text style={styles.nameDish}>{item.name}</Text>
                <Text style={styles.quantity}>Quantidade: {item.count}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.removeText}>Remover do carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace(',', '.')) * item.count, 0).toFixed(2);

    return (
        <View style={styles.page}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>

                <View style={styles.container}>
                    <Text style={styles.cartText}>Meu Pedido</Text>

                    {cart.length === 0 ? (
                        <View style={styles.emptyCartContainer}>
                            <MaterialIcons size={28} color={colors.light[500]} name="restaurant"/>
                            <Text style={styles.emptyCartText}>Seu carrinho está vazio</Text>
                        </View>
                    ):  (
                        <>
                            <View>
                                <FlatList
                                    data={cart}
                                    keyExtractor={(item) => item.id}
                                    scrollEnabled={false}
                                    renderItem={renderItem}
                                />

                                <Text style={styles.price}>Total: R$ {parseFloat(total).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                            </View>
                            
                        </>
                    )}
                </View>
                <View style={styles.button}>
                    <Button disabled={cart.length === 0 } title="Avançar" onPress={() => router.navigate("/userPages/payment") } />
                </View>
                <View style={{ paddingTop: Platform.OS === "ios" ? 150 : 130}}></View>
            </ScrollView>
            <Navigation/>
        </View>

    );
}