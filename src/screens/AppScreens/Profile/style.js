import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../common/Colors'
export default StyleSheet.create({
    RatingView: {
        height: "85%",
        width: "90%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.shade,
        paddingHorizontal: 25,
        backgroundColor: Colors.white
    },
    rating: {
        fontSize: 24,
        color: Colors.secondary
    },
    iCanHelpInView: {
        flex: 6.5,
        width: "90%",
        backgroundColor: Colors.white,
        marginTop: 5,
        borderRadius: Platform.OS === "ios" && 15,

    },
    ratingView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "50%"
    },
    ProfileLogoView: {
        flex: 4.2,
        justifyContent: "center",
        alignItems: "center"
    },
    bioDataView: {
        height: 200,
        marginVertical: 10,
        paddingVertical: 10,
        alignItems: "center"
    },
    ProfileLogo: {
        // borderRadius: Platform.OS==="ios"?10: 0,
        width: Platform.OS === "ios" ? 115 : 110,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    CameraIcon: {
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: '98%',
        width: "98%"
    },
    Camera: {
        height: 26,
        width: 26,
        borderRadius: 13,
        borderWidth: 3,
        borderColor: Colors.white,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.shade
    },
    Title: {
        fontSize: 18,
        letterSpacing: 1.54,
        fontFamily: "WorkSans-SemiBold"
    },
    ThanksMsg: {
        textAlign: "center",
        color: Colors.fontClr,
        fontFamily: "WorkSans-Regular",
        fontSize: 14,
        letterSpacing: -0.12,
    },
    review: {
        textAlign: "center",
        color: Colors.fontClr,
        fontFamily: "WorkSans-Regular",
        fontSize: 13,
        marginTop: 2
    },
    editStory: {
        color: Colors.primary,
        textDecorationLine: "underline",
        fontSize: 11.5,
        letterSpacing: 1
    },
    body: {
        backgroundColor: Colors.white,
        width: "100%",
        marginTop: "6%",
        borderWidth: 1,
        borderRadius: 3,
        borderColor: Colors.shade,
    },
    helpButtons: {
        paddingLeft: 5,
        marginVertical: "2%",
        width: "95%",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    iCanHelpIn: {
        flex: 3.5,
        marginVertical: 5,
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textArea: {
        marginTop: 10,
        height: 90,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: Colors.shade,
        borderRadius: Platform.OS === "ios" && 10,
        textAlignVertical: 'top',
        fontFamily: "WorkSans-Light",
        backgroundColor: Colors.white
    },
    helpfulmoto: {
        marginVertical: 10,
        height: 90,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: Colors.shade,
        borderRadius: Platform.OS === "ios" && 10,
        fontStyle: "italic",
        color: Colors.fontClr,
        textAlignVertical: 'top',
        fontFamily: "WorkSans-Light",
        backgroundColor: Colors.white
    },
    bioDataText: {
        fontFamily: "WorkSans-Regular",
        flex: 1,
        color: Colors.fontClr
    },
    mainView: {
        justifyContent: "center",
        alignItems: "center"
    }
});