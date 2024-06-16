import { configureStore } from '@reduxjs/toolkit';
import rootred from "./Reduxx/reducer/main"


const store = configureStore({
    reducer: rootred,
})

export default store;


