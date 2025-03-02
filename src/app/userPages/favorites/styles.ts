import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    main: {
        flex: 1
    },

    container: {
        flexGrow: 1,
        paddingHorizontal: 35,
    },

    favoritesText: {
        fontSize: 32,
        fontWeight: "500",
        color: colors.light[300],
        paddingBottom: 29,
        paddingTop: 56
    },

    emptyText: {
        color: colors.light[500],
        fontSize: 16,
        fontWeight: "500"
    },

    item: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginBottom: 16
    },

    name: {
        color: colors.light[300],
        fontSize: 20,
        fontWeight: "500"
    },

    span: {
        color: colors.tints.tomato[400],
        fontSize: 12
    },

    itemDetails: {
        flexDirection: "row",
        gap: 4
    },

    itemInfos: {
        gap: 12
    }





})