import { createSlice } from '@reduxjs/toolkit';

import { addCommet, getComments } from './commentsApi';

export const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        allComments: [],
    },
    extraReducers: (builders) => {
        //GET COMMENTS
        builders
            .addCase(getComments.pending, () => {
                console.log('Loading...');
            })
            .addCase(getComments.fulfilled, (state, action) => {
                console.log('ok');
                state.allComments = action.payload;
            })
            .addCase(getComments.rejected, () => {
                console.log('Failed....');
            });
        //POST COMMENT
        builders.addCase(addCommet.fulfilled, (state, action) => {
            state.allComments.unshift(action.payload);
            if (state.allComments.length > 5) {
                state.allComments.pop();
            }
        });
    },
});

// export const {} = commentSlice.actions;
export default commentSlice.reducer;
