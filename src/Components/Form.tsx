import React from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../state"
import { submitMission, cancelMission } from "../state/missions"
import Input from "./Input"
import { missionInputProps } from '../constants'
import { validateMission } from "../services"

const Form = () => {

  const {editing} = useSelector((state:RootState) => state.mission)
  const dispatch = useAppDispatch()

  return (
    editing?
    <>
    <form data-testid='mission-form' className="form-group p-2 flex-wrap">
      <div className="row">{!!missionInputProps.title && <Input storeKey={'mission'} uiKey={'title'} props={missionInputProps.title}/>}</div>
      <div className="row">{!!missionInputProps.description && <Input storeKey={'mission'} uiKey={'description'} props={missionInputProps.description}/>}</div>
    <div className="row p-2">
      <div className="p-1"><button type="submit" onClick={(e)=>{
        e.preventDefault()
        dispatch(validateMission())
          .then(x=>x.payload && dispatch(submitMission()))
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