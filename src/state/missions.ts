import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { IMission, IMissionErrors } from '../types'

export const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: true,
    editing: false,
    info: undefined as string|undefined,
    errors: {} as IMissionErrors,
    item: {} as IMission,
    list: [] as IMission[]
  },
  reducers: {
    setMissionsLoading: (state, action:PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setMissionsList: (state, action:PayloadAction<IMission[]>) => {
      state.list = action.payload
    },
    setMissionItem: (state, action:PayloadAction<IMission>) => {
      if(action.payload.id===0)
      {
        state.editing = true
        state.info = 'Adding new mission...'
        state.item = action.payload
      }else{
        const item = state.list.find(x=>x.id===action.payload.id)
        if(item)
        {
          state.editing = true
          item.modifiedBy = action.payload.modifiedBy
          state.info = 'Editing mission #'+item.id
          state.item = item  
        }
      }
  },
    updateError: (state, action:PayloadAction<{key:keyof IMissionErrors,error:string}>) => {
      state.errors = {...state.errors,[action.payload.key]:action.payload.error}
    },
    updateMission: (state, action:PayloadAction<{key:keyof IMission,value:string}>) => {
        if(action.payload.key && action.payload.value)
          state.item = {...state.item,[action.payload.key]:action.payload.value} as IMission
      },
    cancelMission: (state) => {
        state.editing = false
        state.item = {id:0} as IMission
        state.info = undefined
        state.errors = {} as IMissionErrors
      },
    submitMission: (state) => {

        if(state.item.id === 0)
        {
          state.list = [...state.list,{...state.item,id:state.list.length+1}]
        }else{
          state.list = state.list.map(x=>x.id===state.item.id?state.item:x)            
        }
        state.editing = false
        state.item = {id:0} as IMission
        state.info = undefined
        state.errors = {} as IMissionErrors
    },
    deleteMission: (state, action:PayloadAction<number>) => {
        state.list = state.list.filter(x=>x.id!==action.payload)
        state.errors = {} as IMissionErrors
    },
    deleteAllMissions: (state) => {
        state.editing = false
        state.list = []
        state.errors = {} as IMissionErrors
      },
  },
})

export const {
  setMissionsLoading,
  setMissionsList,
  setMissionItem,
  updateError,
  updateMission,
  cancelMission,
  submitMission,
  deleteMission,
  deleteAllMissions} = missionSlice.actions