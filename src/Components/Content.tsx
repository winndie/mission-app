import React from "react"
import '../index.css'
import Form from './Form'
import Table from './Table'
import { RootState } from "../state"
import { useSelector } from "react-redux"

const Content = () => {

  const editing = useSelector((state:RootState) => state.mission.editing)
  
  return (
    <div className='border border-primary'>
      {editing?<></>:<button type="submit" className="btn btn-primary">Add</button>}
      <Form/>
      <Table/>
    </div>
  )
}

export default Content