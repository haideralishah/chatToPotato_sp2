import { connect } from 'react-redux';
import { _gettopics } from "../../store/action/action";
import { _error } from "../../store/action/action";
import Header from "../../components/header/signUp";
import Colors from "../../common/Colors";
import InputForms from "../../components/input";
import { _forgerPass } from "../../store/action/action";
import Button from "../../components/button"
import React, {
    useState
} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native';
const ForgetScreen = ({ isLoader, isError, _forgerPass }) => {
    const [recoverEmail, setRecoverEmail] = useState("");
    // const onChange = (text, label) => {
    //     let userClone = recoverEmail
    //     userClone[label] = text
    //     setUser(userClone)
    // }
    return (
        <ScrollView style={{ width: "100%" }}>
            <View style={{ width: "100%" }}>
                <Header
                    label={`Forget Password`}
                    goBack={true} />
            </View>
            <View style={{ alignItems: "center" }}>
                <View style={styles.body}>
                    <View style={{ justifyContent: "space-evenly" }}>
                        <View style={{ marginVertical: 30 }}>
                            <Text
                                style={styles.InputText}>Typeg your email
                            </Text>
                            <InputForms
                                SignInScreen={true}
                                placeHolder="Type your email"
                                _func={(text) => setRecoverEmail(text)}
                            />
                        </View>
                        {isLoader ?
                            <ActivityIndicator
                                style={{ marginTop: "10%" }}
                                size="small"
                                color={Colors.primary} /> :
                            <Button
                                name="Continue"
                                _func={() => _forgerPass(recoverEmail)}
                                backgroundColor={Colors.secondary}
                                fontSize={13}
                            />
                        }
                        {isError !== "" &&
                            <Text style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
                            </Text>}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    body: {
        flex: 1,
        borderTopWidth: 1,
        width: "90%",
        borderTopColor: Colors.shade
    },
    InputText: {
        fontSize: 16,
        letterSpacing: 0.41,
        marginVertical: 15,
        color: Colors.fontClr,
        marginHorizontal: 10,
        fontFamily: "WorkSans-Regular"
    }
});
const mapStateToProp = ({ root }) => ({
    isLoader: root.isLoader,
    isError: root.isError,
})
const mapDispatchToProp = (dispatch) => ({
    _forgerPass: (currentUser) => {
        dispatch(_forgerPass(currentUser));

    },
})
export default connect(mapStateToProp, mapDispatchToProp)(ForgetScreen);