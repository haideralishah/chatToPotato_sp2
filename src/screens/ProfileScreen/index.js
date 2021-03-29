import { connect } from 'react-redux';
import Colors from "../../common/Colors";
import InputForms from "../../components/input";
import Header from '../../components/header/isProfile';
import Button from "../../components/button";
import { _error } from "../../store/action/action";
import Entypo from "react-native-vector-icons/Entypo";
import Straper from "../../components/straper"
import { Actions } from "react-native-router-flux";
import React, {
    useState
} from "react";
import {
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
const windowHeight = Dimensions.get('window').height - (Platform.OS === "ios" ? 0 : 24);
const ProfileScreen = ({ isError, isLoader, _error, country }) => {
    const [StoryTitle, setStoryTitle] = useState("");
    return (
        <ScrollView >
            <ImageBackground
                style={styles.MainView}
                source={require("../../assets/bevelBG.png")}
            >
                {/* <HEADER> */}
                <View style={{ height: "17%" }}>
                    {Platform.OS === "ios" &&
                        <Straper item={1} />
                    }
                    <Header
                        isProfile={true}
                        MidIcon={require("../../assets/PotatoSp.png")}
                        goBack={true} />
                </View>
                {/* </HEADER> */}
                {/* <BODY> */}
                <View style={{ height: "63%", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, }}>
                    {/* <headerTitle> */}
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center' }}>
                        <Text
                            style={[styles.Title, { color: Colors.fontClr }]}>Welcome
                         </Text>
                        <Text
                            style={[styles.Title, { color: Colors.primary }]}> Haileegreen !
                         </Text>
                    </View>
                    {/* </headerTitle> */}
                    <View style={styles.MiddleView}>
                        <View style={styles.ProfileLogo}>
                            <Text
                                style={{ fontSize: 110, fontWeight: "bold", color: Colors.white }}>G
                            </Text>
                            <TouchableOpacity style={styles.CameraIcon}>
                                <View style={styles.Camera}>
                                    <Entypo
                                        name="camera"
                                        style={{ fontSize: 19, color: Colors.fontClr }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.ProfileTitle}>What’s your story?</Text>
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={{ width: "90%" }}>
                                <InputForms
                                    maxLength={30}
                                    SignInScreen={true}
                                    borderRadius={10}
                                    _func={(text) => setStoryTitle(text)}
                                    placeHolder="What’s your story in one line?"
                                />
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                    <Text
                                        style={styles.Info}>You always can change this later
                                    </Text>
                                    <Text
                                        style={styles.Info}>0/30 characters
                                    </Text>
                                </View>
                            </View>
                        </View>
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
                                name="Continue"
                                backgroundColor={Colors.secondary}
                                fontSize={13}
                                _func={() => {
                                    !StoryTitle ? _error("story is required") :
                                        country ?
                                            Actions.ICanHelpIn({ StoryTitle, country }) :
                                            Actions.ICanHelpIn({ StoryTitle })
                                }}

                            />}
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
    Title: {
        fontSize: 26,
        letterSpacing: 1.54,
        fontFamily: "WorkSans-Bold"
    },
    Info: {
        color: Colors.fontClr,
        marginTop: 3,
        fontSize: 10,
        letterSpacing: 0.2
    },
    ProfileLogo: {
        width: 140,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    MiddleView: {
        borderColor: Colors.shade,
        borderWidth: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: Platform.OS === "ios" ? 10 : 3,
        width: "95%",
        height: "85%",
        backgroundColor: Colors.white
    },
    CameraIcon: {
        position: "absolute",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: '98%',
        width: "98%"
    },
    ProfileTitle: {
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1.15,
        color: Colors.fontClr,
    },
    Camera: {
        height: 34,
        width: 34,
        borderRadius: 18,
        borderWidth: 4,
        borderColor: Colors.white,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.shade
    }
});
const mapStateToProp = ({ root }) => ({
    isLoader: root.isLoader,
    isError: root.isError,
})
const mapDispatchToProp = (dispatch) => ({
    _error: (errMsg) => {
        dispatch(_error(errMsg));
    },
})
export default connect(mapStateToProp, mapDispatchToProp)(ProfileScreen);