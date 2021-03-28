import React from "react";
import Colors from '../../common/Colors';
import Ionicons from "react-native-vector-icons/Ionicons"
import FastImage from 'react-native-fast-image';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

const AppHeader = ({
    SearchIcon,
    heading,
    firstImg,
    secondImg,
    iconName,
    _func,

}) => {
    return (
        <View style={{ flex: 1.3, flexDirection: "row" }}>
            <View style={{ flex: 2.2, justifyContent: "center", alignItems: "center" }}>
                < FastImage
                    style={{ height: 35, width: 50, }}
                    source={firstImg}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 5.6, justifyContent: "center" }}>
                <Text style={styles.heading}>{heading}</Text>
            </View>
            <View style={{ flex: 2.2, justifyContent: "center", alignItems: "center" }}>
                {SearchIcon ?
                    <TouchableOpacity onPress={_func}>
                        <Ionicons
                            name={iconName}
                            style={{ fontSize: 25, color: Colors.fontClr, }} />
                    </TouchableOpacity> :
                    <TouchableOpacity>
                        < FastImage
                            style={{ height: 25, width: 30, }}
                            source={secondImg}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    heading: {
        fontFamily: "WorkSans-Bold",
        fontSize: 20,
        letterSpacing: 0.51,
        color: Colors.fontClr,
    }
});
export default AppHeader;