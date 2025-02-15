import { Platform, StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    box: {
        flex: 1,
        paddingTop: 24
    },

    container: {
        width: "100%",
        flexDirection: "row",
        
        paddingBottom: Platform.OS === "ios" ? 50 : 30 ,
        paddingVertical: 34,
        paddingHorizontal: Platform.OS === "ios" ? 20 : 30,
        gap: 8,

        alignItems: "center",

        backgroundColor: colors.dark[600]
    },

    contentTextLogo: {
        flexDirection: "row",
        gap: 6.5
    },

    textLicence: {
        color: colors.light[200],
        textAlign: "right",
        fontSize: 12
    },

    textWork: {
        color: colors.light[700],
        fontSize: 15.26,
        fontWeight: "700"
    }

})