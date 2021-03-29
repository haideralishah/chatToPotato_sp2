import Colors from "../../common/Colors";
import AntDesign from "react-native-vector-icons/AntDesign"
import FastImage from "react-native-fast-image";
import Button from "../../components/button"
import {
    connect
} from 'react-redux';
import {
    _reviews
} from "../../store/action/action"
import {
    Actions
} from 'react-native-router-flux';
import React, {
    useState
} from "react";
import {
    Text,
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10
const ReviewScreen = ({ currentUser,
    isLoader,
    isError,
    _reviews,
    recipientUserId,
    proImg,
    avatar_url,
    id }) => {
    const [form, onChangeText] = useState();
    const [rating, setRating] = useState(0);
    return (
        <ScrollView>
            <View style={{ height: flex1 * 10 ,backgroundColor:Colors.white}}>
                <View style={styles.header}>
                    <Text
                        style={{ fontSize: 20, fontFamily: "WorkSans-SemiBold" }}>Review samanthawilliam
                    </Text>
                    <TouchableOpacity
                        onPress={() => Actions.pop()} >
                        <AntDesign
                            name="close"
                            style={{ fontSize: 30, color: Colors.shade }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, justifyContent: "center", alignItems: 'center' }}>
                    {proImg ?
                        <View style={styles.profileImage}>
                            < FastImage
                                style={{ height: "100%", width: "100%", }}
                                source={{ uri: proImg }}
                                resizeMode="contain"
                            />
                        </View> :
                        <View style={styles.profileImage}>
                            < FastImage
                                style={{ height: "100%", width: "100%", }}
                                source={{ uri: avatar_url }}
                                resizeMode="contain"
                            />
                        </View>
                    }
                    <View style={styles.profilePhoto}>
                        <View
                            style={[styles.activeStatus,
                            { borderColor: Colors.white, backgroundColor: Colors.green }]}>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.8, alignItems: 'center', }}>
                    <Text style={styles.msg}>You've beed chatting to this user for.. a while, rate your experience.
                 </Text>
                </View>
                <View style={styles.starIconView}>
                    <TouchableOpacity onPress={() => {
                        setRating(1)
                    }} >
                        <AntDesign
                            name="star"
                            style={[styles.starIcon, {
                                color: rating >= 1 ? Colors.secondary : Colors.shade,
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setRating(2)
                    }}>
                        <AntDesign
                            name="star"
                            style={[styles.starIcon, {
                                color: rating >= 2 ? Colors.secondary : Colors.shade,
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setRating(3)
                    }}>
                        <AntDesign
                            name="star"
                            style={[styles.starIcon, {
                                color: rating >= 3 ? Colors.secondary : Colors.shade,
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setRating(4)
                    }}>
                        <AntDesign
                            name="star"
                            style={[styles.starIcon, {
                                color: rating >= 4 ? Colors.secondary : Colors.shade,
                            }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setRating(5)
                    }}>
                        <AntDesign
                            name="star"
                            style={[styles.starIcon, {
                                color: rating >= 5 ? Colors.secondary : Colors.shade,
                            }]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.reviewMsgView}>
                    <Text style={styles.WriteReview}> write a review
            </Text>
                    <TextInput
                        style={styles.TextAreaStyle}
                        multiline={true}
                        onChangeText={text => onChangeText(text)
                        }
                        value={form}
                    />
                    {isLoader ?
                        <ActivityIndicator
                            style={{ marginTop: "10%" }}
                            size="small" color={Colors.primary}
                        /> :
                        <Button
                            _func={() => _reviews(currentUser,
                                form,
                                rating,
                                recipientUserId,
                                id)}
                            marginTop={25}
                            name={"Submit public review "} />
                    }
                    {isError !== "" &&
                        <Text style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
                        </Text>}
                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    header: {
        flex: 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    TextAreaStyle: {
        height: "50%",
        borderWidth: 1,
        color: Colors.fontClr,
        borderColor: Colors.shade,
        textAlignVertical: "top",
        fontSize: 16,
        marginTop: 10,
        width: "100%",
        borderRadius:(Platform.OS==="ios"?10:0),
        borderWidth: 1,
        backgroundColor: Colors.shade,
        padding: 10
    },
    profilePhoto: {
        height: 110,
        width: 100,
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    activeStatus: {
        height: 20,
        borderWidth: 3,
        width: 20,
        borderRadius: 10,
    },
    msg: {
        fontFamily: "WorkSans-Regular",
        width: "80%",
        color: Colors.fontClr,
        textAlign: "center",
        fontSize: 14,
        letterSpacing: 0.5
    },
    reviewMsgView: {
        paddingHorizontal: 20,
        flex: 5.1,
    },
    starIcon: {
        marginHorizontal: 5,
        fontSize: 35
    },
    starIconView: {
        flex: 0.8,
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 40,
    },
    WriteReview: {
        fontSize: 22,
        color: Colors.fontClr,
        letterSpacing: 0.5,
        fontFamily: "WorkSans-Regular"
    },
    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 55,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    }
});

const mapStateToProp = ({ root }) => ({
    isLoader: root.isLoader,
    isError: root.isError,
    currentUser: root.currentUser,

})
const mapDispatchToProp = (dispatch) => ({
    _reviews: (currentUser, form, rating, recipientUserId, id) => {
        dispatch(_reviews(currentUser, form, rating, recipientUserId, id));
    },
})
export default connect(mapStateToProp, mapDispatchToProp)(ReviewScreen);
// export default ReviewScreen;