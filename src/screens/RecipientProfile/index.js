import Colors from "../../common/Colors";
import AntDesign from "react-native-vector-icons/AntDesign"
import FastImage from "react-native-fast-image";
import ClientReviewsScreen from "../../components/clientReviewsScreen"
import {
    connect
} from 'react-redux';
import {
    _getReviews
} from '../../store/action/action';
import {
    Actions
} from 'react-native-router-flux';
import React, {
    useEffect,
    useState
} from "react";
import {
    Text,
    StyleSheet,
    ImageBackground,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
const height = Dimensions.get('window').height - 26;
const flex1 = height / 10;
const Recipient = ({
    freePotatoes,
    first_name,
    last_name,
    recipientname,
    proImg,
    getReviews,
    recipientUserId,
    id,
    avatar_url,
    story }) => {
    const [recipientId, setRecipientId] = useState(recipientUserId ? recipientUserId : id)
    const [storyTitle, setstoryTitle] = useState('')
    const [avgResponseTime, setavgResponseTime] = useState('')
    const [avgResponseTimeMinuts, setavgResponseTimeMinuts] = useState('')
    const [recipientcountry, setrecipientcountry] = useState('')
    useEffect(() => {
        calculateHours()
    }, [])
    const calculateHours = () => {
        freePotatoes.map((data) => {
            if (recipientId == data.id) {
                setstoryTitle(data.story)
                setavgResponseTime(data.average_response_time)
                setavgResponseTimeMinuts(Math.floor(avgResponseTime / 60) + " Minuts")
                if (avgResponseTimeMinuts >= 60) {
                    setavgResponseTimeMinuts(Math.floor(avgResponseTimeMinuts / 60) + " Hours")
                }
                setrecipientcountry(data.country)
            }
        })
    }
    const [reviews, setReviews] = useState([])
    const [dummyData, setdummyData] = useState(getReviews)
    const [logOuteSelected, setLogOuteSelected] = useState(false);
    let ratingAvgratingAvg;
    class shopRatingCollection extends Array {
        sum(key) {
            return this.reduce((a, b) => Number(a) + Number((b[key] || 0)), 0);
        }
    }
    const traveler = new shopRatingCollection(...getReviews.data);
    const sumOfRating = traveler.sum("rating");
    ratingAvgratingAvg = sumOfRating / getReviews.data.length;
    return (
        <ImageBackground
            source={require("../../assets/bgCloud.png")}
            style={{ height: "100%", width: "100%", }}>
            {logOuteSelected &&
                <ClientReviewsScreen
                    recipientUserId={recipientUserId}
                    proImg={proImg}
                    avatar_url={avatar_url}
                    dummyData={getReviews}
                    _func={() => { setLogOuteSelected(!logOuteSelected) }} />
            }
            <ScrollView>
                <View style={{ height: flex1 * 0.9, paddingHorizontal: 15, justifyContent: "flex-end" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}>
                        <AntDesign
                            name="arrowleft"
                            style={{ color: Colors.fontClr, fontSize: 30 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ height: flex1 * 2, justifyContent: "center", alignItems: 'center' }}>
                    <View style={{ width: 116, height: 116, borderRadius: 58, overflow: "hidden" }}>
                        < FastImage
                            style={{ height: "100%", width: "100%", }}
                            source={{ uri: proImg ? proImg : avatar_url }}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.profilePhoto}>
                        <View
                            style={[styles.activeStatus,
                            { borderColor: Colors.white, backgroundColor: Colors.green }]}>
                        </View>
                    </View>
                </View>
                <View style={{ height: flex1 * 1.1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.userName}>{recipientname ? recipientname : first_name + " " + last_name}
                    </Text>
                    <Text style={styles.msg}>{storyTitle}
                    </Text>
                </View>
                <View style={{ height: flex1 * 1.8, paddingHorizontal: 40 }}>
                    <TouchableOpacity
                        onPress={() => setLogOuteSelected(!logOuteSelected)}
                        style={styles.reviewView}>
                        <Text style={{ fontFamily: "WorkSans-SemiBold", color: Colors.fontClr }}>Reviews
                    </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <AntDesign
                                name="star"
                                style={{
                                    color: ratingAvgratingAvg >= 1 ? Colors.secondary : Colors.shade,
                                    fontSize: 18,
                                    marginHorizontal: 2
                                }}
                            />
                            <AntDesign
                                name="star"
                                style={{
                                    color: ratingAvgratingAvg >= 2 ? Colors.secondary : Colors.shade,
                                    fontSize: 18,
                                    marginHorizontal: 2
                                }}
                            />
                            <AntDesign
                                name="star"
                                style={{
                                    color: ratingAvgratingAvg >= 3 ? Colors.secondary : Colors.shade,
                                    fontSize: 18,
                                    marginHorizontal: 2
                                }}
                            />
                            <AntDesign
                                name="star"
                                style={{
                                    color: ratingAvgratingAvg >= 4 ? Colors.secondary : Colors.shade,
                                    fontSize: 18,
                                    marginHorizontal: 2
                                }}
                            />
                            <AntDesign
                                name="star"
                                style={{
                                    color: ratingAvgratingAvg >= 5 ? Colors.secondary : Colors.shade,
                                    fontSize: 18,
                                    marginHorizontal: 2
                                }}
                            />
                            <Text style={{ fontSize: 12 }}>({getReviews.data.length})
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.timeView}>
                        <Text style={{ fontFamily: "WorkSans-SemiBold", color: Colors.fontClr }}>Avg. response time
                    </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>{avgResponseTime ? avgResponseTimeMinuts : "1 hour"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.countryView}>
                        <Text style={{ fontFamily: "WorkSans-SemiBold", color: Colors.fontClr }}>Country
                    </Text>
                        <View
                            style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 12 }}>{recipientcountry}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.reviewMsgView}>
                    <TouchableOpacity
                        onPress={() => Actions.ReviewScreen({
                            recipientUserId,
                            proImg,
                            avatar_url,
                            first_name,
                            recipientname,
                            id
                        })}
                        style={{
                            width: "75%",
                        }}>
                        <Text style={styles.reviewMsg}  >Please
                        <Text style={{ color: Colors.primary, textDecorationLine: "underline" }}> write a review
            </Text>
                     to give feeback about this profile </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground >
    )
};
const styles = StyleSheet.create({
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
    userName: {
        fontSize: 16,
        fontFamily: "WorkSans-SemiBold",
        color: Colors.fontClr,
        letterSpacing: 0.5
    },
    msg: {
        fontFamily: "WorkSans-Regular",
        fontSize: 14,
        letterSpacing: 0.5
    },
    reviewMsg: {
        textAlign: "center",
        marginVertical: 20,
        fontFamily: "WorkSans-Regular",
        fontSize: 14,
        letterSpacing: 1
    },
    reviewView: {
        flex: 3.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    reviewMsgView: {
        justifyContent: 'center',
        height: flex1 * 1,
        // flex: 3.8,
        flexDirection: "row"
    },
    timeView: {
        flex: 3.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    countryView: {
        flex: 3.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

});
const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    freePotatoes: root.freePotatoes,
    getReviews: root.getReviews
})
const mapDispatchToProp = (dispatch) => ({
    _getReviews: (currentUser, recipientUserId, id) => {
        dispatch(_getReviews(currentUser, recipientUserId, id));
    },
})
export default connect(mapStateToProp, mapDispatchToProp)(Recipient);