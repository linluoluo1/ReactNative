
import { createSlice } from '@reduxjs/toolkit';
import { SearchState } from '../interfaces/ISearchState';

const initialState: SearchState = {
    searchQuery: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
