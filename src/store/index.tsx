import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { authApi } from "../api/AuthApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";



const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
      
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(authApi.middleware,),
});

setupListeners(store.dispatch);
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export type RootState = ReturnType<typeof store.getState>;
export default store;
