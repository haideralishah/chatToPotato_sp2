import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';
import Colors from "../../../common/Colors";
import FastImage from 'react-native-fast-image';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Actions } from 'react-native-router-flux';
import { get_conversations } from '../../../store/action/action';
import React, {
  useState, useEffect
} from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const Item = ({
  blockStatus,
  recipientname,
  lastMsg,
  proImg,
  identifier,
  recipientUserId }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsActive(!isActive)
        Actions.ChatScreen({
          identifier,
          recipientname,
          proImg,
          recipientUserId,
          blockStatus
        })
      }}
      activeOpacity={0.8}
      style={[styles.item, { backgroundColor: isActive ? Colors.ligthShade : Colors.white }]}>
      {/* {blockStatus &&
        <View
          onPress={() => {
            setIsActive(!isActive)
            Actions.ChatScreen({
              identifier,
              recipientname,
              proImg,
              recipientUserId,
              blockStatus
            })
          }}
          style={{ height: "100%", width: "100%", position: "absolute" }}>
          <View style={{ backgroundColor: Colors.transparent, height: "100%", width: "100%", zIndex: 2 }}></View>
        </View>
      } */}
      <View
        style={{ flex: 2, alignItems: 'center', justifyContent: "center" }}>
        <View style={{ height: 60, width: 60, borderRadius: 30, overflow: "hidden" }}>

          < FastImage
            style={{ height: "100%", width: "100%", }}
            source={{ uri: proImg }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.profilePhoto}>
          <View
            style={[styles.activeStatus,
            { borderColor: Colors.white, backgroundColor: isActive ? Colors.green : Colors.shade }]}></View>
        </View>
      </View>
      <View style={{ flex: 6, height: 60, justifyContent: "space-evenly" }}>
        <Text
          style={{ fontFamily: "WorkSans-SemiBold", letterSpacing: 0.36, fontSize: 14 }}>{recipientname}
        </Text>
        <Text
          style={{ fontFamily: "WorkSans-Regular", letterSpacing: 0.36, fontSize: 14 }}>{lastMsg}...
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
const Inbox = ({ allConversation, currentUser, get_conversations }) => {
  useEffect(() => {
    get_conversations(currentUser);
    console.log(allConversation, "allConversationallConversation")
  }, [])
  const renderItem = ({ item }) => (
    <Item recipientname={item.recipient_info.name}
      recipientUserId={item.recipient_info.id}
      identifier={item.id}
      lastMsg={item.last_message_content}
      proImg={item.recipient_info.avatar_url}
      blockStatus={item.blocked}
    />
  );

  return (
    <AppContainer
      route={"Inbox"}
      SearchIcon={true}
      iconName={"search"}
      firstImg={require("../../../assets/PotatoSp.png")}
      drawerProps={true}
      heading={"Chat to a Potato"} >
      {/* body */}
      <View style={styles.body}>
        {allConversation.length > 0 ?
          <FlatList
            data={allConversation}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          /> :
          <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ alignSelf: "center", textAlign: "center", fontSize: 25, color: Colors.fontClr, width: "80%" }}>No messages yet, start conversation.</Text>
          </View>
        }
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
    borderWidth: 1,
    borderColor: Colors.ligthShade,
    height: 82,
  },
  title: {
    fontSize: 32,
  },
  edit: {
    backgroundColor: Colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  editView: { 
    top: "88%",
    width: "95%",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  body: {
    flex: 7,
    borderWidth: 1,
    borderColor: Colors.shade,
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  time: {
    width: "80%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "80%"
  },
  activeStatus: {
    height: 14,
    borderWidth: 2,
    width: 14,
    borderRadius: 7,
  },
  profilePhoto: {
    height: 58,
    borderRadius: 29,
    width: 58,
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  }
});
const mapStateToProp = ({ root }) => ({
  currentUser: root.currentUser,
  allConversation: root.allConversation,
})
const mapDispatchToProp = (dispatch) => ({
  get_conversations: (currentUser) => {
    dispatch(get_conversations(currentUser));
  },
})
export default connect(mapStateToProp, mapDispatchToProp)(Inbox);