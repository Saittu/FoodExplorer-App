import { View, Text, Image } from "react-native";
import Header from "@/src/components/header";
import { Button } from "@/src/components/button";
import { styles } from "./styles";

export default function Cart() {
    return(
        <View style={styles.main}>
            <Header/>

            <View style={styles.container}>
                <Text style={styles.text}>Meu Pedido</Text>

                <View style={styles.item}>
                    <View>
                        <Image source={require("@/src/assets/pratos-100/salada.png")}/>
                    </View>
                    <View>
                        <Text style={styles.text2}>Salada Radish</Text>
                        <Text style={styles.span}>Remover dos favoritos</Text>
                    </View>
                </View>

                <Text style={styles.price}>Total: R$103,88</Text>
            </View>
            <View style={styles.button}>
                <Button title="Avançar"/>
            </View>
            
        </View>
    )
}