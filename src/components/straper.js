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
const Straper = ({ item }) => {
    const [form, onChangeText] = useState();
    return (
        <View
            style={{ width: "100%", height: 10, flexDirection: "row" ,marginTop:20}}>
            <View style={{ flex: 1, marginHorizontal:2, backgroundColor: item >= 1 ? Colors.primary : "#cfe1f7" }}></View>
            <View style={{ flex: 1, marginHorizontal:2, backgroundColor: item >= 2 ? Colors.primary : "#cfe1f7" }}></View>
            <View style={{ flex: 1, marginHorizontal:2, backgroundColor: item >= 3 ? Colors.primary : "#cfe1f7" }}></View>
            <View style={{ flex: 1, marginHorizontal:2, backgroundColor: item >= 4 ? Colors.primary : "#cfe1f7" }}></View>
            <View style={{ flex: 1, marginHorizontal:2, backgroundColor: item >= 5 ? Colors.primary : "#cfe1f7" }}></View>
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

export default Straper;