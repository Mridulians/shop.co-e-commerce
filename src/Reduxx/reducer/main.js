import { combineReducers } from '@reduxjs/toolkit'
import { cartreducer } from "./reducer"

const rootred = combineReducers({
    cartreducer
})

export default rootred;

