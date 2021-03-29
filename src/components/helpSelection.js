import Colors from "../common/Colors";
import IsHelpSelected from "../components/header/isHelpSelected";
import Octicons from "react-native-vector-icons/Octicons";
import { _gettopics, fltrProfesion } from "../store/action/action";
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";
import React, {
    useState,
    useEffect
} from "react";
import {
    TouchableOpacity,
    Text,
    FlatList,
    StyleSheet,
    View
} from 'react-native';
const Item = ({ title, func }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        < TouchableOpacity
            style={[styles.item, { backgroundColor: isSelected ? Colors.primary : Colors.white }]}
            onPress={() => {
                setIsSelected(!isSelected);
                func(title);

            }}>
            <Text
                style={[styles.title,
                { color: isSelected ? Colors.white : Colors.fontClr }
                ]}>{title}
            </Text>
            {isSelected
                &&
                <View style={styles.checkMark}>
                    <Octicons
                        name="check"
                        style={{ fontSize: 17, color: Colors.primary }}
                    />
                </View>
            }
        </TouchableOpacity>
    )
};
const HelpSelection = ({ radio, currentUser, topicList, _gettopics, freePotatoes, fltrProfesion }) => {
    const [array, setarray] = useState([]);

    useEffect(() => {
        _gettopics(currentUser)
    }, [])
    const renderItem = ({ item }) => (
        <Item title={item}
            func={(el) => {
                var i = array.indexOf(el);
                var arrayClone = array
                if (i !== -1) {
                    arrayClone.splice(i, 1,);
                }
                else {
                    arrayClone.push(el);
                }
                setarray(arrayClone)

            }} />
    );
    return (
        <View style={{ backgroundColor: Colors.white }}>
            <View style={{ height: '10%', alignItems: "center" }}>
                <IsHelpSelected radio={radio} />
            </View>

            <View style={{ height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: "90%", height: "95%" }}>
                    {topicList.length > 0 &&
                        <FlatList
                            data={topicList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    }
                </View>
            </View>
            <View style={{ height: '10%', alignItems: "center" }}>
                <View style={styles.btnDiv}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={styles.cancelBtn}>
                        <Text
                            style={{ color: Colors.primary, fontWeight: "bold", letterSpacing: 1 }}>Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            array.length > 0 ? fltrProfesion(array, freePotatoes, radio)
                                : Actions.Home()
                        }}
                        style={styles.doneBtn}>
                        <Text
                            style={{ color: Colors.primary, fontWeight: "bold", letterSpacing: 1 }}>Done
                         </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        paddingVertical: 6,
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "WorkSans-Regular",
        fontSize: 16,
        letterSpacing: 1,
        width: "95%",
    },
    doneBtn: {
        height: 40,
        width: 85,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: "rgba(228,241,255,1)",
        marginHorizontal: 5
    },
    cancelBtn: {
        height: 40,
        width: 85,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: Colors.white,
        marginHorizontal: 5
    },
    btnDiv: {
        width: "90%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    checkMark: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const mapStateToProp = ({ root }) => ({
    currentUser: root.currentUser,
    topicList: root.topicList,
    freePotatoes: root.freePotatoes,


})
const mapDispatchToProp = (dispatch) => ({
    _error: (errMsg) => {
        dispatch(_error(errMsg));
    },
    _gettopics: (currentUser) => {
        dispatch(_gettopics(currentUser));

    },
    fltrProfesion: (array, freePotatoes, radio) => {
        dispatch(fltrProfesion(array, freePotatoes, radio));

    },
})


export default connect(mapStateToProp, mapDispatchToProp)(HelpSelection);