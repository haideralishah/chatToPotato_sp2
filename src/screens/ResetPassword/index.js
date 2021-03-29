import Header from "../../components/header/isProfile";
import Colors from "../../common/Colors";
import InputForms from "../../components/input";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../components/button"
import { _forgerPass } from "../../store/action/action";
import { _gettopics } from "../../store/action/action";
import { _error } from "../../store/action/action";
import React, {
    useState
} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
const ResetPassword = ({ isLoader, isError, _forgerPass }) => {
    const [passBrdClr, setpassBrdClr] = useState(Colors.shade);
    const [rePassBrdClr, setRepassBrdClr] = useState(Colors.shade);
    const [pass, setPass] = useState('12345678');
    const [rePass, setRePass] = useState('12345678');
    const [passBrdWidth, setpassBrdWidth] = useState(1);
    const [rePassBrdWidth, setrePassBrdWidth] = useState(1);
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordReShow, setRePasswordShow] = useState(false);
    return (
        <ScrollView style={{ width: "100%",backgroundColor:Colors.white  }}>
            <View style={{ width: "100%" }}>
                <Header
                    label={`Reset Password`}
                    goBack={true} />
            </View>
            <View style={{ alignItems: "center",backgroundColor:Colors.white }}>
                <View style={styles.body}>
                    <View style={{ justifyContent: "space-evenly" }}>
                        <View style={{ marginVertical: 30 }}>
                            <Text
                                style={styles.InputText}>Type Password
                            </Text>
                            <View style={
                                [styles.inputFieldPass,
                                { borderColor: rePassBrdClr, borderWidth: rePassBrdWidth }
                                ]}>
                                <View style={{ width: "90%" }}>
                                    <InputForms
                                        _bdrforicon={(color) => { setRepassBrdClr(color) }}
                                        _bdrWidth={(width) => { setrePassBrdWidth(width) }}
                                        SignInScreen={true} placeHolder="Password"
                                        passwordShow={passwordReShow}
                                        _func={(text) => setRePass(text)}
                                    />
                                </View>
                                <View style={{ width: "10%" }}>
                                    {passwordReShow ?
                                        <TouchableOpacity onPress={() => { setRePasswordShow(false) }}>
                                            <Ionicons
                                                name="eye-outline"
                                                style={{ color: Colors.fontClr, fontSize: 15 }}
                                            />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => { setRePasswordShow(true) }}>
                                            <Ionicons
                                                name="ios-eye-off-outline"
                                                style={{ color: Colors.fontClr, fontSize: 15 }}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                            <Text
                                style={styles.InputText}>Retype Password
                            </Text>
                            <View style={
                                [styles.inputFieldPass,
                                { borderColor: passBrdClr, borderWidth: passBrdWidth }
                                ]}>
                                <View style={{ width: "90%" }}>
                                    <InputForms
                                        _bdrforicon={(color) => { setpassBrdClr(color) }}
                                        _bdrWidth={(width) => { setpassBrdWidth(width) }}
                                        SignInScreen={true} placeHolder="Password"
                                        passwordShow={passwordShow}
                                        _func={(text) => setPass(text)}
                                    />
                                </View>
                                <View style={{ width: "10%",}}>
                                    {passwordShow ?
                                        <TouchableOpacity onPress={() => { setPasswordShow(false) }}>
                                            <Ionicons
                                                name="eye-outline"
                                                style={{ color: Colors.fontClr, fontSize: 15 }}
                                            />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => { setPasswordShow(true) }}>
                                            <Ionicons
                                                name="ios-eye-off-outline"
                                                style={{ color: Colors.fontClr, fontSize: 15 }}
                                            />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                        </View>
                        {isLoader ?
                            <ActivityIndicator
                                style={{ marginTop: "10%" }}
                                size="small"
                                color={Colors.primary} /> :
                            <Button
                                name="Continue"
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
        paddingHorizontal: 10,
        borderTopColor: Colors.shade
    },
    InputText: {
        fontSize: 16,
        letterSpacing: 0.41,
        marginVertical: 15,
        color: Colors.fontClr,
        marginHorizontal: 10,
        fontFamily: "WorkSans-SemiBold"
    },

    inputFieldPass: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: Platform.OS === "ios" && 10,
        marginBottom: 5,
        backgroundColor: Colors.ligthShade,
    },
});
export default ResetPassword;