import React from "react";
import Colors from '../../common/Colors';
import Octicons from "react-native-vector-icons/Octicons"
import FastImage from 'react-native-fast-image';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';
const MsgScreen = ({
    heading
}) => {
    return (
        <View style={{ flex: 1.3, flexDirection: "row" }}>
            <View style={{ flex: 2.2, justifyContent: "center", alignItems: "center" }}>
                < FastImage
                    style={{ height: 35, width: 50, }}
                    source={require("../../assets/Potato.png")}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 6.3, justifyContent: "center" }}>
                <Text style={styles.heading}>{heading}</Text>
            </View>
            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity>
                    <Octicons
                        name="search"
                        style={{ fontSize: 20, color: Colors.fontClr, }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "WorkSans-Bold",
        fontSize: 20,
        letterSpacing: 0.51,
        color: Colors.fontClr,
    }
});

export default MsgScreen;