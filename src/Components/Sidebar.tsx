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
    <div  data-testid='sidebar' className='border border-primary p-3 flex-wrap'>
      <div className='text-center'>Missions Count: {missionsCount}</div>
      {editing?<></>:
      <div className="p-1">
      <button className='btn btn-primary' onClick={()=>dispatch(deleteAllMissions())}>
        Delete All
      </button>
      </div>}     
    </div>
  )
}

export default Sidebar