import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export interface IMission {
  id: number,
  title: string,
  description: string,
  createdBy: string,
}

export const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: true,
    editing: false,
    info: undefined as string|undefined,
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
    viewMission: (state, action:PayloadAction<number>) => {
      if(action.payload===0)
      {
        state.editing = true
        state.info = 'Adding new mission...'
        state.item = {
          id:0,
          title:'',
          description:'',
          createdBy:''
        } as IMission
      }else{
        const item = state.list.find(x=>x.id===action.payload)
        if(item)
        {
          state.editing = true
          state.info = 'Editing mission #'+item.id
          state.item = item  
        }
      }
  },
    updateMission: (state, action:PayloadAction<{key:keyof IMission,value:string}>) => {
      if(action.payload.key && action.payload.value)
        state.item = {...state.item,[action.payload.key]:action.payload.value} as IMission
    },
    cancelMission: (state) => {
      state.editing = false
      state.item = {id:0} as IMission
      state.info = undefined
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
  },
    deleteMission: (state, action:PayloadAction<number>) => {
      state.list = state.list.filter(x=>x.id!==action.payload)
  },
    deleteAllMissions: (state) => {
      state.editing = false
      state.list = []
    },
  },
})

export const {
  setMissionsLoading,
  setMissionsList,
  viewMission,
  updateMission,
  cancelMission,
  submitMission,
  deleteMission,
  deleteAllMissions} = missionSlice.actions