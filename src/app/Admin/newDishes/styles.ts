import { Platform, StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    main:{
        flex: 1
    },

    container: {
        flexGrow: 1,
        paddingHorizontal: 32,
        paddingTop: 10
    },

    content: {
        gap: 24
    },


    backButton: {
        flexDirection: "row"
    },

    backButtonText:{
        color: colors.light[300],
        fontSize: 16.54,
        fontWeight: "500",
        textAlign: "center"
    },

    primaryText:{
        fontSize: 32,
        fontWeight: "500",
        color: colors.light[300]
    },

    uploadImage: {
        gap: 16
    },

    allTextLabel:{
        color: colors.light[400],
        fontSize: 16,
    },

    buttonUpload: {
        backgroundColor: colors.dark[800],
        flexDirection: "row",
        gap: 8,
        paddingHorizontal: 32,
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 8

    },

    textButtonUpload: {
        color: colors.light[100],
        fontWeight: "500"
    },

    inputstyle: {
        paddingHorizontal: 14,
        paddingVertical: 12,
        alignItems: "center",
        backgroundColor: colors.dark[800],
        borderRadius: 8,
        color: colors.light[500]
    },

    textArea: {
        backgroundColor: colors.dark[800],
        borderRadius: 8,
        paddingHorizontal: 14,
        color: colors.light[500],
        justifyContent: "flex-start",
        paddingVertical: 14
    },

    containerButtons: {
        flexDirection: "row",
        gap: 32,
    },

    button: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: colors.tints.tomato[400],
        width: "100%"
    },

    textDropDown: {
        color: colors.light[400]
    },

        inputContainer:{
            flexDirection: "row",
            paddingHorizontal: 10,
            borderRadius: 8,
            backgroundColor: colors.dark[800],
            flexWrap: "wrap",
            alignItems: "center"
        },
    
        chip: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 16,
            justifyContent: "center",
            gap: 8,
            backgroundColor: colors.light[600],
            marginRight: 16,
            marginTop: 12
            
        },
    
        chipText: {
            color: colors.light[100],
            fontSize: 16
        },
    
        inputBox: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: Platform.OS ==="ios" ? 10 : 0,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: colors.light[500],
            borderStyle: "dashed",
            backgroundColor: "transparent",
            maxWidth: 112,
            borderRadius: 8,
            marginVertical: 8,
            
        },
    
        input: {
            flexDirection: "row",
            color: colors.light[100],
            fontSize: 16,
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
        },
    
        inputPickerBox: {
            backgroundColor: colors.dark[900],
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16
        },
})