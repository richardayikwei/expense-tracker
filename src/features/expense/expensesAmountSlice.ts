import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ExpensesAmountState {
    amounts: number[]
}

const initialState: ExpensesAmountState = {
    amounts: [],
}

export const expensesAmountSlice = createSlice({
    name: 'amounts',
    initialState,
    reducers: {
        addAmount: (state, action: PayloadAction<number>) => {
            state.amounts.push(action.payload);
        },
        deleteAmount: (state, action: PayloadAction<number>) => {
            state.amounts.filter((amount, index) => {
                return index !== action.payload;
            })
        }
    }
});

export const { addAmount, deleteAmount } = expensesAmountSlice.actions;

export default expensesAmountSlice.reducer