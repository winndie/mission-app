import { createAsyncThunk } from '@reduxjs/toolkit'
import {setMissionsLoading,setMissionsList,setMissionItem,updateError} from '../state/missions'
import {setPictureItem} from '../state/picture'
import {setUser} from '../state/app'
import { RootState } from '../state'
import { IMission, IErrors } from '../types'
import { missionInputProps } from '../constants/mission'
import { validateString } from '../errors'

const pictureUri = 'https://source.unsplash.com/random/800x600/?mars'

export const fetchAllMissions = createAsyncThunk(
    'missions/fetchAll',
    async (_, thunkAPI) => {

      const result = {
        user: undefined as string|undefined,
        picture: undefined as string|undefined,
        missions : [] as IMission[]
      }

      try{
        thunkAPI.dispatch(setMissionsLoading(true))
        const response = await fetch(pictureUri)      
        if (response.ok){

          result.picture = response.url
          
          //since there is no user authorization, put @mars_tester here
          result.user = '@mars_tester'

          //since there is no api for mission data, put some fake data here
          result.missions = [
            {id: 1,
            title: 'Go to Mars',
            description: 'Find a rabbit',
            createdBy: '@mars_man',
            modifiedBy:undefined},
            {id: 2,
              title: 'Land on Mars',
              description: 'Fly the Union Flag',
              createdBy: '@mars_lady',
              modifiedBy:undefined},
            {id: 3,
              title: 'Tour around Mars',
              description: 'Get lucky!',
              createdBy: '@oh_boy',
              modifiedBy:undefined},
          ]

          if(result.user)
            thunkAPI.dispatch(setUser(result.user))

          if(result.picture)
            thunkAPI.dispatch(setPictureItem(result.picture))

          if(result.missions.length > 0 )
            thunkAPI.dispatch(setMissionsList(result.missions))
        }      
      }catch(e){

      }finally{
        thunkAPI.dispatch(setMissionsLoading(false))
      }
    }
)
  
export const viewMission = createAsyncThunk<void,number,{state : RootState}>(
  'mission/view',
  (id, thunkAPI) => {
    const user = thunkAPI.getState().app.user
    const mission = {
      id:id,
      title:'',
      description:'',
      createdBy: user,
      modifiedBy: undefined
    } as IMission
    thunkAPI.dispatch(setMissionItem(mission))
  }
)

export const validateMission = createAsyncThunk<boolean,void,{state : RootState}>(
  'mission/validate',
  (_, thunkAPI) => {
    
    missionInputProps.forEach(x=>{

      switch(x.type)
      {
        case 'string':
          thunkAPI.dispatch(updateError({key:x.key as keyof IErrors,error:validateString(thunkAPI.getState().mission.item[x.key],x)}))
          break
      }

    })

    return !Object.values(thunkAPI.getState().mission.errors).some(x=>!!x)
  }
)