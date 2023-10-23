import React from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../state"
import { submitMission, cancelMission } from "../state/missions"
import Input from "./Input"
import { missionInputProps } from '../constants/mission'
import { validateMission } from "../services"

const Form = () => {

  const {editing} = useSelector((state:RootState) => state.mission)
  const dispatch = useAppDispatch()

  const titleProps = missionInputProps.get('title')
  const descriptionProps = missionInputProps.get('description')

  return (
    editing?
    <>
    <form data-testid='mission-form' className="form-group p-2 flex-wrap">
      <div className="row">{!!titleProps &&  <Input props={titleProps}/>}</div>
      <div className="row">{!!descriptionProps &&  <Input props={descriptionProps}/>}</div>
    <div className="row p-2">
      <div className="p-1"><button type="submit" onClick={(e)=>{
        e.preventDefault()
        dispatch(validateMission()).then(resp=>{
          if(resp.payload)
          {
            dispatch(submitMission())
          }
        })
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