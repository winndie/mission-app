import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: undefined as string|undefined,
    },
    reducers: {
        setUser: (state, action:PayloadAction<string>) => {
            state.user = action.payload
        },      
    },
  })

export const {
    setUser
} = appSlice.actions
  