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
        gap: Platform.OS === "ios" ? 22 : 34,
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

    textDropDown: {
        color: colors.light[400]
    },

    listItem: {
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8
    },

    listItemText: {
        color: colors.light[400]
    },

    inputPickerBox: {
        backgroundColor: colors.dark[900],
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16
    },

    textPickerIos: {
        color: colors.light[400]
    },

    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    modalContent: {
        backgroundColor: colors.light[200],
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
    
    closeButton: {
        alignItems: "center",
        paddingVertical: 10
    },

    closeText: {
        fontSize: 16,
        color: colors.tints.cake[100]
    },

    androidPicker: {
        color: colors.light[400],
        backgroundColor: colors.dark[900]
    }


})