import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import StackNavigation from './src/navigation/StackNavigation';
import SplashScreen from './src/screens/SplashScreen/index';

const RootContainer = () => {
  // const [Splash, setSplash] = useState(true);
  const [Splash, setSplash] = useState(false);

  useEffect(() => {
    console.disableYellowBox = true

    

  }, []);

  // setTimeout(() => {
    // setSplash(false)
  // }, 0);

  return (
    // Splash ?
      <SplashScreen />
      // :
      // <StackNavigation />
  )
};

const mapStateToProp = ({ root }) => ({
});
const mapDispatchToProp = (dispatch) => ({
});
export default connect(mapStateToProp, mapDispatchToProp)(RootContainer);

