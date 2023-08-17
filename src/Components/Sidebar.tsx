import React from 'react'
import '../index.css'
import { useSelector } from 'react-redux'
import { RootState,useAppDispatch } from "../state"
import { deleteAllMissions } from '../state/missions'

const Sidebar = () => {

  const noOfMissions = useSelector((state:RootState) => state.mission.list.length)
  const editing = useSelector((state:RootState) => state.mission.editing)
  const dispatch = useAppDispatch()

  return (
    <div className='border border-primary container'>
      <div>Number of missions:</div>
      <div>{noOfMissions}</div>
      {editing?<></>:
      <button className='btn btn-primary' onClick={()=>dispatch(deleteAllMissions())}>
        Delete All
      </button>}      
    </div>
  )
}

export default Sidebar