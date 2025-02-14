import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    containerElements: {
        backgroundColor: colors.dark[700],
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 32,
        paddingHorizontal: 28,
        width: "100%",
    },

    textLogo:{
        flexDirection: "row",
        alignItems: "center",
        gap: 8
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

    icon: {
        color: colors.light[100],
    },

    span: {
        color: colors.light[100],
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",

        backgroundColor: colors.tints.tomato[100],
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 999,
    },

    badgeContainer: {
        position: "absolute",
        top: -12,
        right: -8,

    }
})