import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getComments = createAsyncThunk('comments/commentsFetched', async (datas) => {
    const { data, limitComment } = datas;
    try {
        const response = await axios.get(`https://appmovie.onrender.com/comment/api/show/`, {
            params: {
                id_movie: data,
                limit: limitComment,
            },
        });
        return response.data.data;
    } catch (err) {
        return err.message;
    }
});

export const addCommet = createAsyncThunk('comments/addComment', async (dataPost) => {
    const user = localStorage.getItem('account');
    const { data, text } = dataPost;
    const newComment = {
        id: data,
        e: user,
        c: text,
    };

    await axios.post('https://appmovie.onrender.com/comment/api/add', newComment);

    return newComment;
});
