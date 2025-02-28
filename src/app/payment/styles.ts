import { Platform, StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },

    container: {
        flexGrow: 1,
        paddingTop: 56,
        paddingHorizontal: Platform.OS === "ios" ? 20 : 35,
        gap: 32
    },

    payment: {
        color: colors.light[300],
        fontSize: 32,
        fontWeight: "500"
    },

    containerPayment: {
        maxWidth: 353,
        width: "100%",
    },

    paymentOptions: {
        flexDirection: "row",
        minWidth: 353,
    },

    paymentOptionsPix: {
        flexDirection: "row",
        gap: 14,
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: colors.light[600],
        borderTopStartRadius: 8,
        width: 176,
    },

    paymentOptionsCreditCard: {
        flexDirection: "row",
        gap: 14,
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: "center",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.light[600],
        borderTopRightRadius: 8,
        width: 176,
        backgroundColor: colors.dark[800]
    },

    textPaymentOptions: {
        color: colors.light[100],
        fontSize: 16
    },

    paymentBox: {
        width: 352,
        height: 381,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.6,
        borderColor: colors.light[600],
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },

    creditCard: {
        gap: 37
    },

    input: {
        maxWidth: 300,
        minWidth: 144,
        
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.light[100],
        borderRadius: 5,


    },

    creditCardRow: {
        flexDirection: "row",
        gap: 17
    },

    textCreditCard: {
        color: colors.light[400],
        fontSize: 16
    },

    dataCreditCard: {
        gap: 8
    }

});