import React from "react";
import Colors from '../../common/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Actions } from "react-native-router-flux";
import FastImage from 'react-native-fast-image';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

const IsReadyHeader = ({
    MidIcon,
    goBack
}) => {
    return (
        <View style={[styles.TitleDiv]}>
            <View style={{ flex: 1.7, alignItems: "center", justifyContent: "center" }}>
                {goBack &&
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <AntDesign name="arrowleft" style={{ color: Colors.fontClr, fontSize: 30 }} />
                    </TouchableOpacity>
                }
            </View>
            < View style={{ width: '100%', alignItems: "center", justifyContent: "center" }}>
                <View style={styles.MidIcon}>
                    < FastImage
                        style={{ height: 45, width: 55 }}
                        source={MidIcon}
                        resizeMode="contain"
                    />
                    <Text style={styles.ChatToPotato}>Chat to a Potato</Text>
                </View>
            </View>
            <View style={{ flex: 1.7, alignItems: "center", justifyContent: "center", }}>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    TitleDiv: { flexDirection: "row" },
    MidIcon: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: '60%',
        alignItems: "center"
    },
    ChatToPotato: {
        fontFamily: "WorkSans-Bold",
        fontSize: 20,
        letterSpacing: 0.51,
        color: Colors.fontClr
    },
});

export default IsReadyHeader;