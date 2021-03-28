import AsyncStorage from '@react-native-community/async-storage';
import SignIn from '../screens/SignIn/index';
import SignUp from '../screens/SignUp/index';
import WalkThrough from '../screens/WalkThrough/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import ICanHelpIn from '../screens/ICanHelpIn/index';
import MyStruggles from '../screens/MyStruggles/index';
import Trying from '../screens/PrivacyScreen';
import AboutUsScreen from '../screens/AboutUsScreen/index';
import TellUsMore from '../screens/TellUsMore/index';
import CurrentMode from '../screens/CurrentMode/index';
import Ready from '../screens/Ready/index';
import Home from '../screens/AppScreens/Home/index';
import Inbox from '../screens/AppScreens/Inbox/index';
import Profile from '../screens/AppScreens/Profile/index';
import DotMenu from '../screens/AppScreens/DotMenu/index';
// import MessageScreen from '../screens/MessageScreen/index';
import HelpSelection from '../components/helpSelection';
import PrivacySceen from '../screens/PrivacyScreen/index';
import TermsAndCondition from '../screens/TremsAndCondition/index';
import HowToChatScreen from "../screens/HowToChatScreen/index";
import ContactScreen from "../screens/ContactScreen/index";
import ForgetScreen from "../screens/ForgetScreen/index";
import SettingScreen from "../screens/AppScreens/DotMenu/SettingScreen/index"
import React,
{
  useEffect,
  useState
} from 'react';
import {
  Router,
  Scene,
} from 'react-native-router-flux'
export default Route = () => {
  const [initial, setInitial] = useState("WalkThrough");
  useEffect(() => {
    // routInitiliaz()
  })
  // const routInitiliaz = async () => {
  //   const WalkThrough = await AsyncStorage.getItem('WalkThrough')
  //   if (WalkThrough) {
  //     setInitial("SignIn")
  //   }
  //   await AsyncStorage.setItem('WalkThrough', "true")
  // }
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#f27500" }}
      titleStyle={{ color: "white" }}
      tintColor="white">
      <Scene>
          <Scene
            key='WalkThrough'
            component={WalkThrough}
            hideNavBar={true}
            initial={initial === "WalkThrough" ? true : false}
          />
          <Scene
            key='SignIn'
            component={SignIn}
            hideNavBar={true}
            initial={initial === "SignIn" ? true : false} />
          <Scene
            key='ForgetScreen'
            component={ForgetScreen}
            hideNavBar={true}
          />
          <Scene
            key='SignUp'
            component={SignUp}
            hideNavBar={true}
          />
          <Scene
            key='ProfileScreen'
            component={ProfileScreen}
            hideNavBar={true}
          />
          <Scene
            key='ICanHelpIn'
            component={ICanHelpIn}
            hideNavBar={true}
          />
          <Scene
            key='MyStruggles'
            component={MyStruggles}
            hideNavBar={true}
          />
          <Scene
            key='TellUsMore'
            component={TellUsMore}
            hideNavBar={true}
          />
          <Scene
            key='CurrentMode'
            component={CurrentMode}
            hideNavBar={true}
          />
          <Scene
            key='Ready'
            component={Ready}
            hideNavBar={true}
          />
          <Scene
            key='HelpSelection'
            component={HelpSelection}
            hideNavBar={true}
          />
          <Scene
            key='DotMenu'
            component={DotMenu}
            hideNavBar={true}
          />
          <Scene
            key='ContactScreen'
            component={ContactScreen}
            hideNavBar={true}
          />
          <Scene
            key='HowToChatScreen'
            component={HowToChatScreen}
            hideNavBar={true}
          />
          <Scene
            key='AboutUsScreen'
            component={AboutUsScreen}
            hideNavBar={true}
          />
          <Scene
            key='SettingScreen'
            component={SettingScreen}
            hideNavBar={true}
          />
          <Scene
            key='PrivacySceen'
            component={PrivacySceen}
            hideNavBar={true}
          />
          <Scene
            key='TermsAndCondition'
            component={TermsAndCondition}
            hideNavBar={true}
          />
          <Scene
            key='Home'
            component={Home}
            hideNavBar={true}
          />
          <Scene
            key='Inbox'
            component={Inbox}
            hideNavBar={true}
          />
          <Scene
            key='Profile'
            component={Profile}
            hideNavBar={true}
          />
          <Scene
            key='DotMenu'
            component={DotMenu}
            hideNavBar={true}
          />
        {/* <Scene
          key='MessageScreen'
          component={MessageScreen}
          hideNavBar={true}
        /> */}
        {/* <Scene
          key='ForgetScreen'
          component={ForgetScreen}
          hideNavBar={true}
        /> */}
      </Scene>
    </Router>
  );
}