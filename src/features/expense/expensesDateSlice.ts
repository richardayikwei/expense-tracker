import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ExpensesDateState {
    dates: string[]
}

const initialState: ExpensesDateState = {
    dates: []
}

export const expensesDateSlice = createSlice({
    name: 'dates',
    initialState,
    reducers: {
        addDate: (state, action: PayloadAction<string>) => {
            state.dates.push(action.payload);
        },
        deleteDate: (state, action: PayloadAction<number>) => {
            state.dates.filter((date, index) => {
                return index !== action.payload;
            })
        }
    }
})

export const { addDate, deleteDate } = expensesDateSlice.actions;

export default expensesDateSlice.reducer;