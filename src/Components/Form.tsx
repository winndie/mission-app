import React from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState } from "../state"

const Form = () => {
  
  const editing = useSelector((state:RootState) => state.mission.editing)
  const item = useSelector((state:RootState) => state.mission.item)

  return (
    editing?
    <>
    <form className="form-group container">
    <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <label htmlFor="title">Title</label>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <input disabled={!editing} value={item.title} type="string" className="form-control" id="title" aria-describedby="title" placeholder="Title of the mission"/>
          <small id="titleHelp" className="form-text text-muted">What is the title?</small>
          </div>
    </div>
    <div className="row">
      <button type="submit" className="btn btn-primary col-sm-2 col-md-2 col-lg-2 col-xl-2">Submit</button>      
      <button type="submit" className="btn btn-primary col-sm-2 col-md-2 col-lg-2 col-xl-2">Cancel</button>
    </div>
    </form>
    </>
    :<></>
  )
}

export default Form