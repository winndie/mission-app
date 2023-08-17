import { createAsyncThunk } from '@reduxjs/toolkit'
import {IMission,setLoading,setList} from '../state/missions'

export const fetchAllMissions = createAsyncThunk(
    'missions/fetchAll',
    async (_, thunkAPI) => {
      let result = [] as IMission[]
      try{
        thunkAPI.dispatch(setLoading(true))
        const response = await fetch('https://source.unsplash.com/random/800x600/?mars')      
        if (response.ok){
          result = [
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
        }      
      }catch(e){

      }finally{
        thunkAPI.dispatch(setList(result))
        thunkAPI.dispatch(setLoading(false))
      }
    }
)
  
