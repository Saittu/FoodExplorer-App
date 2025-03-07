import { Platform, StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    navigationContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: Platform.OS === "ios" ? 80 : 60,
        backgroundColor: colors.dark[700], 
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 20,
        zIndex: 1000, 
    },

    icon: {
        color: colors.light[100],
        paddingBottom: Platform.OS === "ios" ? 15 : 0,
    },

    badgeContainer: {
        position: "absolute",
        top: -10, 
        right: -15, 
        justifyContent: "center",
        alignItems: "center",
        minWidth: 28, 
        height: 24,
    },
    span: {
        color: colors.light[100],
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: colors.tints.tomato[100],
        paddingVertical: 3,
        paddingHorizontal: 6, 
        borderRadius: 999,
        minWidth: 28, 
        height: 24,
        lineHeight: 18, 
        overflow: "hidden", 
    },
})