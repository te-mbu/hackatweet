import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
    token: null
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAuthenticated = true;
            state.token = action.payload
		},
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.token = null
        }
	},
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;