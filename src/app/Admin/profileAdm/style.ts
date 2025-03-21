import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";


export const styles = StyleSheet.create({
    main: {
        flex: 1
    },

    container: {
        flexGrow: 1,
        paddingHorizontal: 32,
        paddingTop: 25
    },

    boxImage: {
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },

    buttonUpload: {
        backgroundColor: colors.dark[800],
        flexDirection: "row",
        gap: 8,
        paddingHorizontal: 32,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        width: "100%"

    },

    textButtonUpload: {
        color: colors.light[100],
        fontWeight: "500"
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