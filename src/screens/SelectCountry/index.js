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
    ScrollView,
    ActivityIndicator,
    Dimensions,
    ImageBackground
} from 'react-native';
const height = Dimensions.get('window').height - 24;
const SelectCountry = ({ imgPath, dialCode,isLoader,isError,oldUser }) => {

    const [country, setCountry] = useState("United States",);

    useEffect(() => {
        console.log(imgPath, dialCode,)
        if (dialCode) {
            setCountry(dialCode);
        }
    })
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
                <View style={{ height: "40%", paddingHorizontal: 20, }}>
                    <Text style={{padding:15,backgroundColor:"#D4EDD9",color:"#487B55"}}>Welcome back! Please fill in all fields in your biodata. We have set your default country to the United States, please change accordingly.</Text>
                    <View style={{ height: "72%", }}>
                        <View style={styles.FormsDiv}>

                            <Text
                                style={styles.InputStyle}>Country
                             </Text>
                            <View style={{
                            }}>
                                {<CountryCodePicker imgPath={imgPath} dialCode={dialCode} oldUser={oldUser}  /> || <CountryCodePicker imgPath={imgPath} dialCode={dialCode} user={user} />}
                            </View>
                            {/* <InputForms
                                placeHolder="Country"
                                _func={(text) => onChange(text, "Country")}
                            /> */}
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
                                name="Continue"
                                _func={() => Actions.ProfileScreen({oldUser,country})}
                                // _func={() => console.log(oldUser,country)}
                                backgroundColor={Colors.secondary}
                                fontSize={13}
                            />}
                        {isError !== "" &&
                            <Text
                                style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
                            </Text>}
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
export default connect(mapStateToProp, mapDispatchToProp)(SelectCountry);