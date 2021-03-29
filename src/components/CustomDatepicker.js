import Colors from "../common/Colors"
import DatePicker from 'react-native-datepicker'
import React, {
  useState,
  useEffect
} from "react";
import {
  StyleSheet,
  View,Platform
} from "react-native";
const CustomDatepicker = ({ defVal, _func }) => {
  const [date, setDate] = useState("")
  useEffect(() => {
    if (defVal) {
      setDate(defVal)
    }
  }, [])
  return (
    <View >
      <DatePicker
        showIcon={false}
        date={date}
        style={{ width: "100%" }}
        mode="date"
        placeholder="DD-MM-YY"
        format="DD-MM-YYYY"
        customStyles={{
          dateInput: styles.pickerContainer,
          datePicker: {
            // backgroundColor: '#d1d3d8',
            justifyContent:'center'
          }
        }}



        onDateChange={(date) => {
          setDate(date)
          _func(date)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderColor: Colors.shade,
    borderWidth: 1,
    height: 35,
    backgroundColor: Colors.ligthShade,
    borderRadius : ( Platform.OS==="ios"?10: 3),
    justifyContent: "center"
  }
});
export default CustomDatepicker;