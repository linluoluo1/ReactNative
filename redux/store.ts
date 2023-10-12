import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice';
import paginationReducer from './paginationSlice';
import searchReducer from './searchSlice';
import sortReducer from './sortSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        pagination: paginationReducer,
        search: searchReducer,
        sort: sortReducer,
        currentPage: paginationReducer,
        searchQuery: searchReducer,
        postsPerPage: paginationReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;