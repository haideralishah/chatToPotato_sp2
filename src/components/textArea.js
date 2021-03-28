import Colors from "../common/Colors"
import React,
{
    useState
} from "react";
import {
    TextInput,
    StyleSheet
} from 'react-native';
const TextArea = ({ item, marginTop, _func }) => {
    const [form, onChangeText] = useState();
    return (
        <TextInput
            style={
                [styles.TextAreaStyle,
                { marginTop: marginTop, height: item.height, }
                ]}
            multiline={true}
            onChangeText={text => {
                _func(text, item.label)
                onChangeText(text)
            }}
            value={form}
        />

    );
}

const styles = StyleSheet.create({
    TextAreaStyle: {
        borderWidth: 1,
        color: Colors.fontClr,
        borderColor: Colors.shade,
        textAlignVertical: "top",
        fontSize: 16,
        width: "100%",
        borderWidth: 1,
        backgroundColor: Colors.white,
        padding: 10
    }
});
export default TextArea;