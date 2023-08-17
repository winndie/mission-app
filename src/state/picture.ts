import { createSlice,createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export const pictureSlice = createSlice({
    name: 'picture',
    initialState: {
        loading: true,
    },
    reducers: {
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        },      
    },
  })

export const {setLoading} = pictureSlice.actions
  