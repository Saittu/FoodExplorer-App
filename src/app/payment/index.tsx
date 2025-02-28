import { useState } from "react";
import { View, Text, Pressable, PressableProps } from "react-native";
import { styles } from "./styles";
import { colors } from "@/src/styles/colors";
import Header from "@/src/components/header";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Button } from "@/src/components/button";
import { Input } from "@/src/components/input";
import Navigation from "@/src/components/navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function Payment({ isTVSelectable }: PressableProps) {
    const [selectedPayment, setSelectedPayment] = useState<"pix" | "credit" | null>(null);

    return (
        <View style={styles.main}>
            <Header />

            <View style={styles.container}>
                <Text style={styles.payment}>Pagamento</Text>

                <View style={styles.containerPayment}>
                    <View style={styles.paymentOptions} >
                        <Pressable 
                            style={[
                                styles.paymentOptionsPix,
                                selectedPayment === "pix" ? { backgroundColor: colors.dark[800] } : { backgroundColor: colors.dark[400] }
                            ]}
                            onPress={() => setSelectedPayment("pix")}
                        >
                            <MaterialIcons color={ colors.light[100] } size={24} name="pix"/>
                            <Text style={ styles.textPaymentOptions }>Pix</Text>
                        </Pressable>
                        <Pressable 
                            style={[
                                styles.paymentOptionsCreditCard,
                                selectedPayment === "credit" ? { backgroundColor: colors.dark[800] } : { backgroundColor: colors.dark[400] } 
                            ]}
                            onPress={() => setSelectedPayment("credit")}
                        >
                            <MaterialIcons color={ colors.light[100] } size={24} name="credit-card"/>
                            <Text style={ styles.textPaymentOptions }>Crédito</Text>
                        </Pressable>
                    </View>
                    <View style={styles.paymentBox}>
                        {selectedPayment === "pix" ? (
                            <MaterialIcons style={{ paddingVertical: 31.3, paddingHorizontal: 88.58 , color: colors.light[600]}} size={166} name="qr-code-2"/> 
                        ) : selectedPayment === "credit" ? (
                            <View style={styles.creditCard}>
                                <View style={styles.dataCreditCard}>
                                    <Text style={styles.textCreditCard}>Número do cartão</Text>
                                    <TextInput style={styles.input} placeholder="0000 0000 0000 0000" placeholderTextColor={colors.light[500]} />
                                </View>
                                
                                <View style={styles.creditCardRow}>
                                    <View style={styles.dataCreditCard}>
                                        <Text style={styles.textCreditCard}>Validade</Text>
                                        <TextInput style={styles.input} placeholder="04/25" placeholderTextColor={colors.light[500]} />
                                    </View>
                                    
                                    <View style={styles.dataCreditCard}>
                                        <Text style={styles.textCreditCard}>CVC</Text>
                                        <TextInput style={styles.input} placeholder="000" placeholderTextColor={colors.light[500]} secureTextEntry />
                                    </View>
                                </View>
            
                                <View>
                                    <Button title="Finalizar pagamento"/>
                                </View>
                            </View>
                        ) : (
                            <Text style={styles.textPaymentOptions}>Selecione um método de pagamento</Text>
                        )}
                    </View>
                </View>
            </View>
            <Navigation/>
        </View>
    );
}
