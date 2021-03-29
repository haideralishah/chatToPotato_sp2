import PrivacyHeader from "../../components/header/PrivacyHeader";
import Colors from "../../common/Colors";
import FastImage from "react-native-fast-image";
import ClearChatMenu from "../../components/ClearChatMenu"
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    _getReviews
} from '../../store/action/action';
import {
    connect
} from 'react-redux';
import {
    Actions
} from 'react-native-router-flux';
import {
    get_chat_messages,
    _sendMsg
} from '../../store/action/action';
import React, {
    useState, useEffect, useRef
} from "react";
import {
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    ImageBackground,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
const height = Dimensions.get('window').height - (Platform.OS==="ios"?0:23);
const ChatScreen = ({
    currentUser,
    singleMsgs,
    identifier,
    _getReviews,
    get_chat_messages,
    _sendMsg,
    recipientname,
    proImg,
    recipientUserId,
    first_name,
    last_name,
    blockStatus,
    id,
    avatar_url,
    status,
    story }) => {
        console.log(singleMsgs,"singleMsgssingleMsgs")
    const [message, setMessage] = useState('');
    const [clearChatMenu, setClearChatMenu] = useState(false);
    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef();
    useEffect(() => {
        get_chat_messages(currentUser, identifier)
        _getReviews(currentUser, recipientUserId, id);
    }, [])
    useEffect(() => {
        if (singleMsgs.length > 0) {
            setMessages(singleMsgs)
        }
    }, [singleMsgs])
    const sendMsg = (() => {
        _sendMsg(currentUser,
            identifier,
            message,
            messages)
        setMessage("")
    })
    return (
        <ImageBackground
            source={require("../../assets/bevelBG.png")}
            style={{ width: "100%", }}>
            <ScrollView
            >
                <PrivacyHeader
                    goBack={true}
                    route={"DotMenu"}
                    PrivacyScreen={true}
                    MidIcon={require("../../assets/PotatoSp.png")}
                    heading={"Chat to a Potato"} />
                <View
                    style={styles.activeStatus}>
                    <View style={styles.activeStatusLSide}>
                        <View style={styles.activeBtnView}>
                            <View style={styles.activeBtn}></View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                Actions.Recipient({
                                    recipientname,
                                    first_name,
                                    last_name,
                                    proImg,
                                    recipientUserId,
                                    id,
                                    avatar_url,
                                    story
                                })
                            }}
                            style={styles.userName}>
                            {first_name && last_name ?
                                <Text style={{ color: Colors.fontClr, fontWeight: "bold", fontSize: 13 }}>
                                    {first_name + " " + last_name}
                                </Text> :
                                <Text style={{ color: Colors.fontClr, fontWeight: "bold", fontSize: 13 }}>
                                    {recipientname}
                                </Text>
                            }
                        </TouchableOpacity>
                        <View style={styles.status}>
                            <Text style={styles.statusText}>{status ? status : "Online"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.activeStatusRSide}>
                        <Text style={styles.statusText}>Last seen a while ago
                    </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setClearChatMenu(!clearChatMenu)
                            }}
                            style={{ height: "100%", width: "10%", justifyContent: "center", alignItems: "flex-end" }}>
                            <Entypo
                                name="dots-three-vertical"
                                style={{ fontSize: 18, color: Colors.fontClr }} />
                        </TouchableOpacity>
                    </View>
                </View>
                {clearChatMenu &&
                    <ClearChatMenu
                        blockStatus={blockStatus}
                        _func={() => setClearChatMenu(!clearChatMenu)}
                        identifier={identifier} />
                }
                <ScrollView style={styles.Chats}
                    ref={scrollViewRef}
                    onContentSizeChange={(width, height) => scrollViewRef.current.scrollTo({ y: height, animated: true })}>
                    {messages.map((name, index) => {
                        return (
                            name.user.first_name === currentUser.data.data.first_name ?
                                <View
                                    key={name.message + index}
                                    style={styles.Msg3}>
                                    <View style={styles.msg3Main}>
                                        <View style={styles.msg2TextView}>
                                            <Text style={styles.msg2Text}>
                                                {name.message}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1.2, paddingTop: 5, alignItems: "flex-end" }}>
                                        <View style={styles.profileImg}>
                                            <FastImage
                                                style={{ height: "100%", width: "100%", }}
                                                source={{ uri: name.user.avatar_url }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                    </View>
                                </View> :
                                <View style={styles.Msg2}>
                                    <View style={{ flex: 1.2, alignItems: "center" }}>
                                        <View style={styles.profileImg}>
                                            <FastImage
                                                style={{ height: "100%", width: "100%", }}
                                                source={{ uri: name.user.avatar_url }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 8.8, paddingHorizontal: 5, paddingVertical: 5 }}>
                                        <View style={styles.msgTextView}>
                                            <Text style={styles.msg1Text}>
                                                {name.message}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                        )
                    })}
                </ScrollView>
                <View style={styles.footerView}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Entypo
                            name="emoji-happy"
                            style={{ fontSize: 25, color: Colors.green }} />
                    </TouchableOpacity>
                    <View style={{ flex: 7, justifyContent: "center", }}>
                        <TextInput
                            style={{
                                height: 50,
                                fontSize: 14,
                                borderWidth: 1,
                                borderColor: Colors.shade,
                                backgroundColor: Colors.white,
                                borderRadius: 10,
                                paddingHorizontal: 10,
                            }}
                            placeholder="Type your message"
                            onChangeText={text => setMessage(text)}
                            value={message}
                        />
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons
                            name="attachment"
                            style={{ fontSize: 30, color: Colors.green }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if (message == "") {
                            } else {
                                sendMsg(message);
                            }
                        }}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons
                            name="send"
                            style={{ fontSize: 25, color: Colors.green }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground >
    )
};
const styles = StyleSheet.create({
    msg3Main: {
        flex: 8.8,
        paddingHorizontal: 5,
        paddingBottom: 5,
        paddingTop: 5,
        alignItems: "flex-end"
    },
    profileImg: {
        height: 34,
        width: 34,
        borderRadius: 17,
        overflow: "hidden"
    },
    footerView: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: height / 11
    },
    activeStatus: {
        height: height / 13,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: Colors.shade,
        borderBottomColor: Colors.shade,
        flexDirection: "row",
        paddingHorizontal: 20
    },
    activeStatusLSide: {
        flex: 5,
        alignItems: "center",
        height: "100%",
        flexDirection: "row"
    },
    activeStatusRSide: {
        flex: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    activeBtnView: {
        flex: 1,
        justifyContent: "center"
    },
    userName: {
        flex: 5,
        justifyContent: "center"
    },
    status: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        height: 10,
        borderLeftColor: Colors.fontClr,
        borderLeftWidth: 1
    },
    activeBtn: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: Colors.green
    },
    statusText: {
        color: Colors.fontClr,
        fontSize: 11,
        letterSpacing: 0.5
    },
    Chats: {
        height: height / 1.52,
        paddingHorizontal: 20,
        marginTop: 10,

    },
    Msg1: { flex: 3.3 },
    Msg2: {
        flexDirection: "row",
        marginVertical: 1
    },
    Msg3: {
        marginVertical: 1,
        flexDirection: "row",
    },
    msgTextView: {
        alignItems: "flex-start",
        borderColor: Colors.shade,
        borderRadius: 3,
        maxWidth: "95%"
    },
    msgText: {
        letterSpacing: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        color: Colors.fontClr
    },
    msg2TextView: {
        maxWidth: "70%",
        backgroundColor: "#e4f1ff",
        borderWidth: 1,
        borderColor: Colors.shade,
        borderRadius: 3
    },
    msg2Text: {
        letterSpacing: 0.5,
        fontSize: 14.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: "WorkSans-Regular",
        color: Colors.fontClr
    },
    msg1Text: {
        letterSpacing: 0.5,
        fontSize: 14.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontFamily: "WorkSans-Regular",
        color: Colors.fontClr,
        backgroundColor: Colors.white
    }
});


const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    singleMsgs: root.singleMsgs,
})
const mapDispatchToProp = (dispatch) => ({
    get_chat_messages: (currentUser, identifier) => {
        dispatch(get_chat_messages(currentUser, identifier));
    },
    _sendMsg: (currentUser, identifier, message, messages) => {
        dispatch(_sendMsg(currentUser, identifier, message, messages));
    },

    _getReviews: (currentUser, recipientUserId, id) => {
        dispatch(_getReviews(currentUser, recipientUserId, id));
    },
})


export default connect(mapStateToProp, mapDispatchToProp)(ChatScreen);