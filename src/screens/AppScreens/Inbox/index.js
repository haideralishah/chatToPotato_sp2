import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';
import Colors from "../../../common/Colors";
import FastImage from 'react-native-fast-image';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import React, {
  useState
} from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({ title }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsActive(!isActive)
      }}
      activeOpacity={0.8}
      style={[styles.item, { backgroundColor: isActive ? Colors.ligthShade : Colors.white }]}>
      <View
        style={{ flex: 2, alignItems: 'center', justifyContent: "center" }}>
        < FastImage
          style={{ height: 60, width: 60, }}
          source={require("../../../assets/drawable-xxxhdpi/Rectangle.png")}
          resizeMode="contain"
        />
        <View style={styles.profilePhoto}>
          <View
            style={[styles.activeStatus,
            { borderColor: Colors.white, backgroundColor: isActive ? Colors.green : Colors.shade }]}></View>
        </View>
      </View>
      <View style={{ flex: 6, height: 60, justifyContent: "space-evenly" }}>
        <Text
          style={{ fontFamily: "WorkSans-SemiBold", letterSpacing: 0.36, fontSize: 14 }}>Aaronjawel
        </Text>
        <Text
          style={{ fontFamily: "WorkSans-Regular", letterSpacing: 0.36, fontSize: 14 }}>Hi hows life? this pand...
        </Text>
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <View style={styles.time}>
          <Text
            style={{ fontSize: 12, letterSpacing: 0.31, color: Colors.fontClr }}>1 Month
          </Text>
          <TouchableOpacity>
            <FontAwesome
              name="star-o"
              style={{ fontSize: 20, color: Colors.fontClr }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
};
const Inbox = ({ }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <AppContainer
      route={"Inbox"}
      SearchIcon={true}
      iconName={"search"}
      firstImg={require("../../../assets/Potato.png")}
      drawerProps={true}
      heading={"Chat to a Potato"} >
      {/* body */}
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <View style={styles.editView}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.edit}>
            <Feather
              name="edit"
              style={{ fontSize: 30, color: Colors.white }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer >
  )
};
const styles = StyleSheet.create({

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.ligthShade,
    height: 82,
  },
  title: {
    fontSize: 32,
  },
  edit: { backgroundColor: Colors.primary, width: 60, height: 60, borderRadius: 30, justifyContent: "center", alignItems: "center" },
  editView: { height: "100%", width: "95%", position: "absolute", justifyContent: "flex-end", alignItems: "flex-end" },
  body: { flex: 7, borderWidth: 1, borderColor: Colors.shade, paddingTop: 8 },
  time: { width: "80%", justifyContent: "space-between", alignItems: "flex-end", height: "80%" },
  activeStatus: { height: 14, borderWidth: 2, width: 14, borderRadius: 7, },
  profilePhoto: { height: 58, borderRadius: 29, width: 58, position: "absolute", justifyContent: "flex-end", alignItems: "flex-end" }
});
const mapStateToProp = ({ root }) => ({
})
const mapDispatchToProp = (dispatch) => ({
})
export default connect(mapStateToProp, mapDispatchToProp)(Inbox);