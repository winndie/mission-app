import React from 'react'
import '../index.css'
import { useSelector } from 'react-redux'
import { RootState,useAppDispatch } from "../state"
import { deleteAllMissions } from '../state/missions'

const Sidebar = () => {

  const missionsCount = useSelector((state:RootState) => state.mission.list.length)
  const {loading,editing} = useSelector((state:RootState) => state.mission)
  const dispatch = useAppDispatch()

  return (
    loading?<>Loading...</>:
    <div className='border border-primary container'>
      <div>Number of missions:</div>
      <div>{missionsCount}</div>
      {editing?<></>:
      <button className='btn btn-primary' onClick={()=>dispatch(deleteAllMissions())}>
        Delete All
      </button>}      
    </div>
  )
}

export default Sidebar