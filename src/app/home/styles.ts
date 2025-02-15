import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    containerInfo: {
        marginTop: 44 ,
        paddingLeft: 30,
        paddingRight: 16,
        marginBottom: 38
    },

    bannerContainer: {
        position: "relative",
        width: "100%",
        height: 120,
        borderRadius: 2.9,
     
        
    },

    bannerImage: {
        position: "absolute",
        zIndex: 1,
        top: -30,
    },

    infoBox: {
        marginTop: 36,
        zIndex: 2,
        alignItems: "flex-end"
    },

    title: {
        color: colors.light[300],
        fontSize: 18,
        fontWeight: 600,
        marginRight: 20 
    },

    description: {
        width: 202,
        color: colors.light[300],
        fontSize: 12,
        lineHeight: 17,
        paddingLeft: 10
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

