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
        flexDirection: "row"
    },

    badgeContainer: {
        position: "absolute",
        top: -12,
        right: -8,

    },

    modal: {
        flex: 1
    },

    modalHeader: {
        width: "100%",
        backgroundColor: colors.dark[700],

        flexDirection: "row",
        gap: 16,

        paddingTop: 64,
        paddingBottom: 32,
        paddingLeft: 28,

        alignItems: "center"
    },

    headerTitle: {
        color: colors.light[100],
        fontSize: 21.16,
    },

    modalContent: {
        backgroundColor: colors.dark[400],
        flex: 1,

        paddingHorizontal: 28,
        paddingTop: 20
    },

    containerText: {
        marginTop: 36,

        padding: 10,

        borderBottomColor: colors.dark[1000],
        borderBottomWidth: 1,
    },

    contentText: {
        

        color: colors.light[300],
        fontSize: 24,
        fontWeight: "200"
    },

    boxFooter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    }

})