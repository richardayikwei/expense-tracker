import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ExpenseState {
    expense: string;
    amount: number;
    date: string;
}

type RootExpenseState = ExpenseState[];

const initialState: RootExpenseState = [
    { expense: 'car', amount: 8, date: '22/10/2024' },
    { expense: 'house', amount: 80, date: '22/10/2024' }
]

export const expenditureSlice = createSlice({
    name: 'expenditure',
    initialState,
    reducers: {
        AddExpenditure: (state, action: PayloadAction<ExpenseState>) => {
            state.push(action.payload)
        },
        deleteExpenditure: (state, action: PayloadAction<number>) => {
            state.filter((entry, index) => index !== action.payload)
        }
    }
});

export const { AddExpenditure, deleteExpenditure } = expenditureSlice.actions;
export default expenditureSlice.reducer;