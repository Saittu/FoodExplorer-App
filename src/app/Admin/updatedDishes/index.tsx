import { View, Text, Pressable, TouchableOpacity, TextInput, ScrollView, Platform, FlatList, Modal } from "react-native";
import { styles } from "./styles"
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker"
import { colors } from "@/src/styles/colors";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { pratos } from "@/src/utils/pratos";


export default function updatedDishes() {
    const [selectedValue, setSelectedValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    
    const { id } = useLocalSearchParams(); 
    const prato = pratos.find((p) => p.id === id)
    
    const [name, setName] = useState(prato?.name || "");
    const [description, setDescription] = useState(prato?.description || "");
    const [price, setPrice] = useState(prato?.price || "");
    const [ingredientes, setIngredientes] = useState(prato?.ingredientes || []);
    const [ingredient, setIngredient] = useState("")

    function addIngredient(item: string) {
        if (item.trim() !== "" && !ingredientes.some((ing) => ing.name === item)) {
            setIngredientes([ ...ingredientes, { id: Math.random().toString(), name: item } ])
            setIngredient("")
        }
    }

    function removeIngredient(item: string) {
        setIngredientes(ingredientes.filter((ing) => ing.id !== item))
    }


    function salvarAlteracoes() {
        const index = pratos.findIndex((p) => p.id === id);
        if (index !== -1) {
            pratos[index] = {
                ...pratos[index],
                name,
                description,
                ingredientes,
                price,
                categoryId: selectedCategory
            }
            router.replace("/Admin/home");
            return
        }
    }

    function removerPrato() {
        const index = pratos.findIndex((p) => p.id === id);
        if (index !== -1) {
            pratos.splice(index, 1)
            router.replace("/Admin/home")
        }
    }

    const categorias = [
        { id: "1", name: "Refeições" },
        { id: "2", name: "Sobremesas" },
        { id: "3", name: "Bebidas" }
    ];

    const [selectedCategory, setSelectedCategory] = useState(prato?.categoryId || "");

    return (
        <View  style={styles.main}>
            <HeaderAdmin/>
            
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.backButton} onPress={() => {router.replace("/Admin/home")}}>
                        <MaterialIcons color={colors.light[300]} size={22} name="arrow-back-ios"/>
                        <Text style={styles.backButtonText} >Voltar</Text>
                    </TouchableOpacity>

                    <Text style={styles.primaryText}>Editar Prato</Text>

                    <View style={styles.uploadImage}>
                        <Text style={styles.allTextLabel}>Imagem do prato</Text>
                        <Pressable style={styles.buttonUpload}>
                            <MaterialIcons color={colors.light[100]} size={24} name="upload"/>
                            <Text style={styles.textButtonUpload}>Selecionar Imagem para alterá-la</Text>
                        </Pressable>
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Nome</Text>
                        <TextInput style={styles.inputstyle} placeholderTextColor={colors.light[500]} value={name} onChangeText={setName} />
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Categoria</Text>
                        {Platform.OS === "ios" ? (
                            <>
                            <TouchableOpacity style={styles.inputPickerBox} onPress={() => setModalVisible(true)}>
                                <Text style={styles.textPickerIos}>
                                    {selectedCategory 
                                        ? categorias.find(categoria => categoria.id === selectedCategory)?.name 
                                        : "Selecione uma opção"
                                    }
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
                                    selectedValue={selectedCategory}
                                    onValueChange={(itemValue) => {
                                        setSelectedCategory(itemValue)
                                        setModalVisible(false)
                                    }}
                                    >
                                        <Picker.Item label="Selecione uma opção" value="" />
                                        {categorias.map((categoria) => (
                                            <Picker.Item color={colors.dark[700]} key={categoria.id} label={categoria.name} value={categoria.id} />
                                        ))}
                                    </Picker>
                                </View>
                            </View>

                            </Modal>
                            </>
                        ) : (
                            <Picker 
                            style={styles.androidPicker}
                            dropdownIconColor={colors.light[400]}
                            selectedValue={selectedCategory}
                            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                            >
                                <Picker.Item label="Selecione uma opção" value="" />
                                {categorias.map((categoria) => (
                                    <Picker.Item key={categoria.id} label={categoria.name} value={categoria.id} />
                                ))}
                            </Picker>
                        )}
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Ingredientes</Text>
                        <View style={styles.inputContainer}>
                            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                                {ingredientes.map((item) => (
                                <View key={item.id} style={styles.chip}>
                                    <Text style={styles.chipText}>{item.name}</Text>
                                    <Pressable onPress={() => removeIngredient(item.id)}>
                                        <MaterialIcons name="close" size={16} color={colors.light[300]} />
                                    </Pressable>
                                </View>
                                ))}
                            </View>

                            <View style={styles.inputBox}>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Adicionar"
                                    placeholderTextColor={colors.light[300]}
                                    value={ingredient}
                                    onChangeText={setIngredient}
                                />
                                <Pressable onPress={() => addIngredient(ingredient)}>
                                    <MaterialIcons name="add" size={20} color={colors.light[300]} />
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Preço</Text>
                        <TextInput style={styles.inputstyle} placeholderTextColor={colors.light[500]} value={price} onChangeText={setPrice} />
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Descrição</Text>
                        <TextInput 
                            
                            editable
                            multiline
                            placeholderTextColor={colors.light[500]}
                            value={description}
                            onChangeText={setDescription}
                            numberOfLines={15}
                            maxLength={200}
                            style={[styles.textArea, {height: 170, textAlignVertical: "top"}]}

                        /> 
                    </View>

                    <View style={styles.containerButtons}>
                        <TouchableOpacity onPress={removerPrato} style={[styles.button, {backgroundColor: colors.dark[800], width: 154}]}>
                            <Text style={{ fontWeight: "500", color: colors.light[100]}}>Excluir prato</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, {backgroundColor: colors.tints.tomato[400]}]}>
                            <Text style={{ fontWeight: "500", color: colors.light[100]}} onPress={salvarAlteracoes}>Salvar alterações</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{ paddingTop: Platform.OS === "ios" ? 220 : 160}}></View>
            </ScrollView>

            <NavigationAdmin/>
        </View>
    )
}