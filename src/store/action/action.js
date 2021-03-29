import ActionTypes from '../constant/constant';
import axios from 'axios';
import BaseUrl from '../../common/BaseUrl';
import { Actions } from 'react-native-router-flux';
export const _loading = (bol) => {
    return dispatch => {
        dispatch({ type: ActionTypes.ISLOADER, payload: bol });
    }
}

export function _error(err, time) {
    return dispatch => {
        dispatch({ type: ActionTypes.ISERROR, payload: err });
        setTimeout(() => {
            dispatch({ type: ActionTypes.ISERROR, payload: "" });
        }, time ? time : 3000)
    }
}

export const _checkIsEmptyObj = (obj) => {
    for (var key in obj) {
        if (!obj[key]) {
            console.log(key + " is blank. Deleting it");
            return key
        }
    }
}
const _validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const _gettopics = (currentUser) => {
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `${BaseUrl}get_topics_list`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    'Content-Type': 'application/json',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
            };
            var resp = await axios(option);
            // removeLastElem bcz this is not for rendreing
            var topicList = resp.data.data;
            dispatch({ type: ActionTypes.TOPICLIST, payload: topicList });
            // Actions.Home();
        }
        catch (err) {
            dispatch(_loading(false));
            dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
        }
    }
}
export const fltrProfesion = (array, freePotatoes, radio) => {
    return async (dispatch) => {
        console.log(array, "arrayarrayarray", freePotatoes, radio);
        var freePotatoesClone = freePotatoes;
        var updatedPotatoes = []
        if (radio === "I need help") {
            for (let index = 0; index < freePotatoesClone.length; index++) {
                for (let j = 0; j < freePotatoesClone[index].can_help_in.length; j++) {
                    const found = array.find(element => element === freePotatoesClone[index].can_help_in[j]);
                    if (found) {
                        updatedPotatoes.push(freePotatoesClone[index])
                    }
                }
            }

        }
        else {
            for (let index = 0; index < freePotatoesClone.length; index++) {
                for (let j = 0; j < freePotatoesClone[index].struggles.length; j++) {
                    const found = array.find(element => element === freePotatoesClone[index].struggles[j]);
                    if (found) {
                        updatedPotatoes.push(freePotatoesClone[index])
                    }
                }
            }

        }
        Actions.Home({updatedPotatoes})
        console.log(updatedPotatoes, "updated")

    }
}

export const _getReviews = (currentUser, recipientUserId, id) => {
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `${BaseUrl}get_reviews?user_id=${recipientUserId ? recipientUserId : id}`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    "access-token": currentUser.headers["access-token"],
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.data.data.uid,
                },
            };
            var resp = await axios(option);
            // removeLastElem bcz this is not for rendreing
            var getReviews = resp;
            // console.log(getReviews, "getReviewsahmeds")
            dispatch({ type: ActionTypes.GETREVIEWS, payload: getReviews });
            // Actions.Home();
        }
        catch (err) {
            dispatch(_loading(false));
            console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
        }

    }
}
export const _getpotatoes = (currentUser) => {
    console.log(currentUser)
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `${BaseUrl}get_potatoes/?page=1`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    'Content-Type': 'application/json',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
            };
            var resp = await axios(option);
            // console.log(resp, "_getpotatoes")
            // removeLastElem bcz this is not for rendreing
            var potatoes = resp.data;
            potatoes.pop()
            // console.log(potatoes)
            dispatch({ type: ActionTypes.FREEPOTATOES, payload: potatoes });
            Actions.Home();
        }
        catch (err) {
            dispatch(_loading(false));
            dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
        }
    }
}

