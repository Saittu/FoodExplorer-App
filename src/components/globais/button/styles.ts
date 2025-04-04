import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    container: {
        maxWidth: 500,
        width: "100%",
        paddingHorizontal: 32,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        borderRadius: 5,
        backgroundColor: colors.tints.tomato[100],

        flexDirection: "row",
        
    },

    title: {
        color: colors.light[100],
        textAlign: "center",
        fontSize: 14,
        fontWeight: "500",
    }
})