import Colors from "../../common/Colors";
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { _gettopics } from "../../store/action/action";
import { Actions } from "react-native-router-flux";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
    ImageBackground,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const SortScreen = () => {
    const [value, onChangeText] = React.useState('');
    const [value1, onChangeText1] = React.useState('');
    return (
        <ImageBackground
            source={require("../../assets/bevelBG.png")}
            style={{ width: "100%", }}>
            < ScrollView>
                <View style={{ height: windowHeight / 11.5, alignItems: "center" }}>
                    <View style={styles.container}>
                        <Text style={{ fontSize: 20, color: Colors.fontClr, fontFamily: "WorkSans-SemiBold" }}>Sort and filter</Text>
                        <TouchableOpacity
                            onPress={() => Actions.pop()} >
                            <AntDesign
                                name="close"
                                style={{ fontSize: 35, color: Colors.shade }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: windowHeight / 1.285, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: "90%", height: "95%" }}>
                        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
                            <FontAwesome
                                name="sort-amount-desc"
                                style={{ fontSize: 15, color: Colors.fontClr }}
                            />
                            <Text
                                style={styles.sortText}>Most relevant
                         </Text>
                        </View>
                        <View style={styles.sessionType}>
                            <Text
                                style={styles.sortText}>Session type
                         </Text>
                            <TouchableOpacity>
                                <MaterialIcons
                                    name="keyboard-arrow-down"
                                    style={{ fontSize: 20, color: Colors.fontClr }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sessionTypeView}>
                            <View style={{ flex: 6, justifyContent: "space-evenly" }}>
                                <Text style={{ color: Colors.fontClr }}>Session type</Text>
                                <Text style={{ color: Colors.fontClr }}>Session type</Text>
                            </View>
                            <View style={styles.budgetText}>
                                <Text
                                    style={styles.budgetText}>Budget
                                    </Text>
                                <TouchableOpacity>
                                    <MaterialIcons
                                        name="keyboard-arrow-down"
                                        style={{ fontSize: 20, color: Colors.fontClr }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.Budgetvalue}>
                            <View style={styles.minText}>
                                <Text
                                    style={styles.budgetText}>Min.
                             </Text>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={text => onChangeText1(text)}
                                        value={value1}
                                        keyboardType='numeric'
                                        placeholder="Any"
                                    />
                                    <Feather
                                        name="dollar-sign"
                                        style={{ fontSize: 10, color: Colors.fontClr }}
                                    />
                                </View>
                            </View>
                            <View style={styles.input2TextView}>
                                <Text
                                    style={styles.budgetText}>Max.
                             </Text>
                                <View style={styles.input2View}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={text => onChangeText(text)}
                                        value={value}
                                        keyboardType='numeric'
                                        placeholder="Any"

                                    />
                                    <Feather
                                        name="dollar-sign"
                                        style={{ fontSize: 10, color: Colors.fontClr }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 3.8, }}></View>
                    </View>
                </View>
                <View style={{ height: windowHeight / 10, alignItems: "center" }}>
                    <View style={styles.btnDiv}>
                        <TouchableOpacity
                            onPress={() => Actions.pop()}
                            style={styles.cancelBtn}>
                            <Text
                                style={{ color: Colors.fontClr, fontWeight: "bold", letterSpacing: 1 }}>Cancel
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.doneBtn}>
                            <Text
                                style={{ color: Colors.white, fontWeight: "bold", letterSpacing: 1 }}>Apply
                         </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    )
};
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
    doneBtn: {
        height: 40,
        width: 85,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: Colors.green,
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
    container: {
        width: "90%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    sessionTypeView: {
        flex: 2.8,
        borderTopWidth: 0.5,
        borderColor: Colors.fontClr,
        borderBottomWidth: 0.5
    },
    budgetText: {
        flex: 4,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    minText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    inputView: {
        height: 33,
        paddingHorizontal: 5,
        marginHorizontal: 7,
        borderColor: Colors.fontClr,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 5,
        flexDirection: "row",
        width: 100,
        borderWidth: 0.5
    },
    input2View: {
        height: 33,
        marginHorizontal: 7,
        paddingHorizontal: 5,
        borderColor: Colors.fontClr,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 5,
        flexDirection: "row",
        width: 100,
        borderWidth: 0.5
    },
    Budgetvalue: {
        flex: 1.4,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: Colors.fontClr
    },
    input2TextView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    input: {
        height: 33,
        fontSize: 13,
        padding: 0,
        width: "80%",
        borderColor: 'gray'
    },
    budgetText: {
        fontFamily: "WorkSans-SemiBold",
        color: Colors.fontClr
    },
    sortText: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 15,
        color: Colors.fontClr,
        paddingHorizontal: 10
    },
    sessionType: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
});
export default SortScreen;