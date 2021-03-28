import Colors from '../common/Colors';
import Entypo from "react-native-vector-icons/Entypo";
import { WebView } from 'react-native-webview';
import { Actions } from "react-native-router-flux";
import React,
{
    useState
} from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Switch,
    StyleSheet
} from 'react-native';
const Privacy = ({ title }) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.item}>
            <TouchableOpacity
                style={{ justifyContent: "center", width: "85%", height: "100%" }}
                onPress={() => {
                    {
                        title == "Privacy Policy" &&
                            Actions.PrivacySceen()
                    }
                    {
                        title == "Trems & Conditions" &&
                            Actions.TermsAndCondition()
                    }
                }}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.arrow}>
                {title != "Notificaions" ?
                    <Entypo
                        name="chevron-small-right"
                        style={{ fontSize: 35, color: Colors.fontClr }}
                    /> :
                    <View style={styles.switchBtn} >
                        <Switch
                            trackColor={{ false: Colors.white, true: Colors.white }}
                            thumbColor={isEnabled ? Colors.green : Colors.shade}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            style={{ transform: [{ scaleX: .8 }, { scaleY: .7 }] }}
                            value={isEnabled}
                        />
                    </View>
                }
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 61,
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.shade,
    },
    title: {
        fontSize: 16,
        letterSpacing: 0.41,
        fontFamily: "WorkSans-Regular"
    },
    arrow: {
        justifyContent: "center",
        alignItems: "flex-end",
        width: "15%"
    },
    switchBtn: {
        borderWidth: 1,
        borderColor: Colors.shade,
        height: 20,
        width: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    }
});
export default Privacy;