import ActionTypes from '../constant/constant';
const INITIAL_STATE = {
    isLoader: false,
    isError: "",
    topicList: [],
    currentUser: [],
    getReviews: [],
    freePotatoes: [],
    forgetpass: [],
    blockchat: [],
    allConversation: [],
    reviews: [],
    singleMsgs: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FORGETPASS:
            return ({
                ...state,
                forgetpass: action.payload
            })
        case ActionTypes.TOPICLIST:
            return ({
                ...state,
                topicList: action.payload
            })
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })
        case ActionTypes.FREEPOTATOES:
            return ({
                ...state,
                freePotatoes: action.payload
            })
        case ActionTypes.ISLOADER:
            return ({
                ...state,
                isLoader: action.payload
            })
        case ActionTypes.ISERROR:
            return ({
                ...state,
                isError: action.payload
            })
        case ActionTypes.ALLCONVERSATION:
            return ({
                ...state,
                allConversation: action.payload
            })
        case ActionTypes.SINGLEMSGS:
            return ({
                ...state,
                singleMsgs: action.payload
            })
        case ActionTypes.REVIEWS:
            return ({
                ...state,
                reviews: action.payload
            })
        case ActionTypes.BLOCKCHAT:
            return ({
                ...state,
                blockchat: action.payload
            })
        case ActionTypes.GETREVIEWS:
            return ({
                ...state,
                getReviews: action.payload
            })
        default:
            return state;
    }

}