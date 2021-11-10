import {USER_DETAILS} from "../redux/types"
import {USER_NAME} from "../redux/types"

const User_details_action = (message,id,name,time) => {
    console.log("from action", )
    return {
        type: USER_DETAILS,
        id: id,
        message:message,
        from:name,
        to:"",
        time:time
    }
}

export const User_name_action = (name) => {
    return {
        type: USER_NAME,
        payload: name
    }
}

export default User_details_action