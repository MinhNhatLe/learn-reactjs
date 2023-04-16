import countereReducer from "../features/Counter/counterSlice"
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
    //count là tên state
    count: countereReducer,
}

// dùng configureStore của redux để lấy thằng reducer đã export default ra
const store = configureStore({
    reducer: rootReducer,
})

export default store;