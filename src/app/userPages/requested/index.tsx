import { View, Text, ScrollView, Platform } from "react-native";
import Header from "@/src/components/componentsUser/header";
import Navigation from "@/src/components/componentsUser/navigation";
import { styles } from "./styles";
import { usePedidosStore } from "@/src/storage/usePedidosStore";

export default function Requested() {
  const { pedidos } = usePedidosStore();

  return (
    <View style={styles.main}>
      <Header />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.primaryText}>Pedidos</Text>

        {pedidos.map((pedido) => (
          <View key={pedido.id} style={styles.requestedContainer}>
            <View style={styles.requestedInfo}>
              <Text style={styles.requestedId}>{pedido.id}</Text>

              <View style={styles.requestedStatus}>
                <View style={styles.requestedSpan}></View>
                <Text style={styles.requestedText}>Pendente</Text>
              </View>

              <Text style={styles.requestedText}>20/05 às 18h00</Text>
            </View>

            <View>
              <Text style={[styles.requestedText, { lineHeight: 23 }]}>
                {pedido.pratos.map(p => `${p.quantidade} x ${p.nome}`).join(", ")}
              </Text>
            </View>
          </View>
        ))}

        <View style={{ paddingTop: Platform.OS === "ios" ? 120 : 100 }}></View>
      </ScrollView>

      <Navigation />
    </View>
  );
}