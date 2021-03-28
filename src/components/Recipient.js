import { View } from "react-native-animatable";
import Colors from "../common/Colors"
import React,
{
    useState
} from "react";
import {
    TextInput,
    StyleSheet
} from 'react-native';
const Recipients = ({ item, marginTop, _func }) => {
    const [form, onChangeText] = useState();
    return (
        <View
            style={{ width: "20%", height: "20%", backgroundColor: "red" }}>
        </View>

    );
}
const styles = StyleSheet.create({
    // TextAreaStyle: {
    //     borderWidth: 1,
    //     color: Colors.fontClr,
    //     borderColor: Colors.shade,
    //     textAlignVertical: "top",
    //     fontSize: 16,
    //     width: "100%",
    //     borderWidth: 1,
    //     backgroundColor: Colors.white,
    //     padding: 10
    // }
});

export default Recipients;