import { View, Text, Pressable, TouchableOpacity, TextInput, ScrollView, Platform, FlatList } from "react-native";
import { styles } from "./styles"
import HeaderAdmin from "@/src/components/componentAdmin/headerAdmin";
import NavigationAdmin from "@/src/components/componentAdmin/navigationAdmin";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker"
import { colors } from "@/src/styles/colors";
import { useState } from "react";
import { router } from "expo-router";


export default function updatedDishes() {
    const [ingredient, setIngredient] = useState("")
    const [ingredients, setIngredients] = useState<string[]>([])
    const [open, setOpen] = useState(false)
    const [valorSelecionado, setValorSelecionado] = useState(null)
    const [item, setItems] = useState([
        {label: "Refeições", value: "Refeições"},
        {label: "Entradas", value: "Entradas"},
        {label: "Outros", value: "Outros"}
    ])

    function addIngredient() {
        if (ingredient.trim() !== "" && !ingredients.includes(ingredient)) {
            setIngredients([ ...ingredients, ingredient ])
            setIngredient("")
        }
    }

    function removeIngredient(item: string) {
        setIngredients(ingredients.filter((ing) => ing !== item))
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
                        <Pressable style={styles.buttonUpload}>
                            <MaterialIcons color={colors.light[100]} size={24} name="upload"/>
                            <Text style={styles.textButtonUpload}>Selecione Imagem</Text>
                        </Pressable>
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Nome</Text>
                        <TextInput style={styles.inputstyle} placeholderTextColor={colors.light[500]} placeholder="Ex: Salada César"/>
                    </View>

                    <View style={{ gap: 8}}>
                        <Text style={styles.allTextLabel}>Categoria</Text>
                        <DropDownPicker
                            open={open}
                            value={valorSelecionado}
                            items={item}
                            setOpen={setOpen}
                            setValue={setValorSelecionado}
                            setItems={setItems}
                            placeholder="Selecione uma categoria"
                            listMode="SCROLLVIEW"

                            style={{ backgroundColor: colors.dark[900]}}
                            dropDownContainerStyle={{ backgroundColor: colors.dark[900]}}
                            textStyle={styles.textDropDown}
                            ArrowUpIconComponent={() => <MaterialIcons name="arrow-upward" size={16} color={colors.light[100]}/>}
                            ArrowDownIconComponent={() => <MaterialIcons name="arrow-downward" size={16} color={colors.light[100]}/>}
                        />
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
                        <TextInput style={styles.inputstyle} placeholderTextColor={colors.light[500]} placeholder="R$ 00,00" />
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

                        /> 
                    </View>

                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={styles.button}>
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