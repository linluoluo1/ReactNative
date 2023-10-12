
import { createSlice } from '@reduxjs/toolkit';
import { SortState } from '../interfaces/ISortState';

const initialState: SortState = {
    sortBy: null,
    sortOrder: 'asc',
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload;
        },
    },
});

export const { setSortBy, setSortOrder } = sortSlice.actions;
export default sortSlice.reducer;
