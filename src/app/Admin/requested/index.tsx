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
  const { pedidos } = usePedidosStore();

  const [selectedValue, setSelectedValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.main}>
      <HeaderAdmin />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.primaryText}>Pedidos</Text>

        {pedidos.map((pedido) => (
          <View key={pedido.id} style={styles.requestedContainer}>
            <View style={styles.requestedInfo}>
              <Text style={styles.requestedId}>{pedido.id}</Text>
              <Text style={styles.requestedText}>20/05 às 18h00</Text>
            </View>

            <View>
              <Text style={[styles.requestedText, { lineHeight: 23 }]}>
                {pedido.pratos.map((p) => `${p.quantidade} x ${p.nome}`).join(", ")}
              </Text>
            </View>
            <View style={{ gap: 8 }}>
              
              {Platform.OS === "ios" ? (
                <>
                  <TouchableOpacity style={styles.inputPickerBox} onPress={() => setModalVisible(true)}>
                    <Text style={styles.textPickerIos}>
                      {selectedValue ? selectedValue : "Selecione uma opção"}
                    </Text>
                    <MaterialIcons name="arrow-drop-down" size={24} color={colors.light[400]}/>
                  </TouchableOpacity>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                  >
                    
                    <View style={styles.modalOverlay}>
                      <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                          <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>

                        <Picker 
                          selectedValue={selectedValue}
                          onValueChange={(itemValue) => {
                            setSelectedValue(itemValue)
                            setModalVisible(false)
                          }}
                        >
                          <Picker.Item color={colors.dark[700]} label="Refeições" value="Refeições" />
                          <Picker.Item color={colors.dark[700]} label="Sobremesas" value="Sobremesas" />
                          <Picker.Item color={colors.dark[700]}  label="Bebidas" value="Bebidas" />
                        </Picker>
                      </View>
                    </View>

                  </Modal>
                </>
              ) : (
                <Picker 
                  style={styles.androidPicker}
                  dropdownIconColor={colors.light[400]}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Selecione uma opção" value="" />
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

