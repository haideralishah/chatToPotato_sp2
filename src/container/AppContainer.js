import React from 'react';
import { View } from 'react-native';
import AppHeader from '../components/header/AppHeader';
import AppFooter from '../components/Footer/Footer';

import PrivacyHeader from "../components/header/PrivacyHeader"
export default AppContainer = (
    { SearchIcon,
        PrivacyScreen,
        MidIcon,
        firstImg,
        secondImg,
        children,
        heading,
        route,
        iconName,
        _func,
    }) => {
    return (
        <View style={{ flex: 1, }}>
            {PrivacyScreen ?
                <PrivacyHeader
                    isProfile={true}
                    MidIcon={MidIcon}
                    goBack={true} /> :
                <AppHeader
                    _func={_func}
                    SearchIcon={SearchIcon}
                    heading={heading}
                    iconName={iconName}
                    secondImg={secondImg}
                    firstImg={firstImg} />
            }
            {children}
            <AppFooter
                heading={heading}
                route={route}
            />
        </View>
    )
}