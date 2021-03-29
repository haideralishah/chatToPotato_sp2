import FontAwesome from "react-native-vector-icons/FontAwesome"
import FastImage from 'react-native-fast-image';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Colors from '../common/Colors';
import {
    _getChatIdentifier
} from "../store/action/action"
import {
    connect
} from 'react-redux';
import React,
{
    useState,
    useEffect
} from "react";
import { 
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
const PotatoCart = ({ potato,
    radio,
    currentUser,
    _getChatIdentifier, 
    blockStatus,
}) => { 
    const [ratingAvgratingAvg, setratingAvgratingAvg] = useState("");
    const [numberOfReviews, setnumberOfReviews] = useState(0);
    useEffect(() => {
        if (potato.reviews.length > 0) {
            class shopRatingCollection extends Array {
                sum(key) {
                    return this.reduce((a, b) => Number(a) + Number((b[key] || 0)), 0);
                }
            }
            const traveler = new shopRatingCollection(...potato.reviews);
            let sumOfRating = traveler.sum("rating");
            setnumberOfReviews(potato.reviews.length)
            setratingAvgratingAvg(sumOfRating / potato.reviews.length);
        }
    }, [])
    const {
        first_name,
        last_name,
        story,
        can_help_in,
        helpful_moto,
        struggles,
        current_problem,
        id,
        status,
        avatar_url,
    } = potato;
    console.log(potato,"12345678")
    return (
        <View style={styles.cartContainer}>
            <View style={styles.cartBorder}>
                <View style={{ flex: 4.8, flexDirection: "row" }}>
                    <View style={{ flex: 2.2, justifyContent: "center", }}>
                        <View style={{ height: 60, width: 60, borderRadius: 30, overflow: "hidden" }}>
                            < FastImage
                                style={{ height: "100%", width: "100%", }}
                                source={{ uri: avatar_url }}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={{ flex: 5, justifyContent: "center", }}>
                        <Text
                            style={styles.userName}>{`${first_name} ${last_name}`}
                        </Text>
                        <Text
                            style={styles.story}>{story}
                        </Text>
                        <View style={{ flexDirection: "row", }}>
                            <View style={{ flex: 4, flexDirection: "row" }}>
                                {ratingAvgratingAvg >= 1 ?
                                    <FontAwesome
                                        name="star"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    /> :
                                    <FontAwesome
                                        name="star-o"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    />
                                }
                                {ratingAvgratingAvg >= 2 ?
                                    <FontAwesome
                                        name="star"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    /> :
                                    <FontAwesome
                                        name="star-o"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    />
                                }
                                {ratingAvgratingAvg >= 3 ?
                                    <FontAwesome
                                        name="star"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    /> :
                                    <FontAwesome
                                        name="star-o"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    />
                                }
                                {ratingAvgratingAvg >= 4 ?
                                    <FontAwesome
                                        name="star"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    /> :
                                    <FontAwesome
                                        name="star-o"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    />
                                }
                                {ratingAvgratingAvg >= 5 ?
                                    <FontAwesome
                                        name="star"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    /> :
                                    <FontAwesome
                                        name="star-o"
                                        style={{ color: Colors.secondary, fontSize: 13 }}
                                    />
                                }
                            </View>
                            <View style={{ flex: 6, }}>
                                <Text
                                    style={styles.reviewCount}>{numberOfReviews > 0 ? "(" + numberOfReviews + ")" : "no reviews yet"}
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 2.8, justifyContent: "space-evenly", alignItems: "flex-end" }}>
                        <TouchableOpacity
                            onPress={() => _getChatIdentifier(currentUser,
                                id,
                                first_name,
                                last_name,
                                blockStatus,
                                avatar_url,
                                status,
                                story)}
                            style={styles.chatBtn}>
                            <Text
                                style={styles.chatNow}>Chat now
                             </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Report}>
                            <FontAwesome5
                                name={"flag"}
                                size={9}
                                style={{ color: Colors.fontClr, marginRight: 5 }}
                            />
                            <Text
                                style={{ fontSize: 9, fontFamily: "WorkSans-Regular", color: Colors.fontClr }}>Report
                             </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    < FastImage
                        style={{ height: 3, width: "100%", }}
                        source={require("../assets/dashed.png")}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ flex: 5.2, }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            {radio === "I need help" ?
                                can_help_in.map((data, index) => {
                                    return (
                                        index < 3 &&
                                        <TouchableOpacity key={index + Date.now().toString()}
                                            style={[styles.item, {
                                                backgroundColor: "#E4F1FF"
                                            }]}>
                                            <Text style={[styles.title, {
                                                color: "#629FE3"
                                            }]} >{data}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                                :
                                struggles.map((data, index) => {
                                    return (
                                        index < 3 &&
                                        <TouchableOpacity key={index + Date.now().toString()}
                                            style={[styles.item, {
                                                backgroundColor: "#FFE2CA"
                                            }]}>
                                            <Text style={[styles.title, {
                                                color: "#FE9640"
                                            }]} >{data}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                        <View style={{ backgroundColor: "orange", justifyContent: "center", alignItems: "center" }}>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text
                            style={styles.moto}>{radio === "I need help" ? helpful_moto : current_problem}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cartContainer: {
        height: 220,
        justifyContent: "flex-end",
    },
    cartBorder: {
        borderColor: Colors.shade,
        borderWidth: 1,
        height: 200, 
        borderRadius: Platform.OS==="ios"?10: 0,
        paddingHorizontal: "3%",
        backgroundColor: Colors.white,
    },
    userName: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 14,
        letterSpacing: 0.31,
        color: Colors.fontClr,
    },
    story: {
        fontFamily: "WorkSans-Regular",
        fontSize: 12,
        letterSpacing: 0.31,
        marginTop: 3
    },
    reviewCount: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 9,
        letterSpacing: 0.23,
        color: Colors.fontClr,
    },
    chatBtn: {
        backgroundColor: Colors.green,
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: "90%",
        // borderRadius: 2,
    borderRadius: Platform.OS==="ios"?15: 2,

    },
    chatNow: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: 0.31,
        color: Colors.white,
    },
    Report: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    others: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: 0.31,
        color: Colors.primary
    },
    item: { 
        backgroundColor: "#E4F1FF",
        justifyContent: "center",
        alignItems: "center", 
    borderRadius: Platform.OS==="ios"?10: 3,
padding:"5%",
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: 0.31,  
    },
    moto: {
        fontFamily: "WorkSans-Regular",
        fontSize: 12,
        letterSpacing: 0.31,
        color: Colors.fontClr,
        width: "90%"
    },
});
const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    getReviews: root.getReviews
})
const mapDispatchToProp = (dispatch) => ({
    _getChatIdentifier: (currentUser,
        id,
        first_name,
        last_name,
        blockStatus,
        avatar_url,
        status,
        story) => {
        dispatch(_getChatIdentifier(currentUser,
            id,
            first_name,
            last_name,
            blockStatus,
            avatar_url,
            status,
            story));
    },

})
export default connect(mapStateToProp, mapDispatchToProp)(PotatoCart);