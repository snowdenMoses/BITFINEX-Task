import * as actions from "./action"

const initialState = {
    users: []
}
export const reducer = (state = initialState, {type, payload})=>{
    switch(type){
        case actions.FETCHUSERS:
            return{
                ...state,
                users: payload
            }    
        default:
            return state
    }
}