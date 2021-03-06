import React from "react";
import AppContainer from '../../../../container/AppContainer';
import { View, FlatList, StyleSheet ,ImageBackground} from 'react-native';
import Colors from "../../../../common/Colors";
import Privacy from "../../../../components/Privacy";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Privacy Policy',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Trems & Conditions',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Reset Password',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Notificaions',
  },
];
const SettingScreen = () => {
  const renderItem = ({ item }) => (
    < Privacy title={item.title} />
  );
  return (
    <AppContainer route={"DotMenu"} PrivacyScreen={true} SearchIcon={true} MidIcon={require("../../../../assets/PotatoSp.png")} drawerProps={true} heading={"Chat to a Potato"} >
         <ImageBackground
          style={{ flex: 6, backgroundColor: Colors.white,height:"100%", alignItems: "center" }}
          source={require("../../../../assets/bevelBG.png")}
        >
          <View style={styles.body}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ImageBackground > 
    </AppContainer >
  )
};
const styles = StyleSheet.create({
  body: { borderTopWidth: 1, height: "100%", paddingHorizontal: 15, borderTopColor: Colors.shade, width: "90%" }
});
export default SettingScreen;