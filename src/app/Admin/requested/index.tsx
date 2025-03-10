import { View, Text, ScrollView, Platform, StyleSheet, TouchableOpacity } from "react-native";
import Header from "@/src/components/componentsUser/header";
import Navigation from "@/src/components/componentsUser/navigation";
import { styles } from "./styles";
import { usePedidosStore } from "@/src/storage/usePedidosStore";
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import { useState } from "react";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";

export default function RequestedAdmin() {
  const { pedidos } = usePedidosStore();
  const [open, setOpen] = useState(false);
  const [valorSelecionado, setValorSelecionado] = useState<string | null>(null); 
  const [item, setItems] = useState<ItemType<string>[]>([
    { label: "Pendente", value: "Pendente" },
    { label: "Preparando", value: "Preparando" },
    { label: "Entregue", value: "Entregue" },
  ]);

  const getColorByValue = (value: string) => {
    switch (value) {
      case "Pendente":
        return colors.tints.tomato[300];
      case "Preparando":
        return colors.tints.carrot[100];
      case "Entregue":
        return colors.tints.mint[100];
      default:
        return colors.dark[900];
    }
  };

  const renderListItem = (item: ItemType<string>) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        setValorSelecionado(item.value ?? null)
        setOpen(false)
      }}
    >
      <MaterialIcons name="circle" size={8} color={getColorByValue(item.value ?? "default")} />
      <Text style={styles.listItemText}>{item.label}</Text>
    </TouchableOpacity>
  );

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
              

              {/* <DropDownPicker
                open={open}
                value={valorSelecionado}
                items={item}
                setOpen={setOpen}
                setValue={(callback) => {
                  const newValue = typeof callback === "function" ? callback(valorSelecionado) : callback

                  setValorSelecionado(newValue || null)
                  
                }}
                setItems={setItems}
                placeholder="Selecione uma categoria"
                listMode="SCROLLVIEW"
                style={{ backgroundColor: colors.dark[900] }}
                dropDownContainerStyle={{ backgroundColor: colors.dark[900] }}
                textStyle={styles.textDropDown}
                ArrowUpIconComponent={() => (
                  <MaterialIcons name="arrow-upward" size={16} color={colors.light[100]} />
                )}
                ArrowDownIconComponent={() => (
                  <MaterialIcons name="arrow-downward" size={16} color={colors.light[100]} />
                )}
                renderListItem={renderListItem} 
              /> */}
            </View>
          </View>
        ))}

        <View style={{ paddingTop: Platform.OS === "ios" ? 120 : 100 }}></View>
      </ScrollView>

      <NavigationAdmin />
    </View>
  );
}

