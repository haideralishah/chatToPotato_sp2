import FontAwesome from "react-native-vector-icons/FontAwesome"
import FastImage from 'react-native-fast-image';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import HelpButtons from "../components/helpButton"
import Colors from '../common/Colors';
import React,
{
    useState
} from "react";
import {
    FlatList,
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';


const PotatoCart = ({ potato, radio }) => {
    const {
        first_name,
        last_name,
        story,
        can_help_in,
        helpful_moto,
        struggles,
    } = potato;
    return (
        <View style={styles.cartContainer}>
            <View style={styles.cartBorder}>
                <View style={{ flex: 4.8, flexDirection: "row" }}>
                    <View style={{ flex: 2.2, justifyContent: "center", }}>
                        < FastImage
                            style={{ height: 60, width: 60, }}
                            source={require("../assets/profilePic.png")}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flex: 5, justifyContent: "center", }}>
                        <Text
                            style={styles.userName}>{`${first_name} ${last_name}`}
                        </Text>
                        <Text
                            style={styles.story}>{story}
                        </Text>
                        <View style={{ flexDirection: "row", }}>
                            <View style={{ flex: 4, }}>
                                <FlatList
                                    style={{ flexDirection: "row", }}
                                    horizontal={true}
                                    data={[1, 2, 3, 4, 5]}
                                    renderItem={({ item }) => (
                                        // rate.star >= item ?
                                        <FontAwesome
                                            name={"star-o"}
                                            size={13}
                                            style={{ color: "orange" }}
                                        />
                                        // : <FontAwesome name={"star-o"} size={17} style={{ color: "orange" }} />
                                    )}
                                    keyExtractor={item => item.toString()}
                                />
                            </View>
                            <View style={{ flex: 6, }}>
                                {/* <Text style={styles.reviewCount}>4.8(86 reviews)</Text> */}
                                <Text
                                    style={styles.reviewCount}>No reviews yet
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 2.8, justifyContent: "space-evenly", alignItems: "flex-end" }}>
                        <TouchableOpacity style={styles.chatBtn}>
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
                            {/* <Text style={styles.others}>+7 others</Text> */}
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text
                            style={styles.moto}>{helpful_moto}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cartContainer: {
        // backgroundColor: "red",
        height: 220,
        justifyContent: "flex-end",
    },
    cartBorder: {
        borderColor: Colors.shade,
        borderWidth: 1,
        height: 200, paddingHorizontal: "3%",
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
        borderRadius: 2,
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
        height: 40,
        backgroundColor: "#E4F1FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: 0.31, margin: "5%"
    },
    moto: {
        fontFamily: "WorkSans-Regular",
        fontSize: 12,
        letterSpacing: 0.31,
        color: Colors.fontClr,
        width: "90%"
    },
});
export default PotatoCart;