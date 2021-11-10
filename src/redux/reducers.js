import {USER_DETAILS, USER_NAME } from "../redux/types"

const initial_state = {
    banner_image: "",
    user_array: [{name:""}],
    message_board: [{ id: "", content: "", from: "", to: "", time_stamp: "" }]
}

const User_details_reducers = (state = initial_state, action) => {

    console.log(action.payload)

    switch (action.type) {
        
        case USER_DETAILS:
            return { ...state, message_board:state.message_board.concat({id:action.id, content:action.message, from:action.from,to:action.to,time_stamp:action.time}) };
            case USER_NAME :
            return { ...state, user_array:state.user_array.concat({name:action.payload}) }
        default:
            return {...state }
    }
}
export default User_details_reducers