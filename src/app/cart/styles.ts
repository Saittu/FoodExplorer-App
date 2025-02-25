import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    container: {
        paddingRight: 90,
        paddingLeft: 35,
    },

    text: {
        fontSize: 32,
        fontWeight: "500",
        color: colors.light[300],
        paddingBottom: 27,
        paddingTop: 56
    },

    text2: {
        fontSize: 22,
        fontWeight: "500",
        color: colors.light[300],
        lineHeight: 40
    },

    span: {
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
        gap: 15
    },

    button: {
        maxWidth: 216,
        justifyContent: "center",
        marginRight: 32,
        marginLeft: 140,
        marginTop: 40
    }
})