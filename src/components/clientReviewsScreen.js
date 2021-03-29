import AntDesign from "react-native-vector-icons/AntDesign"
import Colors from '../common/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import ClientReview from "./ClientReview"
import {
    connect
} from 'react-redux';
import {
    _logout
} from "../store/action/action";
import React, {
    useEffect,
    useState
} from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const height = Dimensions.get('window').height - 26;
const flex1 = height / 10;
const ClientReviewsScreen = ({ dummyData,
    _func,
    proImg,
    avatar_url }) => {
    const [ratingAvgratingAvg, setratingAvgratingAvg] = useState("");
    useEffect(() => {
        if (dummyData.data.length >= 0) {
            class shopRatingCollection extends Array {
                sum(key) {
                    return this.reduce((a, b) => Number(a) + Number((b[key] || 0)), 0);
                }
            }
            const traveler = new shopRatingCollection(...dummyData.data);
            let sumOfRating = traveler.sum("rating");
            setratingAvgratingAvg(sumOfRating / dummyData.data.length);
        }
    }, [])
    return (
        <View style={styles.logoutAbsolute}>
            <View style={styles.notification}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={_func}
                        style={{ alignItems: "flex-end" }}>
                        <Entypo name="cross" style={{ fontSize: 30, color: Colors.shade }}
                        />
                    </TouchableOpacity>
                    <View style={{ height: flex1 * 1.1, borderBottomWidth: 3, borderBottomColor: Colors.shade }}>
                        <Text
                            style={{ fontSize: 20, color: Colors.fontClr, fontFamily: "WorkSans-SemiBold" }}>Review as a helper
                        </Text>
                        <View style={{ flexDirection: "row", flex: 1 }}>
                            <AntDesign
                                name="star"
                                style={{ color: ratingAvgratingAvg >= 1 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                            />
                            <AntDesign
                                name="star"
                                style={{ color: ratingAvgratingAvg >= 2 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                            />
                            <AntDesign
                                name="star"
                                style={{ color: ratingAvgratingAvg >= 3 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                            />
                            <AntDesign
                                name="star"
                                style={{ color: ratingAvgratingAvg >= 4 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                            />
                            <AntDesign
                                name="star"
                                style={{ color: ratingAvgratingAvg >= 5 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                            />
                            <Text style={{ marginLeft: 5, color: Colors.fontClr, fontFamily: "WorkSans-SemiBold" }}>
                                {Math.floor(ratingAvgratingAvg ? ratingAvgratingAvg : 0) + " "}({dummyData.data.length} reviews)
                                </Text>
                        </View>
                    </View>
                    <ClientReview dummyData={dummyData} proImg={proImg} avatar_url={avatar_url} />
                </ScrollView>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    logoutAbsolute: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        position: "absolute",
        alignItems: 'center',
        zIndex: 3,
        backgroundColor: Colors.LogOutDiv
    },
    notification: {
        height: "100%",
        padding: 20,
        width: "100%",
        backgroundColor: Colors.white
    },
});
const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    isLoader: root.isLoader,
    isError: root.isError,
})
const mapDispatchToProp = (dispatch) => ({
    _logout: (currentUser) => {
        dispatch(_logout(currentUser));
    },
})
export default connect(mapStateToProp, mapDispatchToProp)(ClientReviewsScreen);