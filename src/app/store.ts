import { configureStore } from "@reduxjs/toolkit";
import ExpensesReducer from '../features/expense/expensesSlice'
import ExpensesAmountReducer from '../features/expense/expensesAmountSlice'
import ExpensesDateReducer from '../features/expense/expensesDateSlice'

export const store = configureStore({
    reducer: {
        expenses: ExpensesReducer,
        amount: ExpensesAmountReducer,
        date: ExpensesDateReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;