export const _blockChat = (allConversation, currentUser, identifier) => {
    // console.log(allConversation, "aaaaaaa")
    // console.log(currentUser, "currentUser")
    console.log(identifier, "identifier")
    return async (dispatch) => {
        try {
            const option = {
                method: 'POST',
                url: `${BaseUrl}block_user`,
                headers: {
                    "access-token": currentUser.headers["access-token"],
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
                data: { identifier }
            };
            var resp = await axios(option);
            // removeLastElem bcz this is not for rendreing
            var blockchat = resp.data;
            console.log(resp, "_blockChat")
            let allConversationClone = allConversation
            if (resp.data.message.indexOf("Successfully blocked") != -1) {
                for (let index = 0; index < allConversationClone.length; index++) {
                    if (allConversationClone[index].id == identifier) {
                        allConversationClone[index].blocked = true
                    }
                }

            }
            console.log(allConversation, "allConversationbbbbb")
            // potatoes.pop()
            // console.log  (potatoes)
            Actions.Inbox();

            // Actions.Home();
        }
        catch (err) {
            dispatch(_loading(false));
            // dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
        }
    }
}
export const _unBlockChat = (currentUser, identifier) => {
    console.log(currentUser, "currentUser")
    console.log(identifier, "identifier")
    return async (dispatch) => {
        try {
            const option = {
                method: 'POST',
                url: `${BaseUrl}unblock_user`,
                headers: {
                    "access-token": currentUser.headers["access-token"],
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
                data: { identifier }
            };
            var resp = await axios(option);

            // removeLastElem bcz this is not for rendreing
            // var potatoes = resp.data;
            console.log(resp, "_unBlockChat")
            Actions.Inbox();

            // potatoes.pop()
            // console.log  (potatoes)
            // dispatch({ type: ActionTypes.FREEPOTATOES, payload: potatoes });
            // Actions.Home();
        }
        catch (err) {
            dispatch(_loading(false));
            // dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
        }
    }
}
export const _clearChat = (currentUser, identifier) => {
    console.log(currentUser, "currentUser")
    console.log(identifier, "identifier")
    return async (dispatch) => {
        try {
            const option = {
                method: 'POST',
                url: `${BaseUrl}clear_chat`,
                headers: {
                    "access-token": currentUser.headers["access-token"],
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
                data: { identifier }
            };
            var resp = await axios(option);

            // removeLastElem bcz this is not for rendreing
            // var potatoes = resp.data;
            console.log(resp, "_clearChat")

            Actions.Inbox();
            // potatoes.pop()

            // console.log  (potatoes)
            // dispatch({ type: ActionTypes.FREEPOTATOES, payload: potatoes });
            // Actions.Home();
        }
        catch (err) {
            dispatch(_loading(false));
            // dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
        }
    }
}
export const _getChatIdentifier = (currentUser, id, first_name, last_name, blockStatus, avatar_url, status, story) => {
    // console.log(first_name ,"first_name, last_name ")
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `${BaseUrl}get_chat_identifier/?user_id=${id}`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    'Content-Type': 'application/json',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
            };
            var resp = await axios(option);
            var identifier = resp.data.data.identifier;
            console.log(identifier, "_getChatIdentifier")

            // var ws = new WebSocket(`ws:///staging.chattoapotato.com/cable`, null, {
            //     headers: {
            //         'cache-control': 'no-cache',
            //         "Allow-Cross-Origin": '*',
            //         'Content-Type': 'application/json',
            //         "access-token": currentUser.headers["access-token"],
            //         "token-type": "Bearer",
            //         client: currentUser.headers.client,
            //         expiry: currentUser.headers.expiry,
            //         uid: currentUser.headers.uid,
            //     },
            // })

            // ws.onopen = () => {
            //     // connection opened
            //     var msg = { "command": "subscribe", "identifier": `{\"channel\":\"APIChannel\", \"id\":\"${identifier}\"}` };
            //     // Send the msg object as a JSON-formatted string.
            //     ws.send(JSON.stringify(msg));
            //     var msg1 = { "command": "message", "identifier": `{\"channel\":\"APIChannel\", \"id\":\"${identifier}\"}`, "data": "{\"message\":\"hello fromaaa 38\",\"action\":\"chat\"}" };
            //     ws.send(JSON.stringify(msg1));
            // };

            // ws.onmessage = (e) => {
            //     // a message was received
            //     console.log(e.data, "onmessage");

            // };

            // ws.onerror = (e) => {
            //     // an error occurred
            //     console.log(e.message, "onerror");
            // };

            // ws.onclose = (e) => {
            //     // connection closed
            //     console.log(e.code, e.reason, "onclose");
            // };

            Actions.ChatScreen({ identifier, first_name, last_name, blockStatus, id, avatar_url, status, story })


        }
        catch (err) {
            dispatch(_loading(false));
            console.log(err, "_getChatIdentifier", JSON.parse(JSON.stringify(err.message)));
        }
    }
}
export const get_conversations = (currentUser,) => {
    // console.log("get_conversations", currentUser.headers["access-token"], currentUser.headers.client, currentUser.headers.expiry, currentUser.headers.uid)
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `${BaseUrl}get_conversations`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    'Content-Type': 'application/json',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
            };
            var resp = await axios(option);
            // console.log(resp, "get_conversationsasdasdasdasd")
            dispatch({ type: ActionTypes.ALLCONVERSATION, payload: resp.data, });
        }
        catch (err) {
            dispatch(_loading(false));
            console.log(err, "get_conversations", JSON.parse(JSON.stringify(err.message)));
        }
    }
}
export const get_chat_messages = (currentUser, identifier) => {
    console.log(identifier, "get_chat_messaddddges", currentUser.headers["access-token"], currentUser.headers.client, currentUser.headers.expiry, currentUser.headers.uid)
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `${BaseUrl}get_chat_messages/?identifier=${identifier}`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    'Content-Type': 'application/json',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },

            };
            var resp = await axios(option);
            console.log(resp)
            dispatch({ type: ActionTypes.SINGLEMSGS, payload: resp.data.data, });
        }
        catch (err) {
            dispatch(_loading(false));
            console.log(err, "error from get_chat_messages", JSON.parse(JSON.stringify(err.message)));
        }
    }
}

