import { configureStore } from '@reduxjs/toolkit'
import { missionSlice } from './missions'
import { pictureSlice } from './picture'
import { appSlice } from './app'
import { useDispatch } from 'react-redux'

const store = configureStore({reducer:{
    app: appSlice.reducer,
    picture: pictureSlice.reducer,
    mission: missionSlice.reducer,
}})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
