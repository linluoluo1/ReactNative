import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchPostsFromAPI = async (
    currentPage: number,
    postsPerPage: number,
    searchQuery: string,
    sort: { sortBy: string | null; sortOrder: string }
) => {
    try {
        const response = await axios.get(`${baseURL}/posts`, {
            params: {
                _page: currentPage,
                _limit: postsPerPage,
                _sort: sort.sortBy,
                _order: sort.sortOrder,
                q: searchQuery,
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
};
