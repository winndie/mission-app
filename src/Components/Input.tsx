import React from "react"
import '../index.css'
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../state"
import { updateError, updateMission } from "../state/missions"
import { IErrors, IMissionInputProps } from "../types"

const Input:React.FC<{props:IMissionInputProps}> = ({props}) => {
  
  const error = useSelector((state:RootState) => state.mission.errors[props.key as keyof IErrors])
  const value = useSelector((state:RootState) => state.mission.item[props.key])
  const dispatch = useAppDispatch()

  return (<>
    <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
    <label>{props.label}</label>
    </div>
    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10">
    <input
        value={value}
        onFocus={()=>dispatch(updateError({key:props.key as keyof IErrors, error:undefined}))}
        onChange={(e)=>dispatch(updateMission({key:props.key, value:e.currentTarget.value}))}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type="string" className="form-control"/>
    <small className={!!error?'form-text-error ':''+'form-text text-muted'}>{error??props.help}</small>
    </div>
    </>)
}

export default Input