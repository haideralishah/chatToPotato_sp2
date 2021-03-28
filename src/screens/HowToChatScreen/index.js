import React from "react";
import { WebView } from 'react-native-webview';
import {
    View,
    StyleSheet
} from 'react-native';
const HowToChatScreen = ({ }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "red" }}>
            <WebView source={{ uri: 'https://chattoapotato.com/how-to-chat' }} />
        </View>
    )
};
export default HowToChatScreen;