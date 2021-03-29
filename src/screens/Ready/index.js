import React from "react";
import Colors from "../../common/Colors";
import { Actions } from 'react-native-router-flux';
import { _getpotatoes } from '../../store/action/action';
import Header from '../../components/header/isReady';
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image'
import Button from "../../components/button";
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground
} from 'react-native';
const windowHeight = Dimensions.get('window').height - 24;
const Ready = ({ resp, _getpotatoes }) => {
    return (
        <ScrollView >
            <ImageBackground
                style={styles.MainView}
                source={require("../../assets/bevelBG.png")}
            >
                {/* <HEADER> */}
                <View style={{ height: "17%" }}>
                    <Header
                        isProfile={true}
                        MidIcon={require("../../assets/PotatoSp.png")}
                        goBack={true} />
                </View>
                {/* </HEADER> */}
                {/* <body> */}
                <View style={{ height: "63%" }}>
                    <View style={{ height: "65%", alignItems: 'center', justifyContent: "center" }}>
                        < FastImage
                            style={{ height: "95%", width: "95%", }}
                            source={require("../../assets/ready.png")}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ height: "35%", alignItems: "center" }}>
                        <View style={styles.MsgView}>
                            <Text
                                style={styles.readyMsg}>You are ready to go!
                             </Text>
                            <Text
                                style={styles.ThanksMsg}>Thanks for taking your time to create account with us. Now let’s explore the app and get fit.
                            </Text>
                        </View>
                    </View>
                </View>
                {/* </body> */}
                {/* </Footer> */}
                <View style={{ justifyContent: "center", alignItems: "center", height: "20%" }}>
                    <View style={{ width: "85%" }}>
                        <Button
                            name="Let’s go"
                            backgroundColor={Colors.secondary}
                            fontSize={13} 
                            _func={() => {
                                _getpotatoes(resp)
                            }} />
                    </View>
                </View>
                {/* </Footer> */}
            </ImageBackground >
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    MainView: {
        width: "100%",
        height: windowHeight,
    },
    MsgView: {
        justifyContent: "space-evenly",
        height: "85%",
        width: "70%",
        alignItems: "center"
    },
    readyMsg: {
        fontFamily: "WorkSans-Bold",
        fontSize: 20,
        letterSpacing: -0.17,
        color: Colors.fontClr,
    },
    ThanksMsg: {
        textAlign: "center",
        color: Colors.fontClr,
        fontFamily: "WorkSans-SemiBold",
        fontSize: 14,
        letterSpacing: -0.12,
    }
});
const mapStateToProp = ({ root }) => ({
})
const mapDispatchToProp = (dispatch) => ({
    _getpotatoes: (currentUser) => {
        dispatch(_getpotatoes(currentUser));
    },
})
export default connect(mapStateToProp, mapDispatchToProp)(Ready);