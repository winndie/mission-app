import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const pictureSlice = createSlice({
    name: 'picture',
    initialState: {
    },
    reducers: {
        getPicture: createAsyncThunk(
            'picture/get',
            async (state) => {
                const response = await fetch('https://source.unsplash.com/random/800x600/?mars')
                const picture = await response.json()
            }
        )
    },
  })

export const {getPicture} = pictureSlice.actions
  