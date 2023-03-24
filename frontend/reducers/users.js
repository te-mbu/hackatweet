import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action) => {
            state.value = action.payload
		},
        logout: (state) => {
            state.value = ''
        }
	},
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;