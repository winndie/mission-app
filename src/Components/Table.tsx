import React from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState,useAppDispatch } from "../state"
import { deleteMission } from '../state/missions'
import { viewMission } from '../api'

const Table = () => {
  const dispatch = useAppDispatch()
  const {editing, loading} = useSelector((state:RootState) => state.mission)
  const list = useSelector((state:RootState) => 
    editing?
    state.mission.list.filter(x=>x.id!==state.mission.item.id):
    state.mission.list)

  return (
    <div data-testid='mission-table' className="p-2 table-responsive-lg table-responsive-xl table-responsive-md table-responsive-sm">
      <table className="table">
      <caption>List of missions</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Created By</th>
      <th scope="col">Modified By</th>
      {editing?<></>:
      <th scope="col">Actions</th>}
    </tr>
  </thead>
  <tbody>
    { 
      loading?<>Loading...</>:
      list.length===0?<tr>No record found</tr>:
      list.map(x=>(
        <tr>
        <th scope="row">{x.id}</th>
        <td>{x.title}</td>
        <td>{x.description}</td>
        <td>{x.createdBy}</td>
        <td>{x.modifiedBy}</td>
        {editing?<></>:
        <td className="row">
          <div className="p-1">
          <button onClick={()=>dispatch(viewMission(x.id))} type="submit" className="btn btn-primary">Edit</button>
          </div>
          <div className="p-1">
          <button onClick={()=>dispatch(deleteMission(x.id))} type="submit" className="btn btn-primary">Delete</button>            
          </div>
        </td>}
        </tr>    
      ))
    }
  </tbody>      
  </table>
    </div>
  )
}

export default Table