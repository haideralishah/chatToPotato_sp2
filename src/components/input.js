import { TextInput } from 'react-native';
import Colors from "../common/Colors"
import React,
{
  useState
} from "react";
const CustomPicker = (
  { _bdrforicon,
    borderRadius,
    maxLength,
    passwordShow,
    SignInScreen,
    placeHolder,
    _func,
    _bdrWidth }) => {
  const [form, onChangeText] = useState();
  const [borderColor, setBorderColor] = useState(Colors.shade);
  const [borderWidth, setBorderWidth] = useState(1);
  // const [borderRadius, setBorderRadius] = useState(1);
  let onFocus = () => {
    setBorderColor(Colors.primary)
    setBorderWidth(3)
    // ******using login password input
    if (_bdrforicon) {
      _bdrforicon(Colors.primary)
    }
    if (_bdrWidth) {
      _bdrWidth(3)
    }
    // ******using login password input
  }
  let onBlur = () => {
    setBorderColor(Colors.shade)
    setBorderWidth(1)
    // ******using login password input
    if (_bdrforicon) {
      _bdrforicon(Colors.shade)
    }
    if (_bdrWidth) {
      _bdrWidth(1)
    }
    // ******using login password input
  }
  return (
    <TextInput
      onBlur={() => onBlur()}
      onFocus={() => onFocus()}
      style={{
        height: SignInScreen ? 45 : 35,
        borderColor: borderColor,
        fontSize: SignInScreen ? 14 : 11,
        backgroundColor: Colors.ligthShade,
        padding: 10,
        // ********because password input has fustom eye icon
        borderWidth: placeHolder === "Password" ? 0 : borderWidth,
        borderRadius: borderRadius ? borderRadius : 3
      }}
      maxLength={maxLength}
      onChangeText={(text) => _func(text)}
      // onChangeText={SignInScreen ? text => _Func(text) : text => onChangeText(text)}
      // value={form}
      placeholder={placeHolder}
      secureTextEntry={passwordShow == false ? true : false}
    />

  );
}

export default CustomPicker;