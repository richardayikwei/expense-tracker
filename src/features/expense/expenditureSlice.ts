import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { State } from "../../type/typeInterface";

type RootExpenseState = State[];


const initialState: RootExpenseState = [
    { item: 'car', amount: 8, date: '22/10/2024', liked: true, hidden: false },
    { item: 'house', amount: 80, date: '22/10/2024', liked: true, hidden: false },
    { item: 'house', amount: 80, date: '22/10/2024', liked: true, hidden: false },
]

export const expenditureSlice = createSlice({
    name: 'expenditure',
    initialState,
    reducers: {
        addExpenditure: (state, action: PayloadAction<State>) => {
            state.push(action.payload)
        },
        deleteExpenditure: (state, action: PayloadAction<number>) => {
            return state.filter((entry, index) => index !== action.payload)
        },
        toggleLikeExpenditure: (state, action: PayloadAction<number>) => {
            state[action.payload].liked === true ?
                state[action.payload].liked = false :
                state[action.payload].liked = true;
        },
        toggleHiddenExpenditure: (state, action: PayloadAction<number>) => {
            state[action.payload].hidden === true ?
                state[action.payload].hidden = false :
                state[action.payload].hidden = true;
        },
    }
});

export const { addExpenditure, deleteExpenditure, toggleLikeExpenditure, toggleHiddenExpenditure } = expenditureSlice.actions;
export const selectExpenditure = (state: RootState) => state.expenditure;
export default expenditureSlice.reducer;