import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";
    

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: 48,
        paddingHorizontal: 14,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.dark[900],
        borderRadius: 8,
        width: "100%",
        color: colors.light[500]
        
    },

    placeholderText: {
        color: colors.light[500],
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 100
    },

    label: {
        color: colors.light[400], 
        marginBottom: 8
    },
    
    icon: {
        position: "absolute",
        zIndex: 1,
        bottom: 13,
        left: 10
    }


})