export const _sendMsg = (currentUser, identifier, message, messages) => {
    console.log(message, messages)
    return async (dispatch) => {
        try {
            var ws = new WebSocket(`ws:///staging.chattoapotato.com/cable`, null, {
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    'Content-Type': 'application/json',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
            })
            console.log(currentUser.headers.uid, currentUser.headers.expiry, currentUser.headers.client, currentUser.headers["access-token"], identifier, message)
            ws.onopen = () => {
                // connection opened
                var msg = { "command": "subscribe", "identifier": `{\"channel\":\"APIChannel\", \"id\":\"${identifier}\"}` };
                // Send the msg object as a JSON-formatted string.
                ws.send(JSON.stringify(msg));
                var msg1 = { "command": "message", "identifier": `{\"channel\":\"APIChannel\", \"id\":\"${identifier}\"}`, "data": `{\"message\":\"${message}\",\"action\":\"chat\"}` };
                ws.send(JSON.stringify(msg1));
            };

            ws.onmessage = (e) => {
                // a message was received
                let evalData = JSON.parse(e.data);
                if (evalData && evalData.identifier && evalData.message) {
                    let updatedThread = messages;
                    updatedThread.push(evalData.message)
                    dispatch(removeDuplicates(updatedThread))
                    // dispatch({ type: ActionTypes.SINGLEMSGS, payload: updatedThread, });
                    console.log(evalData.message, "evalData", updatedThread);

                }
            };

            ws.onerror = (e) => {
                // an error occurred
                console.log(e.message, "onerror");
            };

            ws.onclose = (e) => {
                // connection closed
                console.log(e.code, e.reason, "onclose");
            };
        }
        catch (err) {
            dispatch(_loading(false));
            console.log(err, "error from get_chat_messages", JSON.parse(JSON.stringify(err.message)));
        }
    }
}
function removeDuplicates(arrayOfObj) {
    return (dispatch) => {
        // Create an array of objects 
        var array = arrayOfObj;

        var jsonObject = array.map(JSON.stringify);

        console.log(jsonObject);

        var uniqueSet = new Set(jsonObject);
        var uniqueArray = Array.from(uniqueSet).map(JSON.parse);
        dispatch({ type: ActionTypes.SINGLEMSGS, payload: uniqueArray, });
        console.log(uniqueArray, "uniqueArray");
    }
}
// *********authentication*********
// *********authentication*********
// *********authentication*********
export const _login = (email, password) => {
    return async (dispatch) => {
        if (_checkIsEmptyObj({ email, password })) {
            dispatch(_error(`${_checkIsEmptyObj({ email, password })} is required.`));
        }
        else {
            dispatch(_loading(true))
            try {
                const option = {
                    method: 'POST',
                    url: `${BaseUrl}auth/sign_in`,
                    headers: {
                        'cache-control': 'no-cache',
                        "Allow-Cross-Origin": '*',
                    },
                    data: { email, password }
                };
                const resp = await axios(option);
                // console.log(resp, "_login")
                if (resp.data.data.imported) {
                    Actions.SelectCountry({ oldUser: true });
                }
                else if (resp.data.data.profile_completed) {
                    dispatch(_getpotatoes(resp))
                }
                else {
                    Actions.ProfileScreen();
                };
                dispatch({ type: ActionTypes.CURRENTUSER, payload: resp });
                dispatch(_loading(false));
            }
            catch (err) {
                dispatch(_loading(false));
                dispatch(_error(err.response.data.errors[0]));
                console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
            }
        }
    }
}


