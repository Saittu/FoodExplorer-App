import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    categoria: {
        color: colors.light[300],
        fontSize: 18,
        fontWeight: "500",
        padding: 24

    },


    containerPratos: {
        backgroundColor: colors.dark[200],
        borderRadius: 8,
        padding: 24,
        width: 210,
        height: 292,
        justifyContent: "center",
        marginHorizontal: 8,
        borderWidth: 1,
        borderColor: colors.tints.cake[100]
    },

    content: {
        alignItems: "center",
        gap: 12,
        
    },

    iconEdit: {
        position: "absolute",
        zIndex: 1,
        right: -5,
        top: -50
    },

    refeicaoText:{
        flexDirection: "row",
        alignItems: "center",
        gap: 3
    },
    
    title: {
        color: colors.light[300],

        fontSize: 14,
        fontWeight: "500"
    },

    icon: {
        color: colors.light[300]
    },

    price: {
        color: colors.tints.cake[200],
        fontSize: 16,
    },

    quantity: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        justifyContent: "center",
        paddingVertical: 4
        
    },

    quantityText: {
        color: colors.light[300],
        fontSize: 16
    },
})