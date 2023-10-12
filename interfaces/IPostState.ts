import { IPost } from "./Ipost";
export interface PostsState {
    posts: IPost[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}