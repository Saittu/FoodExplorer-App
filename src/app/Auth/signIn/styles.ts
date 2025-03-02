import { Platform, StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    logo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 73
    },

    textLogo :{
        color: colors.light[100],
        fontSize: 37,
        fontWeight: "700",
        paddingLeft: 10
    },

    form: {
        width: "100%",
        paddingRight: 47,
        paddingLeft: Platform.OS === "ios" ? 48 : 65,
        gap: 32
    },

    textRoute: {
        color: colors.light[100],
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center"
    }

})