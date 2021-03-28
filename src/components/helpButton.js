import Colors from "../common/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import React,
{
    useState
} from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';
const HelpButtons = (
    {
        title,
        index,
        unSelectedBgColor,
        checkColor,
        selectedBgColor,
        unSelectedColor,
        selectedColor,
        _func
    }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <TouchableOpacity onPress={() => {
            setIsSelected(!isSelected);
            _func(title, index);
        }}
            style={[styles.item,
            { backgroundColor: isSelected ? selectedBgColor : unSelectedBgColor, }
            ]}>
            {isSelected &&
                <View style={styles.checkView}>
                    <View style={styles.checkFont}>
                        <Ionicons
                            name="checkmark-sharp"
                            style={{ fontSize: 13, color: checkColor }}
                        />
                    </View>
                </View>
            }
            <Text style={[styles.title,
            { color: isSelected ? selectedColor : unSelectedColor }
            ]} >{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: 0.31, margin: "6%"
    },
    checkFont: {
        height: 14,
        width: 14,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    checkView: {
        height: '100%',
        padding: 3,
        position: "absolute",
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-start"
    }
});

export default HelpButtons;