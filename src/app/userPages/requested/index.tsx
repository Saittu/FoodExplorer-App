import { View, Text, ScrollView, Platform } from "react-native";
import Header from "@/src/components/componentsUser/header";
import Navigation from "@/src/components/componentsUser/navigation";
import { styles } from "./styles";
import { usePedidosStore } from "@/src/storage/usePedidosStore";
import { colors } from "@/src/styles/colors";

export default function Requested() {
  const { pedidos, statusPedidos } = usePedidosStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pendente":
        return colors.tints.tomato[300]
      case "Preparando":
        return colors.tints.carrot[100]
      case "Entregue":
        return colors.tints.mint[100]
    }
  }

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
                <View style={[styles.requestedSpan, {backgroundColor: getStatusColor(statusPedidos[pedido.id] || "Pendente")}]}></View>
                <Text style={styles.requestedText}>{statusPedidos[pedido.id] || "Pendente"}</Text>
              </View>

              <Text style={styles.requestedText}>{pedido.date}</Text>
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