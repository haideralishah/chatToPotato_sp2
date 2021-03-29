import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Colors from '../common/Colors';
import Entypo from 'react-native-vector-icons/Entypo'; 
import React from "react"; 
import {
    _logout
} from "../store/action/action";
import {
    Text,
    StyleSheet,
    View, 
    TouchableOpacity,
    Dimensions
} from 'react-native';
const height = Dimensions.get('window').height - 26;
const flex1 = height / 10;
const ClearChatData = ({ title, _func  }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                if (title == "Block") {
                    _func()
                }
            }
            }
            style={{ justifyContent: "center", alignItems: "center" }}
        >
            <View style={{ width: "70%", marginVertical: 10, justifyContent: "center", flexDirection: "row" }}>
                <View style={{ flex: 3, alignItems: "center", justifyContent: "center", }}>
                    {title == "Clear Chat" &&
                        <MaterialCommunityIcons
                            name="chat-remove-outline"
                            style={{ color: Colors.secondary, fontSize: 25 }}
                        />
                    }
                    {title == "Block" &&
                        <Entypo
                            name="block"
                            style={{ color: Colors.secondary, fontSize: 20 }}
                        />
                    }
                    {title == "unblock" &&
                        <MaterialCommunityIcons
                            name="chat-alert-outline"
                            style={{ color: Colors.secondary, fontSize: 25 }}
                        />
                    }
                </View>
                <View style={{ flex: 7, justifyContent: "center", }}>
                    <Text style={{ fontSize: 20, color: Colors.fontClr, fontFamily: "WorkSans-SemiBold" }}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({

});
export default ClearChatData;