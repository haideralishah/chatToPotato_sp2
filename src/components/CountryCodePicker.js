import React, { Component } from "react";
import {
  Platform, StyleSheet,
  TouchableOpacity,
  Text,  
} from 'react-native'; 
import { Actions } from 'react-native-router-flux'
import Colors from "../common/Colors"
class CountryCodePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialCode: "United States",
      imgPath: require(`../services/resources/flags/images/us.png`),
    };
  }

  changePhoneCode() { 
  }
  componentWillMount() {
    const { imgPath, dialCode } = this.props;
    if (imgPath) this.setState({ imgPath, dialCode })
  }
  updatePhoneNumber(phoneNumber) {
    this.setState({ phoneNumber })
  }

  render() {
    let { dialCode, phoneNumber, imgPath } = this.state;
    let { user} = this.props;
    return (
      <TouchableOpacity
        onPress={() => Actions.CountryLists({user:user,oldUser:this.props.oldUser})}
        style={{
          height:  35,
          borderColor: Colors.shade,
          fontSize:  11,
          backgroundColor:  Colors.ligthShade,
          padding: 10,
          borderWidth: 1,
          borderRadius:  ( Platform.OS==="ios"?10: 3)
        }}
      > 
        <Text style={{color:"grey",fontSize:11 }}>{dialCode}</Text>
      </TouchableOpacity>
    );
  }
}

export default CountryCodePicker

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    backgroundColor: "red",
    borderRadius: 10
  },
  inputNumber: {
    backgroundColor: "#F6F7FB",
    flex: 6,
    flexDirection: "row"
  },
  countryCode: {
    flex: 1.5,
    marginLeft: 5,
    borderColor: 'gray',
    backgroundColor: "#F6F7FB",
    justifyContent: "center",
    alignItems: "center"
  }, 
})

