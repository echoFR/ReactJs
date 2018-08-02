import * as actionTypes from '../contants/userinfo'

export default function userinfo(state={},action){
    switch(action.type){
        case actionTypes.USERINFO_LOGIN:
            return action.data
        case actionTypes.UPDATE_CITYNAME:
            return action.data
        default: 
            return state
    }
}