import { createSlice,PayloadAction } from '@reduxjs/toolkit'

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
    info: undefined as string|undefined,
    editing: false,
    item: {} as IMission,
    list: [] as IMission[]
  },
  reducers: {
    viewMission: (state, action:PayloadAction<IPayloadAction>) => {
      if(action.payload.id===0)
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
        const item = state.list.find(x=>x.id===action.payload.id)
        if(item)
        {
          state.editing = true
          state.info = 'Editing mission #'+item.id
          state.item = item  
        }
      }
  },
    updateMission: (state, action:PayloadAction<IPayloadAction>) => {
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
    deleteMission: (state, action:PayloadAction<IPayloadAction>) => {
      state.list = state.list.filter(x=>x.id!==action.payload.id)
  },
    getAllMissions: (state) => {
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
  },
    deleteAllMissions: (state) => {
      state.editing = false
      state.list = []
    },
  },
})

export const {
  viewMission,
  updateMission,
  cancelMission,
  submitMission,
  deleteMission,
  getAllMissions,
  deleteAllMissions} = missionSlice.actions