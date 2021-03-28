import React from "react";
import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from "../../../common/Colors";
import { Actions } from "react-native-router-flux";
import AboutUs from "../../../components/aboutUs"
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'About Us',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Contact',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'How to Chat',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Logout',
  },
];
const DotMenu = ({ }) => {
  const renderItem = ({ item }) => (
    < AboutUs title={item.title} />
  );
  return (
    <AppContainer route={"DotMenu"} _func={() => Actions.SettingScreen()} SearchIcon={true} iconName={"settings-outline"} firstImg={require("../../../assets/Potato.png")} drawerProps={true} heading={"Chat to a Potato"} >
      <View style={{ flex: 6, alignItems: "center" }}>
        <View style={styles.body}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </AppContainer >
  )
};
const styles = StyleSheet.create({
  body: { borderTopWidth: 1, height: "100%", borderTopColor: Colors.shade, width: "90%" }
});
export default (DotMenu);