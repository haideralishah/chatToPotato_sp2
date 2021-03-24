import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image'
import * as Animatable from 'react-native-animatable';
import Colors from '../../common/Colors';
import React, {
  useState
} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
const SplashScreen = () => {
  const fadeIn = {
    from: {
      height: 48, width: 73
    },
    to: {
      height: 90, width: 90
    },
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, }}>
      {/* logo absolute */}
      <View style={[styles.logo,]}>
        <View style={{ height: "70%",backgroundColor:"red", justifyContent: "center", }}>
          <Animatable.Image
            direction="alternate-reverse"
            resizeMode="contain"
            animation={fadeIn} iterationCount="infinite"
            source={require("../../assets/PotatoSp.png")}
            style={{alignItems:"flex-end",justifyContent:"flex-end",width:50,height:50}}
          />
        </View>
        {/* <View style={{ height: "50%", }}>
          <Text
            style={[styles.chatToPotato, {}]}>Chat to a Potato
          </Text>
        </View> */}
      </View>


      <View style={[styles.logo,]}>
        <View style={{ height: "95%",justifyContent:"center" }}>
          <Text
            style={[styles.chatToPotato, {}]}>Chat to a Potato
          </Text>
        </View>
      </View>


      {/* logo absolute */}
      {/* top maskt */}
      <View style={{ flex: 5, }}>
        <FastImage
          style={{ height: "85%", width: "50%" }}
          source={require("../../assets/SplashTopMask.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      {/* bottom maskt */}
      <View style={{ flex: 5, alignItems: "flex-end", justifyContent: "flex-end" }}>
        <FastImage
          style={{ height: "85%", width: "50%", }}
          source={require("../../assets/SplashBottomMask.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center"
  },
  chatToPotato: {
    fontFamily: "WorkSans-Bold",
    fontSize: 28,
    fontStyle: "normal",
    letterSpacing: 0.71,
    color: Colors.fontClr
  },
});
const mapStateToProp = ({ root }) => ({
  // currentShop: root.currentShop,
})
const mapDispatchToProp = (dispatch) => ({
  // getCurrentBarberBooking: (currentUser, date) => {
  //   dispatch(getCurrentBarberBooking(currentUser, date));
  // },
})
export default connect(mapStateToProp, mapDispatchToProp)(SplashScreen);