import { createSlice } from '@reduxjs/toolkit';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUserName';
var initialState = {
    username: '',
    password: '',
    isLoading: false
};
export var loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setUsername: function (state, action) {
            state.username = action.payload;
        },
        setPassword: function (state, action) {
            state.password = action.payload;
        },
        setIsLoading: function (state, action) {
            state.isLoading = action.payload;
        }
    },
    extraReducers: function (builder) {
        builder
            .addCase(loginByUsername.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(loginByUsername.fulfilled, function (state, action) {
            state.isLoading = false;
            console.log('action=>', action);
        })
            .addCase(loginByUsername.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
export var loginActions = loginSlice.actions;
export var loginReducer = loginSlice.reducer;
//# sourceMappingURL=loginSlice.js.map