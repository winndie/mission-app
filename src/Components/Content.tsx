import React from "react"
import '../index.css'
import Form from './Form'
import Table from './Table'
import { RootState,useAppDispatch } from "../state"
import { useSelector } from "react-redux"
import { viewMission } from '../services'

const Content = () => {
  const dispatch = useAppDispatch()
  const {loading,editing} = useSelector((state:RootState) => state.mission)
  
  return (
    loading?<>Loading...</>:
    <div className='border border-primary'>
      {editing?<></>:
      <div data-testid='mission-add' className="p-2">
        <button onClick={()=>dispatch(viewMission(0))} type="submit" className="btn btn-primary">Add</button>
        </div>}
      <Form/>
      <Table/>
    </div>
  )
}

export default Content