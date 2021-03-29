import React from 'react'
import flags from '../services/resources/flags/index'
import { Text, View, TouchableOpacity, } from 'react-native'
import FastImage from "react-native-fast-image";
import FlagImgs from '../components/flagsImages'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../common/Colors';
let countrysList = require('../services/resources/countries.json');
export default class ClientReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: 0
        };
    }
    UNSAFE_componentWillMount() {
        const { dummyData } = this.props
        if (dummyData && dummyData[0] && dummyData[0].rating) {
            this.setState({
                star: dummyData[0].rating
            })
        }
    }
    render() {
        let revipentCountry;
        let flageImgPath;
        let country;
        const { dummyData, proImg, } = this.props
        console.log(proImg, "proImg")
        console.log(dummyData.data.length, "dummyData")
        if (dummyData.data.length > 0) {
            {
                dummyData && dummyData.data && dummyData.data.length >= 0 && dummyData.data.map((a, i) => {
                    revipentCountry = a.reviewer.country
                })
            }
            countrysList.map((data) => {
                country = data.name.slice(0, revipentCountry.length)
                if (country == revipentCountry) {
                    flageImgPath = data.iso2;
                }
            })
        }
        const { star } = this.state
        return (
            <View style={{ flex: 1 }}>
                {dummyData && dummyData.data && dummyData.data.length > 0 && dummyData.data.map((a, i) => {
                    return (
                        <View style={{
                            flexDirection: "row",
                            marginTop: "10%",
                            borderBottomWidth: 2,
                            borderBottomColor: Colors.shade,
                            paddingBottom: 20
                        }}>
                            <View style={{ flex: 2.5 }}>
                                {proImg ?
                                    <View style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 28,
                                        overflow: "hidden",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        < FastImage
                                            style={{ height: "100%", width: "100%", }}
                                            source={{ uri: proImg }}
                                            resizeMode="contain"
                                        />
                                    </View> :
                                    <View style={{
                                        backgroundColor: "#BC1CEA",
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 20, color: Colors.white }}>
                                            {
                                                a.reviewer.first_name.substring(0, 1)
                                            }
                                        </Text>
                                    </View>
                                }
                            </View>
                            <View style={{ flex: 5 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 6 }}>
                                        <Text style={{ color: Colors.fontClr, fontWeight: "bold" }}>
                                            {
                                                a.reviewer.first_name + " " + a.reviewer.last_name
                                            }
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", paddingTop: 5, alignItems: "center" }}>
                                    <FlagImgs height={12} width={20} borderRadius={0} marginTop={0} imgPath={flags[flageImgPath]} />
                                    <Text style={{ fontSize: 15, marginLeft: 5, color: "#d6d6d6", fontFamily: "WorkSans-SemiBold" }}>
                                        {
                                            a.reviewer.country
                                        }</Text>
                                </View>
                                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <AntDesign
                                            name="star"
                                            style={{ color: a.rating >= 1 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                                        />
                                        <AntDesign
                                            name="star"
                                            style={{ color: a.rating >= 2 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                                        />
                                        <AntDesign
                                            name="star"
                                            style={{ color: a.rating >= 3 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                                        />
                                        <AntDesign
                                            name="star"
                                            style={{ color: a.rating >= 4 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                                        />
                                        <AntDesign
                                            name="star"
                                            style={{ color: a.rating >= 5 ? Colors.secondary : Colors.shade, fontSize: 15 }}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginVertical: "5%" }}>
                                    <Text style={{ fontSize: 15, width: "85%", color: Colors.fontClr }}>
                                        {
                                            a.content
                                        }
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Text style={{ fontSize: 13, fontFamily: "WorkSans-SemiBold", color: "#d6d6d6" }}>
                                        {
                                            "Publish " + a.created_at.split("T")[0].trim()
                                        }
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flex: 2.5, alignItems: "center" }}>
                                <View style={{ flexDirection: "row", marginTop: 5 }}>
                                    <TouchableOpacity style={{ flexDirection: "row" }}>
                                        <AntDesign
                                            name="like1"
                                            style={{ color: Colors.fontClr, fontSize: 25 }}
                                        />
                                        <Text style={{ marginLeft: 5 }}>{a.likes_count}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: "10%" }}>
                                        <AntDesign
                                            name="dislike1"
                                            style={{ transform: [{ rotateY: '180deg' }], color: Colors.fontClr, fontSize: 25 }}
                                        />
                                        <Text style={{ marginLeft: 5 }}>{a.dislikes_count}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}
