import { configureStore, Store } from "@reduxjs/toolkit";
import rootReducer from "./ducks/rootReducer";

const store: Store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch