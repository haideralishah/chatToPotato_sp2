import React from "react";
import { WebView } from 'react-native-webview';
import {
    View,
    StyleSheet
} from 'react-native';
const TermsAndCondition = ({ }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "red" }}>
            <WebView source={{ uri: 'https://chattoapotato.com/terms-and-conditions' }} />
        </View>
    )
};
const styles = StyleSheet.create({
});
export default TermsAndCondition;
