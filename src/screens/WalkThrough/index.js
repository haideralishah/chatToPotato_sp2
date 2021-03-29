import React from "react";
import Button from '../../components/button';
import { Actions } from "react-native-router-flux";
import Colors from "../../common/Colors";
import ImageSlider from 'react-native-image-slider';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";

const slides = [
  {
    key: 1,
    image: require('../../assets/walk1.png'),
    image2: require('../../assets/step1.png'),
    txt1: "Join over 40,000 users",
    txt2: "Vent it all out! Find other humans with similar life problems.",
  },
  {
    key: 2,
    image: require('../../assets/walk2.png'),
    image2: require('../../assets/step2.png'),
    txt1: "Get Affordable Help",
    txt2: "Pay a little to get the help you need. We should never neglect out mental health.",
  },
  {
    key: 3,
    image: require('../../assets/walk3.png'),
    image2: require('../../assets/step3.png'),
    txt1: "Free & Easy Instant Chat",
    txt2: "Instant chat for instant relief. We provide free and affordable help.",
  },
];

export default WalkThrough = () => {

  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 1.5, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{ height: 120, width: 65 }}
          source={require("../../assets/walkTopMask.png")}
          resizeMode={"contain"}
        />
        <Image
          style={{ height: 35, width: 50 }}
          source={require("../../assets/PotatoSp.png")}
          resizeMode={"contain"}
        />
        <Text style={styles.ChatToAPotato}>Chat to a Potato</Text>
      </View>


      <View style={{ flex: 6.5, }}>
        <ImageSlider
          style={{ backgroundColor: 'none', }}
          loop
          autoPlayWithInterval={3000}
          images={slides}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, { flex: 1, justifyContent: "flex-end", alignItems: "center" }]}>
              <Image
                style={{ height: "72%", width: "75%", }}
                resizeMode={"contain"}
                source={item.image}
              />
              <Text style={styles.JoinOver}>
                {item.txt1}
              </Text>
              <Text style={styles.VentItAllOut}>
                {item.txt2}
              </Text>
              <Image
                style={{ height: 30, width: 90 }}
                resizeMode="center"
                source={item.image2}
              />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={{ backgroundColor: 'green' }}>
            </View>
          )}
        />
      </View>

      <View style={{ flex: 2, justifyContent: "space-evenly", alignItems: "center" }}>
        <View style={{ right: 0, position: "absolute", zIndex: 1 }}>
          <Image
            style={{ height: 120, width: 65 }}
            source={require("../../assets/walkBottomMask.png")}
            resizeMode={"contain"}
          />
        </View>
        
         {
          Platform.OS === "ios" ?
            <TouchableOpacity onPress={()=>Actions.SignIn()}
              activeOpacity={0.8}
              style={
                [styles.buttonDiv,]}>
              <Text style={[styles.buttonText,]}>{"Login"}</Text>
            </TouchableOpacity> :
            <Button
              name="Login"
              width="45%"
              _func={() => Actions.SignIn()}
            />
        }
        <View style={styles.Footer}>
          <Text style={styles.DontHaveAcc}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text
              style={[styles.DontHaveAcc, { color: Colors.secondary, }]}
              onPress={() => { Actions.SignUp() }}> Sign up
                  </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  ChatToAPotato: {
    marginLeft: "5%",
    fontSize: 20,
    fontFamily: "WorkSans-Bold",
    color: Colors.fontClr,
    letterSpacing: 0.51,
  },
  Footer: {
    flexDirection: 'row',
  },
  DontHaveAcc: {
    color: Colors.fontClr,
    fontFamily: "WorkSans-SemiBold",
    fontSize: 14,
    letterSpacing: 0.9,
  },
  VentItAllOut: {
    marginBottom: "5%",
    width: "70%",
    textAlign: "center",
    color: Colors.fontClr,
    fontFamily: "WorkSans-SemiBold",
    fontSize: 14,
    letterSpacing: 0.9,
  },
  JoinOver: {
    marginBottom: "3%",
    color: Colors.fontClr,
    fontFamily: "WorkSans-ExtraBold",
    fontSize: 21,
    letterSpacing: 1.35,
  },
  buttonDiv: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    height: 50,
    backgroundColor:  Colors.primary,
    borderBottomLeftRadius:25,
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
    width: "45%"
  },
  buttonText: {
    fontFamily: "WorkSans-SemiBold",
    fontSize: 16,
    color: '#ffffff',
    letterSpacing: 1
  },
});