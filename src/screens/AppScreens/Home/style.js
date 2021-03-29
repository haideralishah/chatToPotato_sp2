import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../common/Colors'
export default StyleSheet.create({
    Public: {
        backgroundColor: Colors.primary,
        width: "50%", borderTopLeftRadius: 15,
        justifyContent: "center", alignItems: "center"
      },
      Professional: {
        backgroundColor: Colors.ligthShade,
        width: "50%", borderTopRightRadius: 15,
        justifyContent: "center", alignItems: "center"
      },
      ProfessionalTxt: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: 0.31,
        color: Colors.fontClr,
      },
      radio: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 14,
        letterSpacing: 0.36,
        color: Colors.fontClr
      },
      HumansContainer: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }
      ,
      HumansWho: {
        fontFamily: "WorkSans-Bold",
        fontSize: 18,
        letterSpacing: 0.46,
        color: Colors.fontClr,
      },
      INeedContainer: {
        borderColor: Colors.shade,
        borderWidth: 1,
        borderRadius: Platform.OS==="ios"?10: 0,
        height: 50,
        flexDirection: "row",
        backgroundColor:Colors.white,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "5%"
      },
      INeed: {
        fontFamily: "WorkSans-Regular",
        letterSpacing: 0.36,
        color: Colors.fontClr,
      },
});