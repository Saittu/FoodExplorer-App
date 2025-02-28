import { Platform, StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    main: {
        flex: 1
    },

    container: {
        flexGrow: 1,
        paddingHorizontal: 35,
    },

    primaryText: {
        fontSize: 32,
        fontWeight: "500",
        color: colors.light[100],
        marginTop: 56,
        marginBottom: 17
    },

    requestedContainer: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.dark[1000],
        gap: 16,
        marginBottom: 17
    },

    requestedInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: Platform.OS === "ios" ? 23 : 31,
    },

    requestedId: {
        fontSize: 14,
        color: colors.light[400]
    },

    requestedStatus: {
        flexDirection: "row",
        alignItems: "center"
    },

    requestedSpan: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: colors.tints.tomato[300],
        marginRight: 5
    },

    requestedText: {
        color: colors.light[400],
    },

})