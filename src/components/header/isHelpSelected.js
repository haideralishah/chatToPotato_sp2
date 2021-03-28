import React from "react";
import Colors from '../../common/Colors';
import AntDesign from "react-native-vector-icons/AntDesign"
import { Actions } from "react-native-router-flux";
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';

const IsHelpSelected = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontFamily: "WorkSans-SemiBold" }}>I can help in</Text>
            <TouchableOpacity
                onPress={() => Actions.pop()} >
                    <AntDesign
                        name="close"
                        style={{ fontSize: 35, color: Colors.shade }}
                    />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
});

export default IsHelpSelected;