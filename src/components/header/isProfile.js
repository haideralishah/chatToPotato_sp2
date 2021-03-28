import React from "react";
import Colors from '../../common/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Actions } from "react-native-router-flux";
import FastImage from 'react-native-fast-image'
import {
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

const IsProfileHeader = ({
    MidIcon,
    goBack
}) => {
    return (
        <View style={[styles.TitleDiv]}>
            <View style={{ flex: 1.7, alignItems: "center", justifyContent: "center" }}>
                {goBack &&
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <AntDesign
                            name="arrowleft"
                            style={{ color: Colors.fontClr, fontSize: 30 }}
                        />
                    </TouchableOpacity>
                }
            </View>
            < View style={styles.MidIcon}>
                < FastImage
                    style={{ height: 70, width: 80 }}
                    source={MidIcon}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 1.7, alignItems: "center", justifyContent: "center", }}>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    TitleDiv: {
        flexDirection: "row",
        height: 85,
    },
    MidIcon: {
        flex: 6.6,
        marginTop: "21.5%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
});

export default IsProfileHeader;