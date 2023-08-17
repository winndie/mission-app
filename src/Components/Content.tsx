import React from "react"
import '../index.css'
import Form from './Form'
import Table from './Table'
import { RootState,useAppDispatch } from "../state"
import { useSelector } from "react-redux"
import { viewMission } from '../state/missions'

const Content = () => {

  const editing = useSelector((state:RootState) => state.mission.editing)
  const dispatch = useAppDispatch()
  
  return (
    <div className='border border-primary'>
      {editing?<></>:<button onClick={()=>dispatch(viewMission({id:0}))} type="submit" className="btn btn-primary">Add</button>}
      <Form/>
      <Table/>
    </div>
  )
}

export default Content