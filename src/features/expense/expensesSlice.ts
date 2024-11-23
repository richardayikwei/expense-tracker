import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface ExpenseState {
    expenses: string[]
}

const initialState: ExpenseState = {
    expenses: []
}

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<string>) => {
            state.expenses.push(action.payload)
        },
        deleteExpense: (state, action: PayloadAction<number>) => {
            state.expenses.filter((expense, index) => {
                return index !== action.payload;
            })
        }
    }
});

export const { addExpense, deleteExpense } = expensesSlice.actions;

export default expensesSlice.reducer;