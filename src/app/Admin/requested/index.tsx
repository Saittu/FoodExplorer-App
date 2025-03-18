import { View, Text, ScrollView, Platform, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { usePedidosStore } from "@/src/storage/usePedidosStore";
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";


export default function RequestedAdmin() {
  const { pedidos, atualizarStatus, statusPedidos } = usePedidosStore();

  const [modalVisible, setModalVisible] = useState<{ [key: string]: boolean }>(
    pedidos.reduce((acc, pedido) => ({ ...acc, [pedido.id]: false }), {})
  );

  const handleModalVisibility = (pedidoId: string, visible: boolean) => {
    setModalVisible((prev) => ({
      ...prev,
      [pedidoId]: visible
    }));
  };


  return (
    <View style={styles.main}>
      <HeaderAdmin />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.primaryText}>Pedidos</Text>

        {pedidos.map((pedido) => (
          <View key={pedido.id} style={styles.requestedContainer}>
            <View style={styles.requestedInfo}>
              <Text style={styles.requestedId}>{pedido.id}</Text>
              <Text style={styles.requestedText}>{pedido.date}</Text>
            </View>

            <View>
              <Text style={[styles.requestedText, { lineHeight: 23 }]}>
                {pedido.pratos.map((p) => `${p.quantidade} x ${p.nome}`).join(", ")}
              </Text>
            </View>
            <View style={{ gap: 8 }}>
              
              {Platform.OS === "ios" ? (
                <>
                  <TouchableOpacity style={styles.inputPickerBox} onPress={() => handleModalVisibility(pedido.id, true)}>
                    <Text style={styles.textPickerIos}>
                      {statusPedidos[pedido.id] || "Pendente"}
                    </Text>
                    <MaterialIcons name="arrow-drop-down" size={24} color={colors.light[400]}/>
                  </TouchableOpacity>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible[pedido.id]}
                    onRequestClose={() => handleModalVisibility(pedido.id, false)}
                  >
                    
                    <View style={styles.modalOverlay}>
                      <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => handleModalVisibility(pedido.id, false)} style={styles.closeButton}>
                          <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>

                        <Picker
                          key={pedido.id}
                          selectedValue={statusPedidos[pedido.id] || "Pendente"}
                          onValueChange={(itemValue: "Pendente" | "Preparando" | "Entregue") => {
                            atualizarStatus(pedido.id, itemValue)
                            handleModalVisibility(pedido.id, false)
                          }}
                        >
                          <Picker.Item color={colors.dark[700]} label="Pendente" value="Pendente" />
                          <Picker.Item color={colors.dark[700]} label="Preparando" value="Preparando" />
                          <Picker.Item color={colors.dark[700]}  label="Entregue" value="Entregue" />
                        </Picker>
                      </View>
                    </View>

                  </Modal>
                </>
              ) : (
                <Picker 
                  key={pedido.id}
                  style={styles.androidPicker}
                  dropdownIconColor={colors.light[400]}
                  selectedValue={statusPedidos[pedido.id]}
                  onValueChange={(itemValue) => atualizarStatus(pedido.id, itemValue)}
                >
                  <Picker.Item label="Pendente" value="Pendente" />
                  <Picker.Item label="Preparando" value="Preparando" />
                  <Picker.Item label="Entregue" value="Entregue" />
                </Picker>
              )} 
              
            </View>
          </View>
        ))}

        <View style={{ paddingTop: Platform.OS === "ios" ? 120 : 100 }}></View>
      </ScrollView>

      <NavigationAdmin />
    </View>
  );
}

