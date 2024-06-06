import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IUserLoginResponse } from '../../types'

// Define a type for the slice state
interface IUserState {
  user: IUserLoginResponse | null,
  isAuth: boolean
}

// Define the initial state using that type
const initialState: IUserState = {
    user: null,
    isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
        login: (state, action: PayloadAction<IUserLoginResponse>) => {
            state.user = action.payload
            state.isAuth = true
        },
        logout: (state) => {
            state.isAuth = false
            state.user = null
        }
  },
})

export const { login, logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer