import { createStore } from "redux"
import { combineReducers } from "redux"
import User_details_reducers from "./reducers"

const combine_reducers = combineReducers({
    user_details: User_details_reducers
})

export const store = createStore(combine_reducers, window.__REDUX__DEVTOOLS__EXTENSIONS__ &&
    window.__REDUX__DEVTOOLS__EXTENSION__())