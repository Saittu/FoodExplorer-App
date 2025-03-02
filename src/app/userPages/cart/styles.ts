import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    page: {
        flex: 1,
    },

    main: {
        flexGrow: 1
    },

    container: {
        paddingRight: 90,
        paddingLeft: 35,
    },

    cartText: {
        fontSize: 32,
        fontWeight: "500",
        color: colors.light[300],
        paddingBottom: 27,
        paddingTop: 56
    },

    itemDetails: {
        gap: 4
    },

    nameDish: {
        color: colors.light[300],
        fontSize: 20,
        fontWeight: 500
    },

    quantity:{
        color: colors.light[300]
    },

    removeText:{
        fontSize: 12,
        color: colors.tints.tomato[400]
    },

    price: {
        fontSize: 20,
        fontWeight: "500",
        color: colors.light[300],
        marginTop: 40
    },

    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom: 16
    },

    button: {
        maxWidth: 216,
        justifyContent: "center",
        marginRight: 32,
        marginLeft: 140,
        marginTop: 40
    },

    emptyCartContainer: {
        borderWidth: 2,
        borderColor: colors.light[600],
        borderRadius: 8,

        width: 320,
        justifyContent: 'center',
        alignItems: "center",
        paddingVertical: 70,
        gap: 15
    },

    emptyCartText: {
        color: colors.light[500],
        fontSize: 16,
        fontWeight: "500"
    }
})