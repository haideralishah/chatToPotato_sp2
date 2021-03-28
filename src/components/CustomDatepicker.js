import React, { useState, } from "react";
import Colors from "../common/Colors"
import DatePicker from 'react-native-datepicker'
import {
  StyleSheet,
  View
} from "react-native";
const CustomDatepicker = ({ _func }) => {
  const [date, setDate] = useState("")
  // useEffect(() => {
  //   setPickerValue(data[0])
  // }, [])
  return (
    <View >
      <DatePicker
        // style={styles.pickerContainer}
        showIcon={false}
        date={date}
        style={{ width: "100%" }}
        mode="date"
        placeholder="DD-MM-YY"
        format="DD-MM-YYYY"
        customStyles={{
          dateInput: styles.pickerContainer
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
    borderRadius: 3,
    justifyContent: "center"
  }
});
export default CustomDatepicker;