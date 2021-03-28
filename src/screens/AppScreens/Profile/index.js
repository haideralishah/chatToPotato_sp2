import React from "react";
import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';
import { Text, View, } from 'react-native';

const Profile = ({ }) => {
  return (
    <AppContainer route={"Profile"} secondImg={require("../../../assets/filter.png")} firstImg={require("../../../assets/Potato.png")} drawerProps={true} heading={"Chat to a Potato"} >
      {/* body */}
      <View style={{ flex: 7.8, width: "100%", }}>
        <Text >Profile</Text>
      </View>
    </AppContainer >
  )
};
const mapStateToProp = ({ root }) => ({
})
const mapDispatchToProp = (dispatch) => ({
})
export default connect(mapStateToProp, mapDispatchToProp)(Profile);