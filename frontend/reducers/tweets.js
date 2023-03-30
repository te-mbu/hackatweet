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
        },
		deleteTweet: (state, action) => {
			state.value = state.value.filter(tweet => tweet.message !== action.payload)
		}
	},
});

export const { addTweet, deleteAllTweets, deleteTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;