import React from 'react'
import { TouchableOpacity, } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style'

export default FooterTab = ({
    id,
    iconName,
    color,
    func
}) => {
    const tabicon = (iconName) => {
        if (iconName === "home")
            return (
                <MaterialCommunityIcons
                    name={"home-outline"}
                    size={40}
                    style={{ color: color }}
                />
            )
        else if (iconName === "inbox")
            return (
                <Fontisto
                    name={"email"}
                    size={35}
                    style={{
                        color: color
                    }} />
            )
        else if (iconName === "profile")
            return (
                <FontAwesome
                    name={"user-o"}
                    size={30}
                    style={{ color: color }} />
            )
        else return (
            <Entypo
                name={"dots-three-vertical"}
                size={30}
                style={{ color: color }} />
        )
    }
    return (
        <TouchableOpacity
            onPress={() => func(id)}
            style={styles.footerTabs}>
            {tabicon(iconName)}
        </TouchableOpacity>
    )
}