export const _Logout = (currentUser) => {
    return async (dispatch) => {
        console.log(currentUser, "currentUser", currentUser.headers["access-token"])
        try {
            const option = {
                method: 'DELETE',
                url: `${BaseUrl}auth/sign_out`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
            };
            const resp = await axios(option);
            console.log(resp, "_Logout")
            Actions.SignIn()
            dispatch({ type: ActionTypes.CURRENTUSER, payload: [] });
        }
        catch (err) {
            // dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
        }
    }
}


export const _signUp = (user) => {
    return async (dispatch) => {
        if (!_validateEmail(user["Username or email"])) {
            dispatch(_error(`Invalid email`));
        }
        else {
            if (_checkIsEmptyObj(user)) {
                dispatch(_error(`${_checkIsEmptyObj(user)} is required.`));
            }
            else {
                dispatch(_loading(true));
                let userClone = {
                    first_name: user["Full Name"],
                    last_name: user["Full Name"],
                    email: user["Username or email"],
                    country: user["Country"],
                    gender: user["Gender"],
                    birth_day: user["Birthday"].split("-")[0],
                    birth_month: user["Birthday"].split("-")[1],
                    birth_year: user["Birthday"].split("-")[2],
                    password: user["Password"],
                    password_confirmation: user["Password"],
                    potato_type: "free",
                    status: "personal",
                }
                try {
                    const option = {
                        method: 'POST',
                        url: `${BaseUrl}auth`,
                        headers: {
                            'cache-control': 'no-cache',
                            "Allow-Cross-Origin": '*',
                        },
                        data: userClone
                    }
                    const resp = await axios(option);
                    Actions.ProfileScreen();
                    dispatch({ type: ActionTypes.CURRENTUSER, payload: resp });
                    dispatch(_loading(false));
                }
                catch (err) {
                    dispatch(_loading(false));
                    dispatch(_error(err.response.data.errors[0]));
                    console.log(err.response, "error from _signUp", err.response.data.errors);
                }
            }
        }
    }
}
export const _forgerPass = (recoverEmail) => {
    // console.log(recoverEmail)
    return async (dispatch) => {
        if (!_validateEmail(recoverEmail)) {
            dispatch(_error(`Invalid email`));
        }
        else {
            dispatch(_loading(true))
            try {
                const option = {
                    method: 'POST',
                    url: `${BaseUrl}auth/reset_password`,
                    headers: {
                        'cache-control': 'no-cache',
                        "Allow-Cross-Origin": '*',
                        'Content-Type': 'application/json',
                    },
                    data: { email: recoverEmail }
                };
                var resp = await axios(option);
                // console.log(resp)
                // removeLastElem bcz this is not for rendreing
                var forgetpass = resp.data.data;
                // console.log(forgetpass)
                dispatch({ type: ActionTypes.FORGETPASS, payload: forgetpass });
                Actions.SignIn();
                dispatch(_loading(false))
            }
            catch (err) {
                dispatch(_loading(false));
                dispatch(_error(err.response.data.errors[0]));
                console.log(err.response, "error from _login", JSON.parse(JSON.stringify(err.message)));
            }
        }

    }
}
// *********authentication*********
// *********authentication*********
// *********authentication*********
export const _CreateProfile = (profile, currentUser, edit,) => {
    // console.log(profile.Description)
    return async (dispatch) => {
        let profileClone = {
            story: profile.StoryTitle,
            first_name: currentUser.data.data.first_name,
            last_name: currentUser.data.data.last_name,
            can_help_in: profile.Help,
            struggles: profile.Struggles,
            description: profile.Description,
            current_mood: profile.Mode,
            country: currentUser.data.data.country,
            gender: currentUser.data.data.gender,
            current_problem: profile.CurrentProblems,
            helpful_moto: profile.Helpfulmotto,
            country: "Pakistan",
        }
        if (profile.country) profileClone.country = profile.country
        // console.log(profileClone, "profileClone", profile)
        try {
            dispatch(_loading(true));
            const option = {
                method: 'PUT',
                url: `${BaseUrl}profile`,
                headers: {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                    "access-token": currentUser.headers["access-token"],
                    "token-type": "Bearer",
                    client: currentUser.headers.client,
                    expiry: currentUser.headers.expiry,
                    uid: currentUser.headers.uid,
                },
                data: profileClone
            }
            const resp = await axios(option);
            // console.log(resp, "_CreateProfile",)


            Actions.Ready({ resp })

            dispatch(_loading(false));
        }
        catch (err) {
            dispatch(_loading(false));
            dispatch(_error(err.response.data.errors[0]));
            console.log(err.response, "error from _CreateProfile", err.response.data.errors);
        }
    }
}