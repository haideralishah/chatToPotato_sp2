import { connect } from 'react-redux';
import Colors from "../../common/Colors";
import HelpButtons from "../../components/helpButton";
import Straper from"../../components/straper"
import { Actions } from "react-native-router-flux";
import Header from '../../components/header/isProfile';
import { _error, _CreateProfile } from '../../store/action/action';
import Button from "../../components/button";
import React, {
    useState
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
const windowHeight = Dimensions.get('window').height -(Platform.OS==="ios"?0:24);
const MyStruggles = ({ country, currentUser, _CreateProfile, StoryTitle, edit, Help, isLoader, isError, topicList, _error }) => {
    const [Struggles, setStruggles] = useState([])
    return (
        <ScrollView >
            <ImageBackground
                style={styles.MainView}
                source={require("../../assets/bevelBG.png")}
            >
                {/* <HEADER> */}
                <View style={{ height: "17%" }}>
                {Platform.OS === "ios" &&
                        <Straper item={3} />
                    }
                    <Header
                        isProfile={true}
                        MidIcon={require("../../assets/PotatoSp.png")}
                        goBack={true} />
                </View>
                {/* </HEADER> */}
                {/* <BODY> */}
                <View style={{ height: "63%", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, }}>
                    <View
                        style={{ width: "90%", height: "100%", alignItems: "center" }}>
                        <View style={{ width: "95%" }}>
                            <Text
                                style={styles.title}>My struggles…
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
                                        <HelpButtons
                                            key={index}
                                            index={index}
                                            title={data}
                                            _func={(title, i) => {
                                                var foundStruggles = Struggles.indexOf(title);
                                                if (foundStruggles == -1) {
                                                    let StrugglesClone = Struggles;
                                                    StrugglesClone.push(title);
                                                    setStruggles(StrugglesClone);
                                                }
                                                else {
                                                    let StrugglesClone = Struggles;
                                                    StrugglesClone.splice(foundStruggles, 1);
                                                    setStruggles(StrugglesClone);
                                                }
                                            }}
                                            checkColor={Colors.secondary}
                                            unSelectedColor={Colors.secondary}
                                            selectedColor={Colors.white}
                                            selectedBgColor={Colors.secondary}
                                            unSelectedBgColor="rgba(255, 238, 223,1)" />)
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
                            <ActivityIndicator
                                style={{ marginTop: "10%" }}
                                size="small"
                                color={Colors.primary} /> :
                            <Button
                                name={edit ? "Save" : "Continue"}
                                backgroundColor={Colors.secondary}
                                fontSize={13}
                                // _func={() => {
                                //     Help.length || Struggles.length ?
                                //         country ? Actions.TellUsMore({ StoryTitle, Help, Struggles, country }) :
                                //             Actions.TellUsMore({ StoryTitle, Help, Struggles }) :
                                //         _error("Selection is required")
                                // }}
                                _func={() => {
                                    if (edit) {
                                        Actions.Profile({ StoryTitle, Help, Struggles, country })
                                        _CreateProfile({
                                            edit,
                                            Struggles
                                        }, currentUser)
                                    } else {

                                        (Help.length || Struggles.length) ?
                                            (country ? Actions.TellUsMore({ StoryTitle, Help, Struggles, country }) :
                                                Actions.TellUsMore({ StoryTitle, Help, Struggles })) :
                                            (_error("Selection is required"))
                                    }



                                }}
                            />
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
    MainView: { width: "100%", height: windowHeight, },
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
        letterSpacing: 0.31,
        color: Colors.fontClr
    },
    body: {
        backgroundColor: Colors.white,
        width: "100%",
        marginTop: "6%",
        borderWidth: 1,
        borderRadius: 3,
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
    currentUser: root.currentUser,
    isError: root.isError,
    topicList: root.topicList,

})
const mapDispatchToProp = (dispatch) => ({
    _error: (errMsg) => {
        dispatch(_error(errMsg));
    },
    _CreateProfile: (profile, currentUser) => dispatch(_CreateProfile(profile, currentUser)),

})
export default connect(mapStateToProp, mapDispatchToProp)(MyStruggles);