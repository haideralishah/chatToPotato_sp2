import Colors from "../../../common/Colors";
import HelpButtons from "../../../components/helpButton";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppContainer from '../../../container/AppContainer';
import styles from "./style"
import {
  Actions
} from "react-native-router-flux";
import {
  connect
} from 'react-redux';
import {
  _gettopics,
  _CreateProfile
} from "../../../store/action/action";
import React, {
  useState,
  useEffect
} from "react";
import {
  Text, View, ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions
} from 'react-native';
const windowHeight = Dimensions.get('window').height - 24;
const flex1 = windowHeight / 10;
const Profile = ({ currentUser, _gettopics, _CreateProfile }) => {
  useEffect(() => {
    _gettopics(currentUser);
  }, [])
  const [Help, setHelp] = useState([]);
  const [edit, setEdit] = useState(true);
  const [Description, setDescription] = useState(currentUser.data.data.description)
  const [CurrentProblems, setCurrent_problem] = useState(currentUser.data.data.current_problem)
  const [Helpfulmotto, sethelpful_moto] = useState(currentUser.data.data.helpful_moto)
  const [Mode, setMode] = useState(currentUser.data.data.current_mood)
  return (
    <AppContainer
      route={"Profile"}
      firstImg={require("../../../assets/Potato.png")}
      drawerProps={true}
      heading={"Chat to a Potato"} >
      {/* body */}
      <ImageBackground
        source={require("../../../assets/bevelBG.png")}
        style={{ flex: 7.8, width: "100%", }}>
        <ScrollView style={{ height: flex1 * 6.5 }}>
          <View style={[styles.mainView, { height: flex1 * 6.3, }]}>
            <View style={styles.RatingView}>
              <View style={styles.ProfileLogoView}>
                <View style={styles.ProfileLogo}>
                  <Text
                    style={{ fontSize: 85, color: Colors.white }}>G
               </Text>
                  <TouchableOpacity style={styles.CameraIcon}>
                    <View style={styles.Camera}>
                      <Entypo
                        name="camera"
                        style={{ fontSize: 14, color: Colors.fontClr }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flex: 1.2, alignItems: "center" }}>
                <Text
                  style={[styles.Title, { color: Colors.fontClr }]}> Gulnaar Tahir
              </Text>
              </View>
              <View style={{ flex: 1.5, alignItems: "center" }}>
                <Text
                  style={styles.ThanksMsg}>Life is like glitter, it has many colors.
               </Text>
                <TouchableOpacity>
                  <Text
                    style={styles.editStory}>Edit Story
                </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 2.5, alignItems: "center", justifyContent: "center" }}>
                <View style={styles.ratingView}>
                  <FontAwesome
                    name="star"
                    style={styles.rating}
                  />
                  <FontAwesome
                    name="star"
                    style={styles.rating}
                  />
                  <FontAwesome
                    name="star"
                    style={styles.rating}
                  />
                  <FontAwesome
                    name="star"
                    style={styles.rating}
                  />
                  <FontAwesome
                    name="star"
                    style={styles.rating}
                  />
                </View>
                <Text
                  style={styles.review}>4.8 (86 reviews)
               </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.iCanHelpIn}>
              <Text
                style={{ fontFamily: "WorkSans-Light" }}>I can help in
            </Text>
              <TouchableOpacity
                onPress={() => Actions.ICanHelpIn({ edit })}
              >
                <Text style={{ color: Colors.primary, fontSize: 14 }}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.iCanHelpInView}>
              <View style={styles.helpButtons}>
                {currentUser.data.data.can_help_in.length > 0 && currentUser.data.data.can_help_in.map((data, index) => {
                  return (
                    <HelpButtons
                      key={index}
                      borderRadius={Platform.OS === "ios" && 10}
                      index={index}
                      title={data}
                      checkColor={Colors.primary}
                      unSelectedColor={Colors.primary}
                      selectedColor={Colors.white}
                      _func={(title, i) => {
                        var foundHelp = Help.indexOf(title);
                        if (foundHelp == -1) {
                          let ICanHelpInClone = Help;
                          ICanHelpInClone.push(title);
                          setHelp(ICanHelpInClone);
                        }
                        else {
                          let ICanHelpInClone = Help;
                          ICanHelpInClone.splice(foundHelp, 1);
                          setHelp(ICanHelpInClone);
                        }
                      }}
                      selectedBgColor={Colors.primary}
                      unSelectedBgColor="rgba(228, 241, 255,1)" />)
                })}
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.iCanHelpIn}>
              <Text
                style={{ fontFamily: "WorkSans-Light" }}>My struggles…
            </Text>
              <TouchableOpacity
                onPress={() => Actions.MyStruggles({ edit })}
              >
                <Text
                  style={{ color: Colors.primary, fontSize: 14 }}>Edit
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 6.5, width: "90%", backgroundColor: Colors.white, borderRadius: Platform.OS === "ios" && 15, }}>
              <View style={styles.helpButtons}>
                {currentUser.data.data.struggles.length > 0 && currentUser.data.data.struggles.map((data, index) => {
                  return (
                    <HelpButtons
                      borderRadius={Platform.OS === "ios" && 10}
                      key={index}
                      index={index}
                      title={data}
                      _func={(title, i) => {
                        var foundHelp = Help.indexOf(title);
                        if (foundHelp == -1) {
                          let ICanHelpInClone = Help;
                          ICanHelpInClone.push(title);
                          setHelp(ICanHelpInClone);
                        }
                        else {
                          let ICanHelpInClone = Help;
                          ICanHelpInClone.splice(foundHelp, 1);
                          setHelp(ICanHelpInClone);
                        }
                      }}
                      checkColor={Colors.secondary}
                      unSelectedColor={Colors.secondary}
                      selectedColor={Colors.white}
                      selectedBgColor={Colors.secondary}
                      unSelectedBgColor="rgba(255, 238, 223,1)" />)
                })}
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.iCanHelpIn}>
              <Text
                style={{ fontFamily: "WorkSans-Light" }}>Discription
            </Text>
              <TouchableOpacity
                onPress={() => {
                  _CreateProfile({
                    edit,
                    Description,
                  }, currentUser)
                }
                }
              >
                <Text
                  style={{ color: Colors.primary, fontSize: 14 }}>Save
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 6.5, width: "90%" }}>
              <TextInput
                multiline={true}
                numberOfLines={10}
                value={Description}
                placeholder={"Write a detailed discription..."}
                onChangeText={text => setDescription(text)}
                style={styles.textArea} />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.iCanHelpIn}>
              <Text
                style={{ fontFamily: "WorkSans-Light", marginTop: 10 }}>Current Mood
            </Text>
              <TouchableOpacity
                onPress={() => {
                  _CreateProfile({
                    edit,
                    Mode,
                  }, currentUser)
                }
                }>
                <Text
                  style={{ color: Colors.primary, fontSize: 14, marginTop: 10 }}>Edit
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 6.5, width: "90%" }}>
              <TextInput
                style={{
                  padding: 10,
                  marginTop: 10,
                  backgroundColor: Colors.white,
                  borderRadius: Platform.OS === "ios" && 10,
                  borderWidth: 0.5,
                  borderColor: Colors.shade
                }}
                value={Mode}
                placeholder={"Write a detailed discription..."}
                onChangeText={text => setMode(text)}
              />
            </View>
          </View>
          <View style={styles.bioDataView}>
            <View style={{ height: "100%", width: "90%", justifyContent: "space-evenly" }}>
              <View>
                <Text style={{ fontFamily: "WorkSans-Light" }}>Biodata
              </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bioDataText}>From</Text>
                <Text style={styles.bioDataText}>: {currentUser.data.data.country}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bioDataText}>Age</Text>
                <Text style={styles.bioDataText}>: 24</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bioDataText}>Gender</Text>
                <Text style={styles.bioDataText}>: {currentUser.data.data.gender}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bioDataText}>Avg. response time
                </Text>
                <Text style={styles.bioDataText}>: {currentUser.data.data.average_response_time == null ? "1 hour" : currentUser.data.data.average_response_time}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.bioDataText}>Total chats
                </Text>
                <Text style={styles.bioDataText}>: 89 </Text>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.iCanHelpIn}>
              <Text
                style={{ fontFamily: "WorkSans-Light", marginTop: 10 }}>Current problem
            </Text>
              <TouchableOpacity
                onPress={() => {
                  _CreateProfile({
                    edit,
                    CurrentProblems,
                  }, currentUser)
                }
                } >
                <Text
                  style={{ color: Colors.primary, fontSize: 14, marginTop: 10 }}>Edit
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 6.5, width: "90%" }}>
              <TextInput
                multiline={true}
                numberOfLines={10}
                value={CurrentProblems}
                placeholder={"Write a detailed discription..."}
                onChangeText={text => setCurrent_problem(text)}
                style={styles.textArea} />
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <View style={styles.iCanHelpIn}>
              <Text
                style={{ fontFamily: "WorkSans-Light", marginTop: 10 }}>Helpful moto
            </Text>
              <TouchableOpacity
                onPress={() => {
                  _CreateProfile({
                    edit,
                    Helpfulmotto,
                  }, currentUser)
                }
                }
              >
                <Text
                  style={{ color: Colors.primary, fontSize: 14, marginTop: 10 }}>Edit
              </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 6.5, width: "90%" }}>
              <TextInput
                multiline={true}
                numberOfLines={10}
                value={Helpfulmotto}
                placeholder={"Write a detailed discription..."}
                onChangeText={text => sethelpful_moto(text)}
                style={styles.helpfulmoto} />
            </View>
          </View>
        </ScrollView>
      </ImageBackground >
    </AppContainer >
  )
};
const mapStateToProp = ({ root }) => ({
  isLoader: root.isLoader,
  isError: root.isError,
  currentUser: root.currentUser,
  topicList: root.topicList,

})
const mapDispatchToProp = (dispatch) => ({
  _error: (errMsg) => {
    dispatch(_error(errMsg));
  },
  _gettopics: (currentUser) => {
    dispatch(_gettopics(currentUser));

  },
  _CreateProfile: (profile, currentUser) => dispatch(_CreateProfile(profile, currentUser)),


})
export default connect(mapStateToProp, mapDispatchToProp)(Profile);