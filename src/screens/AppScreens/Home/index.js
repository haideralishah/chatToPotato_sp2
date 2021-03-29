import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';
import PotatoCart from '../../../components/PotatoCart';
import Colors from '../../../common/Colors';
import RadioForm from 'react-native-simple-radio-button';
import Entypo from "react-native-vector-icons/Entypo"
import styles from './style'
import { Actions } from 'react-native-router-flux'
import { Text, Switch, SafeAreaView, TouchableOpacity, View, ImageBackground, ScrollView, FlatList } from 'react-native';
const Home = ({ freePotatoes, allConversation, updatedPotatoes }) => {
  let ratingAvgratingAvg;
  useEffect(() => {
    ratingAvg()
  }, [])

  const ratingAvg = () => {
    freePotatoes.map((data) => {
      if (data.reviews.length > 0) {
        class shopRatingCollection extends Array {
          sum(key) {
            return this.reduce((a, b) => Number(a) + Number((b[key] || 0)), 0);
          }
        }
        const traveler = new shopRatingCollection(...data.reviews);
        const sumOfRating = traveler.sum("rating");
        ratingAvgratingAvg = sumOfRating / data.reviews.length;
      }
    })
  }
  const [radio, setradio] = useState("I need help");
  const [isEnabled, setIsEnabled] = useState(true);
  // data for radio buttons
  var radio_props = [
    { label: 'I need help', value: 'I need help' },
    { label: 'I want to help', value: "I want to help" }
  ];
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <AppContainer route={"Home"} secondImg={require("../../../assets/filter.png")} firstImg={require("../../../assets/PotatoSp.png")} drawerProps={true} heading={"Chat to a Potato"} >
      {/* body */}
      <ImageBackground
        //  resizeMode="contain"
        source={require("../../../assets/bevelBG.png")}
        style={{ flex: 7.8, width: "100%", }}>
        <SafeAreaView>

          <ScrollView style={{ paddingHorizontal: "5%" }}>

            <View style={{ height: 50, flexDirection: "row", }}>
              <TouchableOpacity style={styles.Public}>
                <Text style={[styles.ProfessionalTxt, { color: Colors.white }]}>Free Public potatoes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Professional}>
                <Text style={styles.ProfessionalTxt}>Professional potatoes</Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 55, justifyContent: "center", paddingHorizontal: "5%" }}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                buttonSize={10}
                formHorizontal={true}
                style={{ justifyContent: "space-between", }}
                labelStyle={styles.radio}
                onPress={(value) => { setradio(value) }}
              />
            </View>

            <View style={styles.HumansContainer}>
              <Text style={styles.HumansWho}>
                {
                  radio === "I need help" ? "Humans who can help you" : "Human who need your help"
                }
              </Text>
              <Switch
                trackColor={{ false: Colors.shade, true: Colors.shade }}
                thumbColor={isEnabled ? Colors.green : Colors.shade}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <TouchableOpacity onPress={() => Actions.HelpSelection({ radio })}
              activeOpacity={0.7}
              style={styles.INeedContainer}>
              {
                radio === "I need help" ? < Text style={styles.INeed}>I need help in</Text>
                  : < Text style={styles.INeed}> I can help in</Text>
              }
              <Entypo name="chevron-small-right" style={{ color: Colors.fontClr, fontSize: 25 }} />
            </TouchableOpacity>
            {updatedPotatoes ?
              <FlatList
                data={updatedPotatoes}
                renderItem={({ item }) => (
                  <PotatoCart potato={item} radio={radio} blockStatus={item.blocked} />
                )}
                keyExtractor={(item, index) => String(index)}
              />
              :
              freePotatoes.length > 0 &&
              <FlatList
                data={freePotatoes}
                renderItem={({ item }) => (
                  <PotatoCart potato={item} radio={radio} blockStatus={item.blocked} />
                )}
                keyExtractor={(item, index) => String(index)}
              />
            }
          </ScrollView>
        </SafeAreaView>

      </ImageBackground >
    </AppContainer >
  )
};
const mapStateToProp = ({ root }) => ({
  freePotatoes: root.freePotatoes,
  allConversation: root.allConversation,

})
const mapDispatchToProp = (dispatch) => ({

})
export default connect(mapStateToProp, mapDispatchToProp)(Home);