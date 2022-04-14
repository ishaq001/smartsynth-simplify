import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signupUser, loginUser } from '../services/authenticationService'
import { setToken , getToken} from '../services/localStorage'


export interface InitialStateType {
  user: any
  status: string,
  isLoggedIn: boolean,
}

const token = getToken()


const initialState: InitialStateType = {   user: null, status: 'idle', isLoggedIn: token ? true : false}


export const signup = createAsyncThunk("auth/signup", async (value:any) => {
  const {data} = await signupUser(value)
  return  data
  
});

export const login = createAsyncThunk("auth/login", async (data:any) => {
    const response = await loginUser(data)
    setToken(response?.user?.token)
    return response
  });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //signup
    .addCase(signup.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeed";
        state.user = action?.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
      })

//login

.addCase(login.pending, (state, action) => {
    state.status = "pending";
  })
  .addCase(login.fulfilled, (state, action) => {
    state.status = "succeed";
    state.isLoggedIn = true
    state.user = action?.payload?.user;
  })
  .addCase(login.rejected, (state, action) => {
    state.status = "failed";
    state.isLoggedIn = false
  })

  },
});

export const authReducer =  authSlice.reducer;

