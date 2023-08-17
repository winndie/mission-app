import React from 'react'
import '../index.css'
import { useSelector } from 'react-redux'
import { RootState } from '../state'

const Sidebar = () => {

  const noOfTasks = useSelector((state:RootState) => state.mission.list.length)
  const editing = useSelector((state:RootState) => state.mission.editing)

  return (
    <div className='border border-primary container'>
      <div>Number of tasks:</div>
      <div>{noOfTasks}</div>
      {editing?<></>:
      <button className='btn btn-primary' onClick={()=>{}}>
        Delete All
      </button>}      
    </div>
  )
}

export default Sidebar