import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
		addTweet: (state, action) => {
			state.value.push(action.payload);
		},
        deleteAllTweets: (state, action) => {
            state.value = [];
        }
	},
});

export const { addTweet, deleteAllTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;