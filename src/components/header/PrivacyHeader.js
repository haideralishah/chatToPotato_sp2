import React from "react";
import Colors from '../../common/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Actions } from "react-native-router-flux";
import FastImage from 'react-native-fast-image'
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

const PrivacyHeader = ({
    MidIcon,
    goBack
}) => {
    return (
        <View style={[styles.TitleDiv]}>
            <View style={{ flex: 1.7, alignItems: "center", justifyContent: "center" }}>
                {goBack &&
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <AntDesign name="arrowleft" style={{ color: Colors.fontClr, fontSize: 28 }} />
                    </TouchableOpacity>
                }
            </View>
            < View style={{ flex: 8.3, flexDirection: 'row', alignItems: "center" }}>
                < FastImage
                    style={{ height: 45, width: 45 }}
                    source={MidIcon}
                    resizeMode="contain"
                />
                <Text style={styles.chatToPotato}>Chat to Potato</Text>
            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    TitleDiv: {
        flexDirection: "row",
        height: 100,
    },
    chatToPotato: {
        marginHorizontal: 10,
        fontSize: 16,
        letterSpacing: 0.41,
        fontFamily: "WorkSans-Regular"
    },
});
export default PrivacyHeader;