import { connect } from 'react-redux';
import Colors from "../../common/Colors";
import Header from '../../components/header/isProfile';
import { Actions } from "react-native-router-flux";
import TextArea from "../../components/textArea";
import Button from "../../components/button";
import React, {
    useState
} from "react";
import {
    _checkIsEmptyObj,
    _error
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
    { title: "Description", data: [{ height: 100, label: "Description" }] },
    { title: "Current Problems", data: [{ height: 100, label: "Current Problems" }] },
    { title: "Helpful motto", data: [{ height: 50, label: "Helpful motto" }] },
];
const TellUsMore = ({
    StoryTitle,
    Help,
    Struggles,
    isError,
    isLoader,
    _error
}) => {
    const [TxtArea, setTxtArea] = useState({
        Description: "",
        "Current Problems": "",
        "Helpful motto": "",
    });
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
                        MidIcon={require("../../assets/Potato.png")}
                        goBack={true} />
                </View>
                {/* </HEADER> */}
                {/* <body> */}
                <View style={{ height: "63%", alignItems: "center" }}>
                    <View style={{ width: "90%", height: "100%" }}>
                        <Text
                            style={styles.title}>Tell us more…
                        </Text>
                        <SectionList
                            sections={DATA}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                                <TextArea item={item}
                                    _func={(text, label) => {
                                        var TxtAreaClone = TxtArea;
                                        TxtAreaClone[label] = text;
                                        setTxtArea(TxtAreaClone);
                                    }}
                                />
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={styles.header}>{title}</Text>
                            )}
                        />
                    </View>
                </View>
                {/* </body> */}
                {/* </Footer> */}
                <View style={{ justifyContent: "center", alignItems: "center", height: "20%" }}>
                    <View style={{ width: "85%" }}>
                        {isLoader ?
                            <ActivityIndicator
                                style={{ marginTop: "10%" }}
                                size="small" color={Colors.primary}
                            /> :
                            <Button
                                name="Continue"
                                backgroundColor={Colors.secondary} fontSize={13}
                                _func={() => {
                                    _checkIsEmptyObj(TxtArea) ?
                                        _error(`${_checkIsEmptyObj(TxtArea)} is required`) :
                                        Actions.CurrentMode({
                                            StoryTitle, Help,
                                            Struggles,
                                            Description: TxtArea.Description,
                                            CurrentProblems: TxtArea["Current Problems"],
                                            Helpfulmotto: TxtArea["Helpful motto"],
                                        })
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
    header: {
        color: Colors.fontClr,
        fontFamily: "WorkSans-SemiBold",
        fontSize: 18,
        letterSpacing: 1.15,
        marginVertical: 7,
    },
    title: {
        fontFamily: "WorkSans-Bold",
        fontSize: 24,
        letterSpacing: 1.54,
        marginVertical: "1%",
        color: Colors.fontClr
    },
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
export default connect(mapStateToProp, mapDispatchToProp)(TellUsMore);