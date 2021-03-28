import React from "react";
import { WebView } from 'react-native-webview';
import {
    View,
    StyleSheet
} from 'react-native';
const PrivacyScreen = ({ }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "red" }}>
            <WebView source={{ uri: 'https://chattoapotato.com/privacy-policy' }} />
        </View>
    )
};
const styles = StyleSheet.create({
});
export default PrivacyScreen;