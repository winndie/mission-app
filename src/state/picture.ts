import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export const pictureSlice = createSlice({
    name: 'picture',
    initialState: {
        item: undefined as string|undefined,
    },
    reducers: {
        setPictureItem: (state, action:PayloadAction<string>) => {
            state.item = action.payload
        },      
    },
  })

export const {
    setPictureItem
} = pictureSlice.actions
  