import { View, Text, Pressable, TouchableOpacity, TextInput, ScrollView, Platform, FlatList, Modal, Image } from "react-native";
import { styles } from "./styles"
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker"
import { colors } from "@/src/styles/colors";
import { useState } from "react";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { useNewDishe } from "@/src/storage/newDishes";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";


export default function updatedDishes() {
    const [ingredient, setIngredient] = useState("")
    const [ingredients, setIngredients] = useState<string[]>([])
    const [selectedValue, setSelectedValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const { adicionarPrato } = useNewDishe()
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUri, setImageUri] = useState<string | null>(null)

    function addIngredient() {
        if (ingredient.trim() !== "" && !ingredients.includes(ingredient)) {
            setIngredients([ ...ingredients, ingredient ])
            setIngredient("")
        }
    }

    function removeIngredient(item: string) {
        setIngredients(ingredients.filter((ing) => ing !== item))
    }

    function salvarPrato() {
        const prato = {
            id: uuid.v4(),
            name: name,
            price: price,
            count: 0,
            favorite: false,
            imageSmall: imageUri,
            imageLarge: imageUri,
            description: description,
            ingredientes: ingredients.map((ingredientName) => ({
                id: uuid.v4(), 
                name: ingredientName,
            })),
            categoryId: selectedValue,

        }

        adicionarPrato(prato)

        router.replace("/Admin/home")
    }

    const categorias = [
        { id: "1", name: "Refeições" },
        { id: "2", name: "Sobremesas" },
        { id: "3", name: "Bebidas" }
    ];

    async function pickImage() {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
            alert("Desculpe, precisamos de permissão para acessar suas fotos!")
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
    }

    return (
        <View  style={styles.main}>
            <HeaderAdmin/>
            
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.backButton} onPress={() => {router.replace("/Admin/home")}}>
                        <MaterialIcons color={colors.light[300]} size={22} name="arrow-back-ios"/>
                        <Text style={styles.backButtonText} >Voltar</Text>
                    </TouchableOpacity>

                    <Text style={styles.primaryText}>Novo Prato</Text>

                    <View style={styles.uploadImage}>
                        <Text style={styles.allTextLabel}>Imagem do prato</Text>
                        <Pressable style={styles.buttonUpload} onPress={pickImage}>
                            <MaterialIcons color={colors.light[100]} size={24} name="upload"/>
                            <Text style={styles.textButtonUpload}>Selecione Imagem</Text>
                        </Pressable>
                        {imageUri && (
                            <Image
                                source={{ uri: imageUri }}
                                style={{ width: 100, height: 100, marginTop: 10, borderRadius: 8 }}
                            />
                        )}
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Nome</Text>
                        <TextInput 
                            style={styles.inputstyle} 
                            placeholderTextColor={colors.light[500]} 
                            placeholder="Ex: Salada César"
                            value={name}
                            onChangeText={setName}
                            />
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Categoria</Text>
                        {Platform.OS === "ios" ? (
                            <>
                            <TouchableOpacity style={styles.inputPickerBox} onPress={() => setModalVisible(true)}>
                                <Text style={styles.textPickerIos}>
                                    {selectedValue 
                                        ? categorias.find(categoria => categoria.id === selectedValue)?.name 
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
                                    selectedValue={selectedValue}
                                    onValueChange={(itemValue) => {
                                        setSelectedValue(itemValue)
                                        setModalVisible(false)
                                    }}
                                    >
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
                            selectedValue={selectedValue}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
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
                            {ingredients.map((item) => (
                                <View key={item} style={styles.chip}>
                                    <Text style={styles.chipText}>{item}</Text>
                                    <Pressable onPress={() => removeIngredient(item)}>
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
                                <Pressable onPress={addIngredient}>
                                    <MaterialIcons name="add" size={20} color={colors.light[300]} />
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Preço</Text>
                        <TextInput 
                            style={styles.inputstyle} 
                            placeholderTextColor={colors.light[500]} 
                            placeholder="R$ 00,00"
                            value={price}
                            onChangeText={setPrice}
                            />
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Descrição</Text>
                        <TextInput 
                            
                            editable
                            multiline
                            placeholderTextColor={colors.light[500]}
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            numberOfLines={15}
                            maxLength={200}
                            style={[styles.textArea, {height: 170, textAlignVertical: "top"}]}
                            value={description}
                            onChangeText={setDescription}

                        /> 
                    </View>

                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={styles.button} onPress={salvarPrato}>
                            <Text style={{ fontWeight: "500", color: colors.light[100]}}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{ paddingTop: Platform.OS === "ios" ? 220 : 160}}></View>
            </ScrollView>

            <NavigationAdmin/>
        </View>
    )
}