import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchPostsFromAPI } from '../api/api';
import { IPost } from '../interfaces/Ipost';
import { PostsState } from '../interfaces/IPostState';


const initialState: PostsState = {
    posts: [],
    loading: 'idle',
    error: null,
};


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { getState }) => {
    const state = getState() as RootState;
    const { currentPage, postsPerPage, searchQuery, sort } = state;

    try {
        const response = await fetchPostsFromAPI(currentPage.currentPage, postsPerPage.postsPerPage, searchQuery.searchQuery, sort);


        return response.data;
    } catch (error) {
        throw error;
    }
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message || 'An error occurred.';
            });
    },
});

export default postsSlice.reducer;
