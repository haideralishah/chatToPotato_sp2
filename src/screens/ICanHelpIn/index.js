import { connect } from 'react-redux';
import Colors from "../../common/Colors";
import HelpButtons from "../../components/helpButton";
import Header from '../../components/header/isProfile';
import Straper from"../../components/straper"
import {
    _gettopics,
    _CreateProfile
} from "../../store/action/action";
import Button from "../../components/button";
import {
    Actions,
} from "react-native-router-flux";
import { _error } from "../../store/action/action";
import React, {
    useState,
    useEffect
} from "react";
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
const windowHeight = Dimensions.get('window').height - (Platform.OS==="ios"?0:24);
const ICanHelpIn = ({ country, StoryTitle, isLoader, isError, edit,
    _CreateProfile
    , currentUser, topicList, _error, _gettopics }) => {
    const [Help, setHelp] = useState([])
    useEffect(() => {
        _gettopics(currentUser)
    }, [])
    return (
        <ScrollView >
            <ImageBackground
                style={styles.MainView}
                source={require("../../assets/bevelBG.png")}
            >
                {/* <HEADER> */}
                <View style={{ height: "17%" }}>
                {Platform.OS === "ios" &&
                        <Straper item={2} />
                    }
                    <Header
                        isProfile={true}
                        MidIcon={require("../../assets/PotatoSp.png")}
                        goBack={true} />
                </View>
                {/* </HEADER> */}
                {/* <BODY> */}
                <View style={{ height: "63%", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, }}>
                    <View style={{ width: "90%", height: "100%", alignItems: "center" }}>
                        <View style={{ width: "95%" }}>
                            <Text
                                style={styles.title}>I can help in…
                            </Text>
                            <Text
                                style={styles.info}>You can select more than one option.
                            </Text>
                        </View>
                        <ScrollView
                            contentContainerStyle={{ alignItems: "center" }}
                            style={styles.body}>
                            <View style={styles.helpButtons}>
                                {topicList.length > 0 && topicList.map((data, index) => {
                                    return (
                                        <HelpButtons key={index}
                                            index={index} title={data}
                                            checkColor={Colors.primary}
                                            unSelectedColor={Colors.primary}
                                            selectedColor={Colors.white}
                                            _func={(title, i) => {
                                                var foundHelp = Help.indexOf(title);
                                                if (foundHelp == -1) {
                                                    let ICanHelpInClone = Help;
                                                    ICanHelpInClone.push(title);
                                                    setHelp(ICanHelpInClone);
                                                }
                                                else {
                                                    let ICanHelpInClone = Help;
                                                    ICanHelpInClone.splice(foundHelp, 1);
                                                    setHelp(ICanHelpInClone);
                                                }
                                            }}
                                            selectedBgColor={Colors.primary}
                                            unSelectedBgColor="rgba(228, 241, 255,1)" />)
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                {/* <BODY> */}
                {/* </Footer> */}
                <View style={{ justifyContent: "center", alignItems: "center", height: "20%" }}>
                    <View style={{ width: "85%" }}>
                        {isLoader ?
                            <ActivityIndicator style={{ marginTop: "10%" }} size="small" color={Colors.primary} /> :
                            <Button name={edit ? "Save" : "Continue"}
                                _func={() => {
                                    // Help.length ?
                                    if (edit) {
                                        Actions.Profile({ StoryTitle, Help, country })
                                        _CreateProfile({
                                            edit,
                                            Help,

                                        }, currentUser)
                                    } else {
                                        country ?
                                            Actions.MyStruggles({ StoryTitle, Help, country }) :
                                            Actions.MyStruggles({ StoryTitle, Help })
                                    }
                                    // :
                                    // _error("Selection is required")
                                }}
                                backgroundColor={Colors.secondary} fontSize={13} />
                        }
                        {isError !== "" &&
                            <Text
                                style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
                            </Text>}
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
    title: {
        fontFamily: "WorkSans-Bold",
        fontSize: 24,
        letterSpacing: 1.54,
        marginVertical: "1%",
        color: Colors.fontClr
    },
    info: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: 0.31, color: Colors.fontClr
    },
    body: {
        backgroundColor: Colors.white,
        borderRadius: Platform.OS === "ios" ? 10:3, 
        width: "100%",
        marginTop: "6%",
        borderWidth: 1,
         borderColor: Colors.shade
    },
    helpButtons: {
        marginVertical: "5%",
        width: "95%",
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
const mapStateToProp = ({ root }) => ({
    isLoader: root.isLoader,
    isError: root.isError,
    currentUser: root.currentUser,
    topicList: root.topicList,

})
const mapDispatchToProp = (dispatch) => ({
    _error: (errMsg) => {
        dispatch(_error(errMsg));
    },
    _gettopics: (currentUser) => {
        dispatch(_gettopics(currentUser));

    },
    _CreateProfile: (profile, currentUser) => dispatch(_CreateProfile(profile, currentUser)),

})
export default connect(mapStateToProp, mapDispatchToProp)(ICanHelpIn);