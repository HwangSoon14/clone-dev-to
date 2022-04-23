import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from '../api/authApi';

const initialState = {
    current_user: JSON.parse(localStorage.getItem("current_user")) || {},
    access_token: "",
}

export const login = createAsyncThunk('auth/login', async (payload) => {
    // call API to register
    const  res = await authApi.login(payload);
    console.log(res);
    const {data} = res;
    const {access_token , ...userInfo} = data;
    console.log("responsive",res);
    //save current_user to local storage
    localStorage.setItem("current_user", JSON.stringify(userInfo));

    return {
      access_token,
      user: userInfo,
    };
}
);


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
            //clear current_user in storage

            localStorage.removeItem("current_user");
            state.current_user = {};
            state.access_token = "";

    },

  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
        state.current_user = action.payload.user;
        state.access_token = action.payload.access_token;
    },
},
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = authSlice.actions

export default authSlice.reducer;
