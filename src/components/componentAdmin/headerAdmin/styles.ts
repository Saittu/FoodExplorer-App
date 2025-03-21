import { Platform, StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    containerElements: {
        backgroundColor: colors.dark[700],
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 60 : StatusBar.currentHeight || 0,
        paddingBottom: 20,
        width: "100%",
    },

    textLogo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingLeft: 95
    },

    text: {
        color: colors.light[100],
        fontSize: 21,
        fontWeight: "700",
    },

    logo: {
        width: 24,
        height: 25
    },

    textAdmin: {
        color: colors.tints.cake[200],
        fontSize: 12
    }

});