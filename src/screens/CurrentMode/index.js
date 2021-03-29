import { connect } from 'react-redux';
import Colors from "../../common/Colors";
import Straper from"../../components/straper"
import Header from '../../components/header/isProfile';
import TextArea from "../../components/textArea";
import Button from "../../components/button";
import React,
{
    useState
} from "react";
import {
    _error,
    _CreateProfile
} from "../../store/action/action";
import {
    View,
    Dimensions,
    SectionList,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
const windowHeight = Dimensions.get('window').height - 24;
const DATA = [
    {
        title: "Current mood",
        data: [
            {
                height: 100
            }
        ]
    },
];
const CurrentMode = ({
    country,
    StoryTitle,
    Help,
    Struggles,
    Description,
    CurrentProblems,
    Helpfulmotto,
    isLoader,
    isError,
    currentUser,
    _error,
    _CreateProfile
}) => {
    const [Mode, setMode] = useState();
    return (
        <ScrollView >
            <ImageBackground
                style={styles.MainView}
                source={require("../../assets/bevelBG.png")}
            >
                {/* <HEADER> */}
                <View style={{ height: "17%" }}>
                {Platform.OS === "ios" &&
                        <Straper item={5} />
                    }
                    <Header
                        isProfile={true}
                        MidIcon={require("../../assets/PotatoSp.png")}
                        goBack={true} />
                </View>
                {/* </HEADER> */}
                {/* <body> */}
                <View style={{
                    height: "63%",
                    alignItems: "center"
                }}>
                    <View style={{ width: "90%", height: "100%" }}>
                        <SectionList
                            sections={DATA}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <TextArea
                                            item={item}
                                            marginTop="7%"
                                            _func={(text,) => setMode(text)}
                                        />
                                        <Text
                                            style={styles.Info}>To provide you with a better experience we need to know your current mood.
                                         </Text>
                                    </View>
                                )
                            }}
                            renderSectionHeader={({
                                section: { title }
                            }) => (
                                <Text
                                    style={styles.header}>{title}
                                </Text>
                            )}
                        />
                    </View>
                </View>
                {/* </body> */}
                {/* </Footer> */}
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20%"
                }}>
                    <View style={{
                        width: "85%"
                    }}>
                        {isLoader ?
                            <ActivityIndicator
                                style={{ marginTop: "10%" }}
                                size="small" color={Colors.primary}
                            /> :
                            <Button
                                name="Continue"
                                backgroundColor={Colors.secondary}
                                fontSize={13}
                                _func={() => {
                                    (Mode) ?

                                        (
                                            country ?
                                                _CreateProfile({
                                                    country,
                                                    StoryTitle,
                                                    Help,
                                                    Struggles,
                                                    Description,
                                                    CurrentProblems,
                                                    Helpfulmotto,
                                                    Mode,
                                                }, currentUser) :
                                                _CreateProfile({
                                                    StoryTitle,
                                                    Help,
                                                    Struggles,
                                                    Description,
                                                    CurrentProblems,
                                                    Helpfulmotto,
                                                    Mode,
                                                }, currentUser))
                                        :
                                        (_error(`Current Mode is required`));
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
    MainView: {
        width: "100%",
        height: windowHeight,
    },
    header: {
        backgroundColor: "#fff",
        color: Colors.fontClr,
        fontFamily: "WorkSans-Bold",
        fontSize: 24,
        letterSpacing: 1.54,
        marginTop: "3%"
    },
    Info: {
        marginTop: "3%",
        fontFamily: "WorkSans-SemiBold",
        fontSize: 12,
        letterSpacing: -0.1,
        color: Colors.fontClr,
        width: "80%"
    }
});
const mapStateToProp = ({ root }) => ({
    isLoader: root.isLoader,
    isError: root.isError,
    currentUser: root.currentUser,
})
const mapDispatchToProp = (dispatch) => ({
    _error: (errMsg) => { dispatch(_error(errMsg)) },
    _CreateProfile: (profile, currentUser) => dispatch(_CreateProfile(profile, currentUser)),

})
export default connect(mapStateToProp, mapDispatchToProp)(CurrentMode);