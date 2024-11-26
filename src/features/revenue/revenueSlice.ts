import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { State } from "../../type/typeInterface";

type RootExpenseState = State[];


const initialState: RootExpenseState = [
    { item: 'money', amount: 1, date: '22/10/2024', liked: true, hidden: false },
    { item: 'money', amount: 810, date: '22/10/2024', liked: true, hidden: false },
    { item: 'money', amount: 820, date: '22/10/2024', liked: true, hidden: false },
]

export const revenueSlice = createSlice({
    name: 'revenue',
    initialState,
    reducers: {
        addRevenue: (state, action: PayloadAction<State>) => {
            state.push(action.payload)
        },
        deleteRevenue: (state, action: PayloadAction<number>) => {
            return state.filter((entry, index) => index !== action.payload)
        },
        toggleLikeRevenue: (state, action: PayloadAction<number>) => {
            state[action.payload].liked === true ?
                state[action.payload].liked = false :
                state[action.payload].liked = true;
        },
        toggleHiddenRevenue: (state, action: PayloadAction<number>) => {
            state[action.payload].hidden === true ?
                state[action.payload].hidden = false :
                state[action.payload].hidden = true;
        },
    }
});

export const { addRevenue, deleteRevenue, toggleLikeRevenue, toggleHiddenRevenue } = revenueSlice.actions;
export const selectRevenue = (state: RootState) => state.revenue;
export default revenueSlice.reducer;