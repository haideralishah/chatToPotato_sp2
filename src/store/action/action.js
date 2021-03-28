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

export const _getpotatoes = (currentUser) => {
    return async (dispatch) => {
        try {
            const option = {
                method: 'GET',
                url: `${BaseUrl}get_potatoes`,
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
            var potatoes = resp.data;
            potatoes.pop()
            console.log(potatoes)
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
                console.log(resp, "_login")
                if (resp.data.data.profile_completed) {
                    dispatch(_getpotatoes(resp))
                    // Actions.Home();

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
    console.log(recoverEmail)
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
                console.log(resp)
                // removeLastElem bcz this is not for rendreing
                var forgetpass = resp.data.data;
                console.log(forgetpass)
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
export const _CreateProfile = (profile, currentUser) => {
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
        }
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
            // console.log(resp,"_CreateProfile",currentUser.headers["access-token"],currentUser.headers.client,currentUser.headers.expiry,currentUser.headers.uid)
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