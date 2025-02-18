import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        paddingTop: 16,
        paddingHorizontal: 36,

        
        gap: 16
    },

    containerBoxBack: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
        
    },

    textBoxBack: {
        color: colors.light[300],
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center",
        justifyContent: "center",
        
        // marginBottom: 5
    },

    boxDescriptionDish:{
        gap: 24
    },

    titleDish: {
        color: colors.light[300],
        fontSize: 27,
        fontWeight: "500",
        textAlign: "center"
    },

    descriptionDish: {
        color: colors.light[300],
        fontSize: 16,
        textAlign: "center",
    },

    boxOrder: {
        marginTop: 24,
        flexDirection: "row",
        gap: 15.8,
        width: "100%",
        justifyContent: "center"
    },

    boxCount: {
        
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        gap: 15.8
    },

    textCount: {
        color: colors.light[300],
        fontSize: 22,
        fontWeight: "700"
    },

    boxIngredients: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,

        borderRadius: 5,
        backgroundColor: colors.dark[1000]
    },

    nameIngredients: {
        color: colors.light[100],
        fontWeight: "500",
        textAlign: "center"
    }

})