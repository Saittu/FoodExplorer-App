import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: colors.light[700],
    },

    box: {
            paddingTop: 30,
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: colors.light[700],
            flexDirection: "row",
            justifyContent: "space-between"
        },
    
        span: {
            color: colors.light[100],
            fontWeight: "500",
            fontSize: 16,
        },
    
        text: {
            color: colors.light[300]
        },
    
        alterar: {
            alignItems: "center",
            justifyContent: "center"
        }
})