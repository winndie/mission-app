import React, { useEffect } from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState,useAppDispatch } from "../state"
import { getAllMissions,viewMission,deleteMission } from '../state/missions'

const Table = () => {
  const dispatch = useAppDispatch()
  const {editing} = useSelector((state:RootState) => state.mission)
  const list = useSelector((state:RootState) => 
    editing?
    state.mission.list.filter(x=>x.id!==state.mission.item.id):
    state.mission.list)

  useEffect(()=>{
    dispatch(getAllMissions())
  },[])

  return (
    <div className="table-responsive">
      <table className="table">
      <caption>List of missions</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Created By</th>
      {editing?<></>:
      <th scope="col">Actions</th>}
    </tr>
  </thead>
  <tbody>
    {
      list.length===0?<tr>No record found</tr>:
      list.map(x=>(
        <tr>
        <th scope="row">{x.id}</th>
        <td>{x.title}</td>
        <td>{x.description}</td>
        <td>{x.createdBy}</td>
        {editing?<></>:
        <td className="row">
          <button onClick={()=>dispatch(viewMission({id:x.id}))} type="submit" className="btn btn-primary">Edit</button>
          <button onClick={()=>dispatch(deleteMission({id:x.id}))} type="submit" className="btn btn-primary">Delete</button>
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