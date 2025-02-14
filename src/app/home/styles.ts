import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    containerInfo: {
        marginTop: 44 ,
        paddingLeft: 30,
        paddingRight: 16   
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
    }
})

