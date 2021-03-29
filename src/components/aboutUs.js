import React from "react";
import Colors from '../common/Colors';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { Actions } from "react-native-router-flux";
import { connect } from 'react-redux';
import { _Logout} from "../store/action/action";
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';
const AboutUs = ({ title,_Logout,currentUser}) => {
    return (
        <TouchableOpacity
            style={styles.item}
            activeOpacity={0.7}
            onPress={() => {
                {
                    title == "About Us" &&
                        Actions.AboutUsScreen()
                }
                {
                    title == "Contact" &&
                        Actions.ContactScreen()
                }
                {
                    title == "How to Chat" &&
                        Actions.HowToChatScreen()
                }
                {
                    title == "Logout" &&
                    _Logout(currentUser)
                }
            }} >
            <View style={styles.icons}>
                {title == "About Us" &&
                    <AntDesign
                        name="questioncircleo"
                        style={{ fontSize: 14, color: Colors.fontClr }}
                    />
                }
                {title == "Contact" &&
                    <Feather
                        name="phone-call"
                        style={{ fontSize: 16, color: Colors.fontClr }}
                    />
                }
                {title == "How to Chat" &&
                    <Ionicons
                        name="chatbubble-ellipses-outline"
                        style={{ fontSize: 16, color: Colors.fontClr }}
                    />
                }
                {title == "Logout" &&
                    <Ionicons
                        name="exit-outline"
                        style={{ fontSize: 17, color: Colors.fontClr }}
                    />
                }
            </View>
            <View style={{ justifyContent: "center", width: "75%", height: "100%" }} >
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.arrow}>
                {title != "Logout" &&
                    <Entypo
                        name="chevron-small-right"
                        style={{ fontSize: 35, color: Colors.fontClr }}
                    />
                }
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 61,
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.shade,
    },
    title: {
        fontSize: 16,
        letterSpacing: 0.41,
        fontFamily: "WorkSans-Regular"
    },
    icons: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "15%"
    },
    arrow: {
        justifyContent: "center",
        alignItems: "center",
        width: "10%"
    },
});
const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
})
const mapDispatchToProp = (dispatch) => ({
    _Logout: (currentUser) => {
        dispatch(_Logout(currentUser));
    },
    
})
export default connect(mapStateToProp, mapDispatchToProp)(AboutUs);