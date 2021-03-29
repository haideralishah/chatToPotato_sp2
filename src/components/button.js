import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Text,Platform
} from 'react-native';
import Colors from '../common/Colors';

const Button = (
    { backgroundColor,
        key,
        marginTop,
        width,
        _func,
        name }) => {
    return (
        <TouchableOpacity onPress={_func}
            activeOpacity={0.8}
            style={
                [styles.buttonDiv,
                {
                    backgroundColor: backgroundColor || Colors.primary,
                    marginTop: marginTop,
                    width: width
                }
                ]}>
            <Text style={[styles.buttonText,]}>{name}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonText: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 16,
        color: '#ffffff',
        letterSpacing: 1
    },
    buttonDiv: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Platform.OS==="ios"?10: 3,
        height: 50
    }
});

export default Button;