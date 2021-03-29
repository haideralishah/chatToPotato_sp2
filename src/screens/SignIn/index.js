import { connect } from 'react-redux';
import Colors from "../../common/Colors"
import InputForms from "../../components/input"
import Button from "../../components/button"
import { _login } from "../../store/action/action"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux';
import FastImage from "react-native-fast-image";
import React, {
  useState,
  useEffect
} from "react";
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Platform,
  ScrollView,
  BackHandler,
  ActivityIndicator
} from 'react-native';
const height = Dimensions.get('window').height - (Platform.OS==="ios"?0:24);
const SignIn = ({ prevScreen, isLoader, isError, _login }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState('fatma@gmail.com');
  // const [email, setEmail] = useState('');
  const [pass, setPass] = useState('12345678');
  // const [pass, setPass] = useState('');
  const [passBrdClr, setpassBrdClr] = useState(Colors.shade);
  const [passBrdWidth, setpassBrdWidth] = useState(1);
  useEffect(() => {
    const backAction = () => {
      if (Actions.currentScene === "SignIn" && prevScreen !== "WalkThrough") BackHandler.exitApp()
      else { Actions.pop() }
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView >
      <ImageBackground
        source={require("../../assets/LoginMask.png")}
        style={{ height: "100%", width: "100%", justifyContent: "center" }}
        resizeMode="stretch"
      >
        <View style={{ padding: 20, height: height / 4, }}>
          <TouchableOpacity style={{}} onPress={() => {
            (Actions.currentScene === "SignIn" && prevScreen !== "WalkThrough") ?
              BackHandler.exitApp() :
              Actions.pop()
          }}>
            <AntDesign
              name="arrowleft"
              style={{ color: Colors.fontClr, fontSize: 30 }} />
          </TouchableOpacity>
          <View style={{ alignItems: "center", }}>
            <FastImage
              style={{ height: 50, width: 80, }}
              source={require("../../assets/PotatoSp.png")}
              resizeMode={FastImage.resizeMode.stretch}
            />
            <Text
              style={styles.ChatToAPotato}>Chat to a Potato
            </Text>
          </View>
        </View>
        <View style={{ height: height / 2.2 }}>
          <ImageBackground
            source={require("../../assets/Vector.png")}
            style={{ height: "100%", width: "100%", justifyContent: "center" }}
            resizeMode="stretch"
          >
            {/* <InputDiv> */}
            <View style={{ padding: 20, marginTop: "10%" }}>
              <View style={styles.InputMainDiv}>
                <Text
                  style={styles.InputUserName}>Username or email
                </Text>
                <InputForms
                  SignInScreen={true}
                  placeHolder="username or email "
                  _func={(text) => setEmail(text)}
                />
                <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: 'row' }}>
                  <Text
                    style={styles.InputPassword}>Password
                  </Text>
                  <TouchableOpacity onPress={() => { Actions.ForgetScreen() }}>
                    <Text
                      style={styles.ForgotPassword}>Forgot password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={
                  [styles.inputFieldPass,
                  { borderColor: passBrdClr, borderWidth: passBrdWidth,
    borderRadius: Platform.OS==="ios"?10: 2,
  }
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
                  <View style={{ width: "10%" }}>
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
            </View>
            {/* </InputDiv> */}
          </ImageBackground>
        </View>
        <View style={{ padding: 20, height: height / 3.4, }}>
          {isLoader ?
            <ActivityIndicator
              style={{ marginTop: "10%" }}
              size="small" color={Colors.primary}
            /> :
            <Button name="Login"
              _func={() => _login(email, pass)}
              // marginTop="10%"
              backgroundColor={Colors.secondary}
              fontSize={16} />}
          {isError !== "" &&
            <Text style={{ color: "red", fontSize: 12, alignSelf: "center" }}>{isError}
            </Text>}
          <View style={styles.footer}>
            <Text
              style={styles.DontHaveAcc}>Don't have an account yet?
            </Text>
            <TouchableOpacity>
              <Text
                style={[styles.DontHaveAcc, { color: Colors.primary, }]} onPress={() => { Actions.SignUp() }}> Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  ChatToAPotato: {
    color: Colors.fontClr,
    fontFamily: "WorkSans-ExtraBold",
    fontSize: 30,
    letterSpacing: 0.77,
  },
  inputFieldPass: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: Colors.ligthShade,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    marginTop: "5%",
    width: "100%"
  },
  InputMainDiv: {
    backgroundColor: Colors.white,
    borderRadius: Platform.OS==="ios"?15: 2,
    padding: 15,
  },
  InputUserName: {
    marginBottom: 10,
    color: Colors.fontClr,
    marginTop: 5,
    fontFamily: "WorkSans-Bold",
    letterSpacing: 0.36,
  },
  InputPassword: {
    marginBottom: 15,
    marginTop: 20,
    color: Colors.fontClr,
    fontFamily: "WorkSans-Bold",
    letterSpacing: 0.36,
  },
  ForgotPassword: {
    fontSize: 12,
    letterSpacing: 0.31,
    color: Colors.fontClr,
    fontFamily: "WorkSans-SemiBold",
  },
  DontHaveAcc: {
    color: Colors.fontClr,
    fontFamily: "WorkSans-SemiBold",
    fontSize: 14,
    letterSpacing: 0.9,
  },

});
const mapStateToProp = ({ root }) => ({
  isLoader: root.isLoader,
  isError: root.isError,
})
const mapDispatchToProp = (dispatch) => ({
  _login: (email, pass) => {
    dispatch(_login(email, pass));
  },
})
export default connect(mapStateToProp, mapDispatchToProp)(SignIn);