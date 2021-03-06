import { connect } from 'react-redux';
import Header from '../../components/header/signUp'
import Button from "../../components/button"
import InputForms from "../../components/input"
import Colors from "../../common/Colors"
import { Actions } from 'react-native-router-flux';
import CustomPicker from "../../components/CustomPicker";
import CustomDatepicker from "../../components/CustomDatepicker";
import { _signUp } from "../../store/action/action";
import CountryCodePicker from '../../components/CountryCodePicker';

import React, {
    useState, useEffect
} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,Platform,
    ActivityIndicator,
    Dimensions,
    ImageBackground
} from 'react-native';
const height = Dimensions.get('window').height - (Platform.OS==="ios"?0:24);
const SignUp = ({ imgPath, dialCode, userProps, isLoader, isError, _signUp }) => { 
    const [user, setUser] = useState({
        Gender: "Male",
        "Full Name": "",
        "Username or email": "",
        "Password": "",
        "Country": "United States",
        "Birthday": "",
    });

    useEffect(() => {
        // if (dialCode) {
        //     let userClone = user;
        //     userClone.Country = dialCode;
        //     setUser(userClone);
        // }
        if (
            userProps && Object.keys(userProps).length !== 0 && userProps.constructor === Object
        ) {
            let userClone = userProps;
            userClone.Country = dialCode;
            setUser(userClone);
        }
    })

    const onChange = (text, label) => {
        let userClone = user
        userClone[label] = text
        setUser(userClone)
    }
    return (
        <ScrollView >
            {/* <View style={styles.MainView}> */}
            <ImageBackground
                style={styles.MainView}
                source={require("../../assets/bevelBG.png")}
            >
                {/* <HEADER> */}
                <View style={{ height: "13%", }}>
                    <Header
                        label={`Create an account`}
                        goBack={true} />
                </View>
                {/* </HEADER> */}
                {/* <FormDiv> */}
                <View style={{ height: "100%", paddingHorizontal: 20, }}>
                    <View style={{ height: "72%", }}>
                        <View style={styles.FormsDiv}>
                            <Text
                                style={[styles.InputStyle, { marginTop: 5 }]}>Full Name
                            </Text>
                            <InputForms
                                placeHolder="Full Name"
                                defVal={user["Full Name"]}
                                _func={(text) => onChange(text, "Full Name")}
                            />
                            <Text
                                style={styles.InputStyle}>Email
                            </Text>
                            <InputForms
                                defVal={user["Username or email"]}
                                placeHolder="jon.doe@gmail.com"
                                _func={(text) => onChange(text, "Username or email")}
                            />
                            <Text
                                style={styles.InputStyle}>Password
                             </Text>
                            <InputForms
                                defVal={user["Password"]}
                                passwordShow={false}
                                placeHolder="Password "
                                _func={(text) => onChange(text, "Password")}
                            />
                            <Text
                                style={styles.InputStyle}>Country
                             </Text>
                            <View style={{
                                // flex: 2,
                                // justifyContent: "center",
                                // alignItems: "center",
                                // borderRightWidth: 1,
                            }}>
                               { <CountryCodePicker imgPath={imgPath} dialCode={dialCode} user={user} />||<CountryCodePicker imgPath={imgPath} dialCode={dialCode} user={user} />}
                            </View>


                            {/* <InputForms
                                placeHolder="Country"
                                _func={(text) => onChange(text, "Country")}
                            /> */}
                            <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                <View style={{ width: "40%" }}>
                                    <Text
                                        style={styles.InputStyle}>Gender
                                    </Text>
                                    <CustomPicker
                                        data={["Male", "Female"]}
                                        _func={(value) => onChange(value, "Gender")}
                                    />
                                </View>
                                <View style={{ width: "40%", }}>
                                    <Text
                                        style={styles.InputStyle}>Birthday
                                    </Text>
                                    <CustomDatepicker
                                        defVal={user["Birthday"]}
                                        _func={(value) => onChange(value, "Birthday")}
                                    />
                                </View>
                            </View>
                            <Text
                                style={[styles.InputStyle, { marginBottom: 0 }]}> By joining, you agree to chat to a potato's
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    style={styles.Condition}>Terms and Conditions.
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <FormDiv> */}
                    {/* </Footer> */}
                    <View style={{ height: "15%" }}>
                        {/* </Footer> */}
                        {isLoader ?
                            <ActivityIndicator
                                style={{}} size="small"
                                color={Colors.primary} /> :
                            <Button
                                name="Create an account"
                                _func={() => _signUp(user)}
                                backgroundColor={Colors.secondary}
                                fontSize={13}
                            />}
                        {isError !== "" &&
                            <Text
                                style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
                            </Text>}
                        <View style={styles.Footer}>
                            <Text
                                style={{ fontSize: 12, letterSpacing: 1 }} >Have an account?
                             </Text>
                            <TouchableOpacity>
                                <Text
                                    style={styles.FooterLogin} onPress={() => { Actions.SignIn() }}> Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* </Footer> */}
                </View>
            </ImageBackground>
            {/* </View > */}
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    MainView: {
        width: "100%",
        height: height,
    },
    FormsDiv: {
        padding: 15,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: Platform.OS==="ios"?25: 2,
        borderColor: Colors.shade
    },
    InputStyle: {
        fontSize: 13,
        fontFamily: "WorkSans-SemiBold",
        letterSpacing: 0.31,
        color: Colors.fontClr,
        marginBottom: 5,
        marginTop: 12
    },

    Condition: {
        color: Colors.primary,
        letterSpacing: 1,
        textDecorationLine: "underline",
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 13
    },

    Footer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: "3%"
    },

    FooterLogin: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: 12,
        letterSpacing: 1
    },
});
const mapStateToProp = ({ root }) => ({
    isLoader: root.isLoader,
    isError: root.isError,
})
const mapDispatchToProp = (dispatch) => ({
    _signUp: (user) => {
        dispatch(_signUp(user));
    },
})
export default connect(mapStateToProp, mapDispatchToProp)(SignUp);