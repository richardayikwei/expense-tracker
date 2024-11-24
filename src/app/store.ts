import { configureStore } from "@reduxjs/toolkit";
import expenditureReducer from '../features/expense/expenditureSlice'

export const store = configureStore({
    reducer: {
        expenditure: expenditureReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;