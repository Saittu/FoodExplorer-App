import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from "react-native";
import Header from "@/src/components/header";
import Navigation from "@/src/components/navigation";
import { styles } from "./styles";

export default function Requested() {
    return(
        <View style={styles.main}>
            <Header/>
            
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.primaryText}>Pedidos</Text>

                <View style={styles.requestedContainer}>
                    <View style={styles.requestedInfo}>
                        <Text style={styles.requestedId}>000004</Text>
                        
                        <View style={styles.requestedStatus}>
                            <View style={styles.requestedSpan}></View>
                            <Text style={styles.requestedText}>Pendente</Text>
                        </View>

                        <Text style={styles.requestedText}>20/05 ás 18h00</Text>

                    </View>

                    <View>
                        <Text  style={[styles.requestedText, {lineHeight: 23}]}>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Text>
                    </View>
                </View>

                <View style={styles.requestedContainer}>
                    <View style={styles.requestedInfo}>
                        <Text style={styles.requestedId}>000004</Text>
                        
                        <View style={styles.requestedStatus}>
                            <View style={styles.requestedSpan}></View>
                            <Text style={styles.requestedText}>Pendente</Text>
                        </View>

                        <Text style={styles.requestedText}>20/05 ás 18h00</Text>

                    </View>

                    <View>
                        <Text  style={[styles.requestedText, {lineHeight: 23}]}>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Text>
                    </View>
                </View>

                <View style={styles.requestedContainer}>
                    <View style={styles.requestedInfo}>
                        <Text style={styles.requestedId}>000004</Text>
                        
                        <View style={styles.requestedStatus}>
                            <View style={styles.requestedSpan}></View>
                            <Text style={styles.requestedText}>Pendente</Text>
                        </View>

                        <Text style={styles.requestedText}>20/05 ás 18h00</Text>

                    </View>

                    <View>
                        <Text  style={[styles.requestedText, {lineHeight: 23}]}>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Text>
                    </View>
                </View>

                <View style={styles.requestedContainer}>
                    <View style={styles.requestedInfo}>
                        <Text style={styles.requestedId}>000004</Text>
                        
                        <View style={styles.requestedStatus}>
                            <View style={styles.requestedSpan}></View>
                            <Text style={styles.requestedText}>Pendente</Text>
                        </View>

                        <Text style={styles.requestedText}>20/05 ás 18h00</Text>

                    </View>

                    <View>
                        <Text  style={[styles.requestedText, {lineHeight: 23}]}>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Text>
                    </View>
                </View>

                <View style={styles.requestedContainer}>
                    <View style={styles.requestedInfo}>
                        <Text style={styles.requestedId}>000004</Text>
                        
                        <View style={styles.requestedStatus}>
                            <View style={styles.requestedSpan}></View>
                            <Text style={styles.requestedText}>Pendente</Text>
                        </View>

                        <Text style={styles.requestedText}>20/05 ás 18h00</Text>

                    </View>

                    <View>
                        <Text  style={[styles.requestedText, {lineHeight: 23}]}>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</Text>
                    </View>
                </View>

                <View style={{ paddingTop: Platform.OS === "ios" ? 120 : 100}}></View>
            </ScrollView>

            <Navigation/>
        </View>
    )
}
