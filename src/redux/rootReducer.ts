 import { combineReducers } from "@reduxjs/toolkit";
 import cartReducer from "./cartSlice";


 const rootReducer = combineReducers({
    cart:cartReducer
 })

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;


// reducers.ts

// import { combineReducers } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;
