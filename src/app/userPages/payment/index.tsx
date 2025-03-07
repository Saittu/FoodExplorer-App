import { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/src/styles/colors";
import Header from "@/src/components/componentsUser/header";
import { Button } from "@/src/components/globais/button";
import Navigation from "@/src/components/componentsUser/navigation";
import { usePedidosStore } from "@/src/storage/usePedidosStore"; 
import { useCart } from "@/src/context/carContext"; 

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState<"pix" | "credit" | null>(null);
  const [statusPagamento, setStatusPagamento] = useState<"cartao" | "validando" | "aprovado" | "entregue">("cartao");
  const { adicionarPedido } = usePedidosStore();
  const { cart, clearCart } = useCart(); 

  function gerarIdAleatorio() {
    return String(Math.floor(100000 + Math.random() * 900000)); 
  }

  function finalizarPagamento() {
    const pedido = {
      id: gerarIdAleatorio(),
      pratos: cart.map(item => ({ nome: item.name, quantidade: item.count })), 
    };

    adicionarPedido(pedido); 
    clearCart(); 
    setStatusPagamento("validando");

    setTimeout(() => {
      setStatusPagamento("aprovado");

      setTimeout(() => {
        setStatusPagamento("entregue");
      }, 2000);
    }, 2000);
  }

  return (
    <View style={styles.main}>
      <Header />

      <View style={styles.container}>
        <Text style={styles.payment}>Pagamento</Text>

        <View style={styles.containerPayment}>
          {statusPagamento === "cartao" ? (
            <>
              <View style={styles.paymentOptions}>
                <Pressable
                  style={[
                    styles.paymentOptionsPix,
                    selectedPayment === "pix" ? { backgroundColor: colors.dark[800] } : { backgroundColor: colors.dark[400] }
                  ]}
                  onPress={() => setSelectedPayment("pix")}
                >
                  <MaterialIcons color={colors.light[100]} size={24} name="pix" />
                  <Text style={styles.textPaymentOptions}>Pix</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.paymentOptionsCreditCard,
                    selectedPayment === "credit" ? { backgroundColor: colors.dark[800] } : { backgroundColor: colors.dark[400] }
                  ]}
                  onPress={() => setSelectedPayment("credit")}
                >
                  <MaterialIcons color={colors.light[100]} size={24} name="credit-card" />
                  <Text style={styles.textPaymentOptions}>Crédito</Text>
                </Pressable>
              </View>
              <View style={styles.paymentBox}>
                {selectedPayment === "pix" ? (
                  <MaterialIcons style={{ paddingVertical: 31.3, paddingHorizontal: 88.58, color: colors.light[600] }} size={166} name="qr-code-2" />
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
                      <Button title="Finalizar pagamento" onPress={finalizarPagamento} />
                    </View>
                  </View>
                ) : (
                  <Text style={styles.textPaymentOptions}>Selecione um método de pagamento</Text>
                )}
              </View>
            </>
                ) : statusPagamento === "validando" ? (
                    <View  style={styles.boxValidation}>
                        <MaterialIcons size={78} name="punch-clock" color={colors.light[600]}/>
                        <Text style={styles.textPaymentOptions}>Validando pagamento...</Text>
                    </View>
                ) : statusPagamento === "aprovado" ? (
                    <View style={styles.boxValidation}>
                        <MaterialIcons size={78} name="check-circle" color={colors.light[600]}/>
                        <Text style={styles.textPaymentOptions}>Pagamento aprovado!</Text>
                    </View>      
                ) : (
                    <View style={styles.boxValidation}>
                        <MaterialIcons size={78} name="restaurant" color={colors.light[600]} />
                        <Text style={styles.textPaymentOptions}>Pedido entregue!</Text>
                    </View>
                )}
        </View>
      </View>

      <Navigation />
    </View>
  );
}