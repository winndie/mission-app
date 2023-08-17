import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import {AppDispatch} from './index'
import { useDispatch } from 'react-redux'

export const useMissionDispatch = () => useDispatch<AppDispatch>()

export interface IPayloadAction {
  id?:number,
  key?: keyof IMission,
  value?: string,
}

export interface IMission {
  id: number,
  title: string,
  description: string,
  createdBy: string,
}

export const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: false,
    editing: false,
    error: undefined as string|undefined,
    item: {} as IMission,
    list: [] as IMission[]
  },
  reducers: {
    viewMission: (state, action:PayloadAction<IPayloadAction>) => {
      try{
        state.loading = true
        state.error = undefined
        state.editing = true
        state.item = state.list.find(x=>x.id===action.payload.id)??{id:0} as IMission
      }catch(e){
        state.error = String(e)
      }finally{
        state.loading = false
      }
    },
    updateMission: (state, action:PayloadAction<IPayloadAction>) => {
      if(action.payload.key && action.payload.value)
        state.item = {...state.item,[action.payload.key]:action.payload.value} as IMission
    },
    submitMission: (state, action:PayloadAction<IPayloadAction>) => {
      try{
        state.loading = true
        state.error = undefined
        state.list = state.item.id>0?
          state.list.map(x=>x.id===state.item.id?state.item:x):
          state.list.concat({...state.item,id:state.list.length+1})
      }catch(e){
        state.error = String(e)
      }finally{
        state.loading = false
        state.editing = false
        state.item = {} as IMission
      }
    },
    deleteMission: (state, action:PayloadAction<IPayloadAction>) => {
      try{
        state.loading = true
        state.error = undefined
        state.editing = false
        state.list = state.list.filter(x=>x.id!==action.payload.id)
      }catch(e){
        state.error = String(e)
      }finally{
        state.loading = false
      }
    },
    viewAllMissions: (state) => {
      try{
        state.loading = true
        state.error = undefined
        state.editing = false
        state.list = [
          {id: 1,
          title: 'Go to Mars',
          description: 'Find a rabbit',
          createdBy: '@mars_man',},
          {id: 2,
            title: 'Land on Mars',
            description: 'Fly the Union Flag',
            createdBy: '@mars_lady',},
          {id: 3,
            title: 'Tour around Mars',
            description: 'Get lucky!',
            createdBy: '@oh_boy',},
        ]

      }catch(e){
        state.error = String(e)
      }finally{
        state.loading = false
      }
    },
    deleteAllMissions: (state, action:PayloadAction<IPayloadAction>) => {
      try{
        state.loading = true
        state.error = undefined
        state.editing = false
      state.list = []
      }catch(e){
        state.error = String(e)
      }finally{
        state.loading = false
      }
    },
  },
})

export const {viewMission,updateMission,submitMission,deleteMission,viewAllMissions,deleteAllMissions} = missionSlice.actions