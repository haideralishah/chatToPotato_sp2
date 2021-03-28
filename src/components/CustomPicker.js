import { Picker } from "native-base";
import { StyleSheet, View } from "react-native";
import Colors from "../common/Colors"
import React,
{
  useState,
  useEffect
} from "react";
const InputForms = ({ data, _func }) => {
  const [pickerValue, setPickerValue] = useState();
  useEffect(() => {
    setPickerValue(data[0])
  }, [])
  return (
    <View style={styles.pickerContainer}>
      <Picker
        note
        mode="dropdown"
        selectedValue={pickerValue}
        onValueChange={(value) => {
          setPickerValue(value)
          _func(value)
        }}
      >
        {data.map((label, index) => (<Picker.Item
          key={index}
          label={label}
          value={label}
        />))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderColor: Colors.shade,
    borderWidth: 1,
    height: 35,
    backgroundColor: Colors.ligthShade,
    borderRadius: 3,
    justifyContent: "center"
  }
});
export default InputForms;