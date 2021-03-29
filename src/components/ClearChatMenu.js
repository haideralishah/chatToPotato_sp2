import Colors from '../common/Colors';
import React from "react";
import {
    _blockChat,
    _unBlockChat,
    _clearChat
} from "../store/action/action"
import {
    connect
} from 'react-redux';
import {
    _logout
} from "../store/action/action";
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
const ClearChatMenu = ({
    allConversation,
    currentUser,
    _func,
    _blockChat,
    _unBlockChat,
    _clearChat,
    identifier,
    blockStatus }) => {
    return (
        <TouchableOpacity
            onPress={_func}
            style={styles.logoutAbsolute}>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.notification}>
                <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: "space-around" }}>
                    <TouchableOpacity
                        onPress={() => {
                            if (blockStatus == false) {
                                _blockChat(allConversation, currentUser, identifier)
                            } else {
                                _unBlockChat(currentUser, identifier)
                            }
                        }
                        }>
                        <Text style={{ fontSize: 18, fontFamily: "WorkSans-Regular" }}>{blockStatus ? "Unblock" : "Block"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            _clearChat(currentUser, identifier)
                        }
                    >
                        <Text style={{ fontSize: 18, fontFamily: "WorkSans-Regular" }}>Clear Chat
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontFamily: "WorkSans-Regular" }}>Report
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </TouchableOpacity >
    )
};
const styles = StyleSheet.create({
    logoutAbsolute: {
        height: "100%",
        width: "100%",
        position: "absolute",
        alignItems: "flex-end",
        zIndex: 3,
    },
    notification: {
        height: "25%",
        top: "16%",
        right: "1%",
        width: "40%",
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
});
const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    allConversation: root.allConversation,
})
const mapDispatchToProp = (dispatch) => ({
    _blockChat: (allConversation, currentUser, identifier) => {
        dispatch(_blockChat(allConversation, currentUser, identifier));
    },
    _unBlockChat: (currentUser, identifier) => {
        dispatch(_unBlockChat(currentUser, identifier));
    },
    _clearChat: (currentUser, identifier) => {
        dispatch(_clearChat(currentUser, identifier));
    },
})
export default connect(mapStateToProp, mapDispatchToProp)(ClearChatMenu);