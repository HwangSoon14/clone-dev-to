import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from '../api/authApi';
import { toast } from 'react-toastify';
const initialState = {
    current_user: JSON.parse(localStorage.getItem("current_user")) || {},

}

export const login = createAsyncThunk('auth/login', async (payload) => {
    // call API to register
    try {
      const  res = await authApi.login(payload);
    //save current_user to local storage
    localStorage.setItem("current_user", JSON.stringify({...res}));
    
    return {...res};
    } catch (error) {
      toast.error(error.msg);
      throw new Error();
    }

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
    },

  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
        state.current_user = {...action.payload};
        
    },
},
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer;
