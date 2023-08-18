import React from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../state"
import { submitMission, updateMission,cancelMission } from "../state/missions"

const Form = () => {
  
  const editing = useSelector((state:RootState) => state.mission.editing)
  const item = useSelector((state:RootState) => state.mission.item)
  const dispatch = useAppDispatch()

  return (
    editing?
    <>
    <form  data-testid='mission-form' className="form-group p-2 flex-wrap">
    <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <label htmlFor="title">Title</label>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <input maxLength={100} value={item.title} onChange={(e)=>dispatch(updateMission({key:'title',value:e.currentTarget.value}))} type="string" className="form-control" id="title" aria-describedby="title" placeholder="Title of the mission"/>
          <small id="titleHelp" className="form-text text-muted">What is the mission?</small>
          </div>
    </div>
    <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <label htmlFor="description">Description</label>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <input maxLength={500} value={item.description} onChange={(e)=>dispatch(updateMission({key:'description',value:e.currentTarget.value}))} type="string" className="form-control" id="title" aria-describedby="title" placeholder="Description of the mission"/>
          <small id="descriptionHelp" className="form-text text-muted">Describe the mission here</small>
          </div>
    </div>
    <div className="row p-2">
      <div className="p-1"><button type="submit" onClick={(e)=>{
        e.preventDefault()
        dispatch(submitMission())
      }} className="btn btn-primary">Submit</button></div>      
      <div className="p-1"><button type="submit" onClick={(e)=>{
        e.preventDefault()
        dispatch(cancelMission())
      }} className="btn btn-primary">Cancel</button></div>
    </div>
    </form>
    </>
    :<></>
  )
}

export default Form