
import { createSlice } from '@reduxjs/toolkit';
import { PaginationState } from '../interfaces/IPaginationState';


const initialState: PaginationState = {
    currentPage: 1,
    postsPerPage: 10,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setPostsPerPage: (state, action) => {
            state.postsPerPage = action.payload;
        },
    },
});

export const { setCurrentPage, setPostsPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;
