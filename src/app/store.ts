import { configureStore } from "@reduxjs/toolkit";
import expenditureReducer from '../features/expense/expenditureSlice'
import revenueReducer from '../features/revenue/revenueSlice'

export const store = configureStore({
    reducer: {
        expenditure: expenditureReducer,
        revenue: revenueReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;