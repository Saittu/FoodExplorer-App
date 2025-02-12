import { StyleSheet } from "react-native";
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
        gap: 32
    },

    textRoute: {
        color: colors.light[100],
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center"
    }

})